import mailchimp from 'mailchimp-marketing';

// Initialize Mailchimp client (you'll need to set MAILCHIMP_API_KEY and MAILCHIMP_LIST_ID env vars)
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, type, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    // Add subscriber to Mailchimp list if MAILCHIMP_API_KEY is set
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: name,
            PHONE: phone || '',
          },
          tags: ['contact-form', type || 'general'],
        });
      } catch (error) {
        // Don't fail if Mailchimp fails, but log it
        console.error('Mailchimp error:', error);
      }
    }

    // Send email notification to Navigate Business
    if (process.env.SENDGRID_API_KEY) {
      // Optional: Send email via SendGrid or similar service
      // For now, just log that a form was submitted
      console.log('Form submission:', { name, email, phone, type, message });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Thank you! We\'ve received your message and will get back to you soon.',
      }),
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error processing your request. Please try again.',
      }),
    };
  }
};
