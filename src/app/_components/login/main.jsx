import React from 'react';
import ReactDOM from 'react-dom/client';
import GoogleLoginComponent from '/google';
import './login.module.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="741417576012-ja99m27pq2gflagh3snb7c1hbotqnnfa.apps.googleusercontent.com">
            <GoogleLoginComponent />
        </GoogleOAuthProvider>
    </React.StrictMode>
);

             