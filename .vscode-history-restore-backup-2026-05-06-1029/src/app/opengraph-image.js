import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #18CB96 0%, #373643 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Navigate Business
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
