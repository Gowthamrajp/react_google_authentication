import React, {useState} from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';


export default function Login() {

    const clientId = "301010349093-oha37bq9rvfhvmjbias08mfgjdqdp3jh.apps.googleusercontent.com"; 
    const [showLoginButton,setShowLoginButton] = useState(true);
    const [showLogoutButton,setShowLogoutButton] = useState(false);
    const onLoginSuccess = (res)=>{
        console.log('login success:',res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }
    const onFailureSuccess = (res)=>{
        console.log('Login Failed:',res);
    }
    const onSignoutSuccess= ()=>{
        alert('you have signed out successfully');
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }


    
  return (
    <div>
        {showLoginButton?
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onFailureSuccess}
            cookiePolicy={'single_host_origin'}
        /> : null
        }
        {showLogoutButton?
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> :null
        }
    </div>
  )
}
