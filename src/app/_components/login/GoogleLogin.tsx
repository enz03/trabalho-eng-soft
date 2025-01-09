"use client";
import { GoogleLogin } from '@react-oauth/google';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './login.module.css';

export default function GoogleLoginComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            signIn('google', { credential: credentialResponse.credential });
          }}
          onError={() => {
            console.log('Login Failed');    
          }}
        />
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
}