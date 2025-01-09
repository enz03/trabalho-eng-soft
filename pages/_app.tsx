import { GoogleOAuthProvider } from '@react-oauth/google';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;