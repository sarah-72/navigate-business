# Navigate Business Website

A premium, modern, mobile-responsive website for Navigate Business - a UK-based business mentoring and enterprise support brand.

## Tech Stack

- **Framework**: Next.js 16 
- **Styling**: Tailwind CSS
- **CMS**: Sanity CMS
- **Forms**: Resend
- **Email Marketing**: Mailchimp Integration
- **Payments**: Stripe Ready
- **Hosting**: Vercel
- **SEO**: Next.js native SEO features with JSON-LD structured data

## Features

- ✅ Fully responsive mobile-first design
- ✅ SEO optimized (metadata, sitemap, robots.txt, JSON-LD)
- ✅ Fast performance optimization
- ✅ Contact form with Netlify Functions
- ✅ Mailchimp email list integration
- ✅ CMS for easy content editing
- ✅ Service categorization (individuals & organizations)
- ✅ Testimonials section
- ✅ Partnership CTAs
- ✅ Accessibility compliant

## Brand Colors

- **Mint Green**: #18CB96 (Primary accent)
- **Charcoal**: #373643 (Text & structure)
- **White**: #FFFFFF (Backgrounds)

## Sections

1. **Hero Section** - Main headline and CTAs
2. **Dual Audience** - Services for individuals vs. organizations
3. **Services Overview** - 6 key service cards
4. **Sound Familiar** - Pain points for both audiences
5. **Why Choose Navigate** - 6 value propositions
6. **Testimonials** - Social proof with client feedback
7. **Partnership CTA** - Call to action for organizational partners
8. **Contact Preview** - Contact methods and form

## Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - About Sarah and expertise
- **Services** (`/services`) - Detailed service offerings
- **Partnerships** (`/partnerships`) - For organizational partners
- **Workshops** (`/workshops`) - Training and workshop offerings
- **Contact** (`/contact`) - Contact form and inquiry

## Setup & Deployment

### Prerequisites
- Node.js 18+
- npm or yarn
- Netlify account for deployment
- GitHub account for CMS

### Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Mailchimp, Stripe, and other API keys

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Or connect your GitHub repository to Netlify for continuous deployment.

## Environment Variables

Required environment variables:

```
MAILCHIMP_API_KEY=your_key
MAILCHIMP_SERVER=us1
MAILCHIMP_LIST_ID=your_list_id
NEXT_PUBLIC_SITE_URL=https://navigatebusiness.co.uk
```

Optional:
```
SENDGRID_API_KEY=your_key
SENDGRID_FROM_EMAIL=noreply@navigatebusiness.co.uk
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key
```

## CMS Usage

After deployment to Netlify:

1. Set up Netlify Identity on your Netlify dashboard
2. Invite yourself as a CMS user
3. Go to `https://yourdomain.com/admin`
4. Login and start editing content

## SEO Features

- Dynamic metadata for all pages
- Sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- JSON-LD structured data for rich snippets
- Open Graph images
- Twitter Card support
- Mobile-first responsive design
- Fast Core Web Vitals

## Contact Form Integration

The contact form at `/contact` integrates with:
- **Netlify Functions** for form processing
- **Mailchimp** for email list subscription
- Form submission validation
- Success feedback to users

## Performance Optimization

- Image optimization
- Code splitting
- CSS minification via Tailwind
- Next.js built-in caching
- Lazy loading components
- Optimized fonts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
navigate-business/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.js          # Root layout with Header/Footer
│   │   ├── page.js            # Home page
│   │   ├── about/             # About page
│   │   ├── services/          # Services page
│   │   ├── partnerships/      # Partnerships page
│   │   ├── workshops/         # Workshops page
│   │   ├── contact/           # Contact page
│   │   ├── sitemap.js         # SEO sitemap
│   │   ├── robots.js          # SEO robots.txt
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Footer.js          # Footer
│   │   ├── JsonLd.js          # SEO structured data
│   │   └── sections/          # Home page sections
│   └── utils/
│       ├── seo.js             # SEO utilities
│       └── helpers.js         # Helper functions
├── netlify/
│   └── functions/             # Netlify Functions
│       └── contact.js         # Form submission handler
├── public/
│   ├── admin/                 # Decap CMS
│   │   ├── config.yml        # CMS configuration
│   │   └── index.html        # CMS interface
│   └── uploads/               # CMS uploads
├── tailwind.config.js         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── netlify.toml               # Netlify deployment config
```

## License

Business use - Navigate Business

## Support

For issues or feature requests, contact hello@navigatebusiness.co.uk
