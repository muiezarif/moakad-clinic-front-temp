import React, { useState } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import {useHistory} from "react-router-dom"

import moakad from 'api/moakad'

const Login = () => {
  const [forgot, setForgot] = useState(true);
  const [newpassword, setNewpassword] = useState(true);
  const [reset, setReset] = useState(true);
  const [register, setRegister] = useState(false);

  const [phone,setPhone] = useState("")
  const [password, setPassword] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useHistory()
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const isLengthValid = password.length >= 8;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const registerClinic = async() => {
    const data = { phone: phone, password: loginPassword }
    await moakad.post("/auth/register-clinic", { ...data }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': '*/*'
      }
    }).then((response) => {
      if (response.data.success) {
        
        navigate.push("/clinic/dashboard")
      } else {
      }

    }).catch(err => {
      console.log(err.message)
    });
  }
  const loginClinic = async() => {
    const data = { phone: phone, password: loginPassword }
    navigate.push("/clinic/dashboard")
    // await moakad.post("/auth/login-clinic", { ...data }, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': '*/*'
    //   }
    // }).then((response) => {
    //   if (response.data.success) {
        
    //     navigate.push("/clinic/dashboard")
    //   } else {
    //   }

    // }).catch(err => {
    //   console.log(err.message)
    // });
  }
  return (
    <wection className="mainlogin">
      <div className="loginbigimage">
        <img src="\assets\main-assets\loginmainimage.png" alt="innerloginbigimage" className="innerloginbigimage img-fluid" />

        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="carouselheadings">
                <h3 className="carouselhead">Lorem ipsum dolor sit amet consectetur. Neque pharetra pulvinar quam magna dui non. Quis lorem nisl in sit suspendisse adipiscing tortor.</h3>
                <p className="doctorname">Dr. Saud Mohammed</p>
                <p className="rankname">Moakad’s Owner</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="carouselheadings">
                <h3 className="carouselhead">Neque pharetra pulvinar quam magna dui non. Quis lorem nisl in sit suspendisse adipiscing tortor.</h3>
                <p className="doctorname">Dr. Dummy</p>
                <p className="rankname">Moakad’s Owner</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <div className="carouselheadings">
                <h3 className="carouselhead">Lorem ipsum dolor sit amet consectetur. Quis lorem nisl in sit suspendisse adipiscing tortor.</h3>
                <p className="doctorname">Dr. Hamza Iftikhar</p>
                <p className="rankname">Moakad’s Doctor</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="loginform">
        <img src="\Logo.svg" alt="loginlogoimg" className="loginlogoimg" />
        {forgot ?
          <div className="welcomemain">
            <h4 className="welcomehead">Welcome back</h4>
            <p className="welcomepara">Welcome back! Please enter your details.</p>
            <div className="invalidmain">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='i-img'>
                <g clip-path="url(#clip0_155_20512)">
                  <path d="M8.00065 5.33301V7.99967M8.00065 10.6663H8.00732M14.6673 7.99967C14.6673 11.6816 11.6826 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6816 1.33398 7.99967C1.33398 4.31778 4.31875 1.33301 8.00065 1.33301C11.6826 1.33301 14.6673 4.31778 14.6673 7.99967Z" stroke="#E86136" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_155_20512">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="invalidpara">Invalid username or password. Please check your credentials and try again.</p>
            </div>
            <p className="inputtext">Mobile Number</p>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="logininput" placeholder='Enter your mobile number' />
            <p className="inputtext">Password</p>
            <div className="passwordinput">
              <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className="logininput" placeholder='••••••••' />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='eyeimg' onClick={togglePasswordVisibility}>
                <path d="M1.61342 8.47513C1.52262 8.33137 1.47723 8.25949 1.45182 8.14862C1.43273 8.06534 1.43273 7.93401 1.45182 7.85073C1.47723 7.73986 1.52262 7.66798 1.61341 7.52422C2.36369 6.33624 4.59693 3.33301 8.00027 3.33301C11.4036 3.33301 13.6369 6.33623 14.3871 7.52422C14.4779 7.66798 14.5233 7.73986 14.5487 7.85073C14.5678 7.93401 14.5678 8.06534 14.5487 8.14862C14.5233 8.25949 14.4779 8.33137 14.3871 8.47513C13.6369 9.66311 11.4036 12.6663 8.00027 12.6663C4.59693 12.6663 2.36369 9.66311 1.61342 8.47513Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.00027 9.99967C9.10484 9.99967 10.0003 9.10424 10.0003 7.99967C10.0003 6.89511 9.10484 5.99967 8.00027 5.99967C6.8957 5.99967 6.00027 6.89511 6.00027 7.99967C6.00027 9.10424 6.8957 9.99967 8.00027 9.99967Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="checkmain">
              <div class="form-check mycheckbox">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Remember for 30 days
                </label>
              </div>
              <Link onClick={() => setForgot(false)} className='forgetpara'>Forgot password</Link>
            </div>
            <Link onClick={loginClinic} className="signinbtn">Sign in</Link>
            {/* <Link onClick={registerClinic} className="signupbtn">Register</Link> */}
            
          </div>
          :
          <div className="forgotmain">
            {
              newpassword ?
                <>
                  <div className="forgotimgmain">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M19.8333 10.4999C19.8333 9.9028 19.6055 9.30568 19.1499 8.85008C18.6943 8.39447 18.0972 8.16667 17.5 8.16667M17.5 17.5C21.366 17.5 24.5 14.366 24.5 10.5C24.5 6.63401 21.366 3.5 17.5 3.5C13.634 3.5 10.5 6.63401 10.5 10.5C10.5 10.8193 10.5214 11.1336 10.5628 11.4415C10.6309 11.948 10.6649 12.2013 10.642 12.3615C10.6181 12.5284 10.5877 12.6184 10.5055 12.7655C10.4265 12.9068 10.2873 13.046 10.009 13.3243L4.04673 19.2866C3.84496 19.4884 3.74407 19.5893 3.67192 19.707C3.60795 19.8114 3.56081 19.9252 3.53224 20.0442C3.5 20.1785 3.5 20.3212 3.5 20.6065V22.6333C3.5 23.2867 3.5 23.6134 3.62716 23.863C3.73901 24.0825 3.91749 24.261 4.13701 24.3728C4.38657 24.5 4.71327 24.5 5.36667 24.5H8.16667V22.1667H10.5V19.8333H12.8333L14.6757 17.991C14.954 17.7127 15.0932 17.5735 15.2345 17.4945C15.3816 17.4123 15.4716 17.3819 15.6385 17.358C15.7987 17.3351 16.052 17.3691 16.5585 17.4372C16.8664 17.4786 17.1807 17.5 17.5 17.5Z" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <h4 className="forgothead">Forgot password?</h4>
                  <p className="forgotpara">No worries, we’ll send you reset instructions.</p>
                  <p className="inputtext">Mobile Number</p>
                  <input type="text" className="logininput" placeholder='Enter your mobile number' />
                  <button onClick={() => setNewpassword(false)} className="signinbtn">Reset password</button>
                  <button onClick={() => {
                    setForgot(true);
                    setReset(true);
                    setNewpassword(true);
                  }} className="backbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15.8327 10.0003H4.16602M4.16602 10.0003L9.99935 15.8337M4.16602 10.0003L9.99935 4.16699" stroke="#7A7A96" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Back to log in
                  </button>
                </>
                :
                <>
                  {
                    reset ?
                      <>
                        <div className="forgotimgmain">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M19.8346 11.6667V9.33333C19.8346 6.11167 17.223 3.5 14.0013 3.5C10.7796 3.5 8.16797 6.11167 8.16797 9.33333V11.6667M14.0013 16.9167V19.25M10.268 24.5H17.7346C19.6948 24.5 20.6749 24.5 21.4236 24.1185C22.0822 23.783 22.6176 23.2475 22.9532 22.589C23.3346 21.8403 23.3346 20.8602 23.3346 18.9V17.2667C23.3346 15.3065 23.3346 14.3264 22.9532 13.5777C22.6176 12.9191 22.0822 12.3837 21.4236 12.0481C20.6749 11.6667 19.6948 11.6667 17.7346 11.6667H10.268C8.30779 11.6667 7.32769 11.6667 6.579 12.0481C5.92043 12.3837 5.385 12.9191 5.04945 13.5777C4.66797 14.3264 4.66797 15.3065 4.66797 17.2667V18.9C4.66797 20.8602 4.66797 21.8403 5.04945 22.589C5.385 23.2475 5.92043 23.783 6.579 24.1185C7.32769 24.5 8.30779 24.5 10.268 24.5Z" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <h4 className="forgothead">Set new password</h4>
                        <p className="forgotpara">Your new password must be different to previously used passwords.</p>
                        <p className="inputtext">Password</p>
                        <div className="passwordinput">
                          <input type={showPassword1 ? 'text' : 'password'} className="logininput" placeholder='••••••••' onChange={handleChange} />
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='eyeimg' onClick={togglePasswordVisibility1}>
                            <path d="M1.61342 8.47513C1.52262 8.33137 1.47723 8.25949 1.45182 8.14862C1.43273 8.06534 1.43273 7.93401 1.45182 7.85073C1.47723 7.73986 1.52262 7.66798 1.61341 7.52422C2.36369 6.33624 4.59693 3.33301 8.00027 3.33301C11.4036 3.33301 13.6369 6.33623 14.3871 7.52422C14.4779 7.66798 14.5233 7.73986 14.5487 7.85073C14.5678 7.93401 14.5678 8.06534 14.5487 8.14862C14.5233 8.25949 14.4779 8.33137 14.3871 8.47513C13.6369 9.66311 11.4036 12.6663 8.00027 12.6663C4.59693 12.6663 2.36369 9.66311 1.61342 8.47513Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.00027 9.99967C9.10484 9.99967 10.0003 9.10424 10.0003 7.99967C10.0003 6.89511 9.10484 5.99967 8.00027 5.99967C6.8957 5.99967 6.00027 6.89511 6.00027 7.99967C6.00027 9.10424 6.8957 9.99967 8.00027 9.99967Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <p className="inputtext">Confirm password</p>
                        <div className="passwordinput">
                          <input type={showPassword2 ? 'text' : 'password'} className="logininput" placeholder='••••••••' />
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className='eyeimg' onClick={togglePasswordVisibility2}>
                            <path d="M1.61342 8.47513C1.52262 8.33137 1.47723 8.25949 1.45182 8.14862C1.43273 8.06534 1.43273 7.93401 1.45182 7.85073C1.47723 7.73986 1.52262 7.66798 1.61341 7.52422C2.36369 6.33624 4.59693 3.33301 8.00027 3.33301C11.4036 3.33301 13.6369 6.33623 14.3871 7.52422C14.4779 7.66798 14.5233 7.73986 14.5487 7.85073C14.5678 7.93401 14.5678 8.06534 14.5487 8.14862C14.5233 8.25949 14.4779 8.33137 14.3871 8.47513C13.6369 9.66311 11.4036 12.6663 8.00027 12.6663C4.59693 12.6663 2.36369 9.66311 1.61342 8.47513Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.00027 9.99967C9.10484 9.99967 10.0003 9.10424 10.0003 7.99967C10.0003 6.89511 9.10484 5.99967 8.00027 5.99967C6.8957 5.99967 6.00027 6.89511 6.00027 7.99967C6.00027 9.10424 6.8957 9.99967 8.00027 9.99967Z" stroke="#8F8FA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>

                        <div className="checksmain">
                          <div className="innercheck">
                            {isLengthValid ?
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect width="20" height="20" rx="10" fill="#2652FF" />
                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              :
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect width="20" height="20" rx="10" fill="#E0E0E8" />
                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            }
                            <p className="checkpara">Must be at least 8 characters</p>
                          </div>
                          <div className="innercheck">
                            {hasSymbol ?
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect width="20" height="20" rx="10" fill="#2652FF" />
                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              :
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect width="20" height="20" rx="10" fill="#E0E0E8" />
                                <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            }
                            <p className="checkpara">Must contain one special character</p>
                          </div>
                        </div>
                        <button onClick={() => setReset(false)} className="signinbtn">Reset password</button>
                        <button onClick={() => {
                          setForgot(true);
                          setReset(true);
                          setNewpassword(true);
                        }} className="backbtn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8327 10.0003H4.16602M4.16602 10.0003L9.99935 15.8337M4.16602 10.0003L9.99935 4.16699" stroke="#7A7A96" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          Back to log in
                        </button>
                      </>
                      :
                      <>
                        <div className="forgotimgmain">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M8.7487 13.9997L12.2487 17.4997L19.2487 10.4997M25.6654 13.9997C25.6654 20.443 20.442 25.6663 13.9987 25.6663C7.55538 25.6663 2.33203 20.443 2.33203 13.9997C2.33203 7.55635 7.55538 2.33301 13.9987 2.33301C20.442 2.33301 25.6654 7.55635 25.6654 13.9997Z" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <h4 className="forgothead">Password reset</h4>
                        <p className="forgotpara">Your password has been successfully reset. Click below to log in magically.</p>

                        <button onClick={() => {
                          setForgot(true);
                          setReset(true);
                          setNewpassword(true);
                        }} className="signinbtn">Continue</button>
                        <button onClick={() => {
                          setForgot(true);
                          setReset(true);
                          setNewpassword(true);
                        }} className="backbtn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8327 10.0003H4.16602M4.16602 10.0003L9.99935 15.8337M4.16602 10.0003L9.99935 4.16699" stroke="#7A7A96" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          Back to log in
                        </button>
                      </>
                  }
                </>
            }
          </div>
        }

      </div>
    </wection>
  )
}

export default Login