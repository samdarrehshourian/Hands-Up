import React, {useState} from 'react';
import FBLogin from 'react-facebook-login';
import Header from './Header';
import Layout from './Layout';
import logo from '../icons/Logga+Header/handsUp_black.png'
import '../scss-style/Login.scss'; 


const  Login = () => {

    let facebookContent; 

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        setIsLoggedIn(true); 
        setName(response.name);
        setPicture(response.picture.data.url);
    }
    
    if(isLoggedIn){
        facebookContent = (
            <div>
                <Header name={name} image={picture}/>
                <Layout name={name} image={picture}/>
            </div>
        );
    }else{
        facebookContent = (
            <div className='container'>
                <div className='icon-name'>
                    <img src={logo} alt="logo"/>
                    <h1>Hands <b>Up</b></h1>    
                </div>
                <div className="login-box">
                <FBLogin
                appId="180203020057977"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                />
                </div>
            </div>
            
        );
    }
    
    return (
        <div id="facebook">{facebookContent}</div>
    );
}

export default Login;