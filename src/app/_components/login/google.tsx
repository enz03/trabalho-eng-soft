"use client";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { setUser, getUser } from './user';

function GoogleLoginComponent() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const token = credentialResponse.credential?.split('.');
        token?.shift();
        token?.splice(1, 1);
        const User = token?.join('.');
        setUser(User)
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

export default GoogleLoginComponent;