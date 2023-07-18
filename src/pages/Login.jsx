import React, {useState} from 'react'
import MainLogo from '../images/acme_main_logo2.png'
import {useNavigate} from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const emailInput = (e)=>{
 setEmail(e.target.value)
}

const passwordInput = (e)=>{
  setPassword(e.target.value)
}

const loginUser = async ()=>{  
  navigate('/pendingtasks');        
}

  return (
    <div id="login" style={{height:"100vh"}}>
        <div class="row p-4">
            <div class="border rounded p-4 shadow-lg login-box mt-5">
                <div class="logo text-center">
                    <img src={MainLogo} style={{height:"66px",width:"200px"}} alt=""/>
                </div>
                <form action="" class="mt-4" novalidate>
                    <div class="form-group mt-4">
                        <label for="username" class="control-label h5 mb-2 text-white">Username</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Enter username" 
                        name="username"
                        value={email}
                        onChange={emailInput}
                        />
                    </div>
                    <div class="form-group mt-4">
                        <div class="d-flex justify-content-between">
                            <div class="h5 text-white">Password</div>
                            <i class="fa fa-eye"></i>
                        </div>
                        <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Enter password" 
                        name="password"
                        value={password}
                        onChange={passwordInput}
                        />
                    </div>
                    <div class="mt-4 ml-4 text-white text-center">
                        <button class="btn btn-primary" onClick={loginUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login