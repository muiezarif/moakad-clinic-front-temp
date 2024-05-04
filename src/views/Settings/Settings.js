import React, { useState } from 'react'
import './settings.scss'
import { Dropdown, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Settings = () => {
    const [key, setKey] = useState('My details');

    const [selectedItem, setSelectedItem] = useState("");
    const items = [
        { name: "Saudi Arabia", image: "/assets/dummyassets/SAflag.svg" },
        { name: "Saudi Arabia", image: "/assets/dummyassets/SAflag.svg" },
        { name: "Saudi Arabia", image: "/assets/dummyassets/SAflag.svg" }
    ];

    const timezones = [
        { name: "Pacific Standard Time (PST)", offset: "UTC-08:00" },
        { name: "Pacific Standard Time (PST)", offset: "UTC-08:00" },
        { name: "Pacific Standard Time (PST)", offset: "UTC-08:00" }
    ];
    const [selectedTimezone, setSelectedTimezone] = useState(null);
    const [password, setPassword] = useState('');

    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const isLengthValid = password.length >= 8;

    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="content">
            <section className="settingsmain">
                <h4 className="settingshead">Settings</h4>

                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="hometabs"
                >
                    <Tab eventKey="My details" title="My details">
                        <h6 className="mydetailhead">Personal info</h6>
                        <p className="mydetailpara">Update your photo and personal details here.</p>
                        <div className="namemain">
                            <p className="namehead">Name</p>
                            <div className="nameinputs">
                                <input type="text" className="innernameinput" placeholder='First Name' />
                                <input type="text" className="innernameinput" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">Email address</p>
                            <div className="nameinputs">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='emailimg'>
                                    <path d="M1.66797 5.83325L8.47207 10.5961C9.02304 10.9818 9.29853 11.1746 9.59819 11.2493C9.86288 11.3153 10.1397 11.3153 10.4044 11.2493C10.7041 11.1746 10.9796 10.9818 11.5305 10.5961L18.3346 5.83325M5.66797 16.6666H14.3346C15.7348 16.6666 16.4348 16.6666 16.9696 16.3941C17.44 16.1544 17.8225 15.772 18.0622 15.3016C18.3346 14.7668 18.3346 14.0667 18.3346 12.6666V7.33325C18.3346 5.93312 18.3346 5.23306 18.0622 4.69828C17.8225 4.22787 17.44 3.84542 16.9696 3.60574C16.4348 3.33325 15.7348 3.33325 14.3346 3.33325H5.66797C4.26784 3.33325 3.56777 3.33325 3.03299 3.60574C2.56259 3.84542 2.18014 4.22787 1.94045 4.69828C1.66797 5.23306 1.66797 5.93312 1.66797 7.33325V12.6666C1.66797 14.0667 1.66797 14.7668 1.94045 15.3016C2.18014 15.772 2.56259 16.1544 3.03299 16.3941C3.56777 16.6666 4.26784 16.6666 5.66797 16.6666Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <input type="text" placeholder='Email Address' className="innernameinput paddleft" />
                            </div>
                        </div>
                        <div className="photomain">
                            <div className="photoleft">
                                <div className="photolefthead">
                                    <h6>Your photo</h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_456_8042)">
                                            <path d="M6.0587 5.99992C6.21543 5.55436 6.5248 5.17866 6.932 4.93934C7.3392 4.70002 7.81796 4.61254 8.28348 4.69239C8.749 4.77224 9.17124 5.01427 9.47542 5.3756C9.77959 5.73694 9.94607 6.19427 9.94536 6.66659C9.94536 7.99992 7.94536 8.66659 7.94536 8.66659M7.9987 11.3333H8.00536M14.6654 7.99992C14.6654 11.6818 11.6806 14.6666 7.9987 14.6666C4.3168 14.6666 1.33203 11.6818 1.33203 7.99992C1.33203 4.31802 4.3168 1.33325 7.9987 1.33325C11.6806 1.33325 14.6654 4.31802 14.6654 7.99992Z" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_456_8042">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="photoleftpara">This will be displayed on your profile.</p>
                            </div>
                            <div className="photoright">
                                <div className="photorightimg">
                                    <img src="\assets\dummyassets\Avatarprofile.png" alt="photorightimginner" className="photorightimginner" />
                                </div>
                                <label htmlFor="fileInput" className="uploadmain">
                                    <div className="uploadimg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M6.66602 13.3333L9.99935 10M9.99935 10L13.3327 13.3333M9.99935 10V17.5M16.666 13.9524C17.6839 13.1117 18.3327 11.8399 18.3327 10.4167C18.3327 7.88536 16.2807 5.83333 13.7493 5.83333C13.5673 5.83333 13.3969 5.73833 13.3044 5.58145C12.2177 3.73736 10.2114 2.5 7.91602 2.5C4.46424 2.5 1.66602 5.29822 1.66602 8.75C1.66602 10.4718 2.36222 12.0309 3.48847 13.1613" stroke="#696985" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h6 className="uploadhead"><span className="boldtext">Click to upload</span> or drag and drop</h6>
                                    <p className="uploadpara">PNG, JPG (max. 800x400px)</p>
                                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                                </label>
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">Role</p>
                            <div className="nameinputs">
                                <input type="text" placeholder='Role' className="innernameinput" />
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">Country</p>
                            <div className="nameinputs">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {selectedItem ? (
                                            <>
                                                <div className="maincountry">
                                                    <div className="flagimg">
                                                        <img src={selectedItem.image} alt={selectedItem.name} className='flagimginner' />
                                                    </div>
                                                    <h6>{selectedItem.name}</h6>
                                                </div>
                                            </>
                                        ) : (
                                            "Select the country"
                                        )}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {items.map((item, index) => (
                                            <div key={index} className="drop" onClick={() => setSelectedItem(item)}>
                                                <div className="flagimg">
                                                    <img src={item.image} alt={item.name} className='flagimginner' />
                                                </div>

                                                {item.name}
                                            </div>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">Timezone</p>
                            <div className="nameinputs">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-timezone">
                                        {selectedTimezone ? (
                                            <>
                                                <div className="timezone-option">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clipPath="url(#clip0_456_10438)">
                                                            <path d="M10.0013 5.00008V10.0001L13.3346 11.6667M18.3346 10.0001C18.3346 14.6025 14.6037 18.3334 10.0013 18.3334C5.39893 18.3334 1.66797 14.6025 1.66797 10.0001C1.66797 5.39771 5.39893 1.66675 10.0013 1.66675C14.6037 1.66675 18.3346 5.39771 18.3346 10.0001Z" stroke="#8F8FA6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_456_10438">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <h6>{selectedTimezone.name}</h6>
                                                    <span>{selectedTimezone.offset}</span>
                                                </div>

                                            </>
                                        ) : (
                                            "Select timezone"
                                        )}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {timezones.map((timezone, index) => (
                                            <div key={index} className="timezone-option" onClick={() => setSelectedTimezone(timezone)}>
                                                <h6>{timezone.name}</h6>
                                                <p>{timezone.offset}</p>
                                            </div>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="addservicebtns">
                            <Link to="/clinic/dashboard" className="whitebtn">Cancel</Link>
                            <button className="bluebtn">Save</button>
                        </div>
                    </Tab>
                    <Tab eventKey="Password" title="Password">
                        <h6 className="mydetailhead">Password settings</h6>
                        <p className="mydetailpara">Enter your password to change password</p>

                        <div className="namemain">
                            <p className="namehead">Current password</p>
                            <div className="nameinputs">
                                <input type="text" placeholder='Enter current password' className="innernameinput" />
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">New password</p>
                            <div className='forchecks'>
                                <div className="nameinputs">
                                    <input type="text" placeholder='Enter your new password' className="innernameinput" onChange={handleChange} />
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
                            </div>
                        </div>
                        <div className="namemain">
                            <p className="namehead">Re-enter your new password</p>
                            <div className="nameinputs">
                                <input type="text" placeholder='Enter your new password' className="innernameinput" />
                            </div>
                        </div>
                        <div className="addservicebtns">
                            <Link to="/clinic/dashboard" className="whitebtn">Cancel</Link>
                            <button className="bluebtn">Save</button>
                        </div>
                    </Tab>
                    <Tab eventKey="Billing" title="Billing">
                        <h6 className="mydetailhead">Billing settings</h6>
                        <p className="mydetailpara">Manage your billing and payment details.</p>
                        <div className="paymentmethodmain">
                            <h6 className="paymenthead">Payment method</h6>
                            <p className="paymentpara">Change how you pay for your plan.</p>
                            <div className="innerpayment">
                                <div className="paymentleft">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 58 40" fill="none">
                                        <rect x="0.5" y="0.5" width="57" height="39" rx="5.5" fill="white" />
                                        <rect x="0.5" y="0.5" width="57" height="39" rx="5.5" stroke="#F5F5F7" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9171 26.4304H14.4842L11.9099 16.3206C11.7877 15.8556 11.5283 15.4444 11.1467 15.2507C10.1943 14.7637 9.14486 14.3762 8 14.1807V13.7915H13.5301C14.2934 13.7915 14.8658 14.3762 14.9612 15.0552L16.2969 22.3477L19.7281 13.7915H23.0656L17.9171 26.4304ZM24.9737 26.4304H21.7316L24.4013 13.7915H27.6434L24.9737 26.4304ZM31.8378 17.2929C31.9332 16.6121 32.5057 16.2229 33.1735 16.2229C34.223 16.1252 35.3661 16.3206 36.3202 16.8059L36.8926 14.0847C35.9386 13.6955 34.8891 13.5 33.9367 13.5C30.7901 13.5 28.5003 15.2507 28.5003 17.6804C28.5003 19.5288 30.1222 20.4993 31.2671 21.084C32.5057 21.667 32.9827 22.0563 32.8873 22.6393C32.8873 23.5137 31.9332 23.903 30.9809 23.903C29.836 23.903 28.6911 23.6115 27.6434 23.1245L27.0709 25.8474C28.2158 26.3327 29.4544 26.5281 30.5992 26.5281C34.1276 26.6242 36.3202 24.8752 36.3202 22.25C36.3202 18.9441 31.8378 18.7504 31.8378 17.2929ZM47.6667 26.4304L45.0924 13.7915H42.3273C41.7549 13.7915 41.1825 14.1807 40.9917 14.7637L36.2248 26.4304H39.5623L40.2284 24.5837H44.3292L44.7108 26.4304H47.6667ZM42.8044 17.1951L43.7567 21.9585H41.0871L42.8044 17.1951Z" fill="#12215C" />
                                    </svg>
                                    <div className="paymenttexts">
                                        <h6 className="paymenttexthead">Visa ending in 1234</h6>
                                        <p className="paymenttextpara">Expiry 06/2024</p>
                                        <div className="paymentemail">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M1.33301 4.6665L6.77629 8.4768C7.21707 8.78535 7.43746 8.93962 7.67718 8.99938C7.88894 9.05216 8.11041 9.05216 8.32217 8.99938C8.56189 8.93962 8.78228 8.78535 9.22306 8.4768L14.6663 4.6665M4.53301 13.3332H11.4663C12.5864 13.3332 13.1465 13.3332 13.5743 13.1152C13.9506 12.9234 14.2566 12.6175 14.4484 12.2412C14.6663 11.8133 14.6663 11.2533 14.6663 10.1332V5.8665C14.6663 4.7464 14.6663 4.18635 14.4484 3.75852C14.2566 3.3822 13.9506 3.07624 13.5743 2.88449C13.1465 2.6665 12.5864 2.6665 11.4663 2.6665H4.53301C3.4129 2.6665 2.85285 2.6665 2.42503 2.88449C2.0487 3.07624 1.74274 3.3822 1.55099 3.75852C1.33301 4.18635 1.33301 4.7464 1.33301 5.8665V10.1332C1.33301 11.2533 1.33301 11.8133 1.55099 12.2412C1.74274 12.6175 2.0487 12.9234 2.42503 13.1152C2.85285 13.3332 3.4129 13.3332 4.53301 13.3332Z" stroke="#8F8FA6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h6 className="paymentemailpara">billing@moakad.com</h6>
                                        </div>
                                    </div>
                                </div>
                                <button className="paymentrightbtn">
                                    Edit
                                </button>
                            </div>

                            <div className="billingtablemain">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <th>
                                            <div className="billimgnamemain">
                                                <p className="namepara">Invoice</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.00065 3.33301V12.6663M8.00065 12.6663L12.6673 7.99967M8.00065 12.6663L3.33398 7.99967" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </th>
                                        <th>
                                        Billing date
                                        </th>
                                        <th>
                                        Status
                                        </th>
                                        <th>
                                        Amount
                                        </th>
                                        <th>
                                        
                                        </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="treatspan">
                                                    <span className="treatcircle"></span>
                                                    Cancelled
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                       
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="recoverspan">
                                                    <span className="recovercircle"></span>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                     
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="treatspan">
                                                    <span className="treatcircle"></span>
                                                    Cancelled
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                       
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="recoverspan">
                                                    <span className="recovercircle"></span>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                     
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="treatspan">
                                                    <span className="treatcircle"></span>
                                                    Cancelled
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                       
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="billimgnamemain">
                                                    <div class="form-check mycheckbox">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                    <div className="reportnametexts">
                                                        <img src="\assets\main-assets\Filetypeicon.svg" alt="documentimg" className="documentimg" />
                                                        <h6 className="namehead">Invoice #007 – Dec 2024</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="paratd">12/11/2023 </p>
                                            </td>
                                            <td>
                                            <span className="recoverspan">
                                                    <span className="recovercircle"></span>
                                                    Paid
                                                </span>
                                            </td>
                                            <td>
                                            <p className="paratd">SR 10,000</p>
                                            </td>
                                     
                                            <td>
                                            <p className="paratdblue">Download </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Notifications" title="Notifications">
                        <h6 className="mydetailhead">Notification settings</h6>
                        <p className="mydetailpara">We may still send you important notifications about your account outside of your notification settings.</p>
                        <div className="notificationmain">
                            <div className="notificationleft">
                                <h6 className="notificationlefthead">Comments</h6>
                                <p className="notificationleftpara">Manage your team members here.</p>
                            </div>
                            <div className="notificationright">
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Push</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Email</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">SMS</h6>
                                </div>
                            </div>
                        </div>
                        <div className="notificationmain">
                            <div className="notificationleft">
                                <h6 className="notificationlefthead">Tags</h6>
                                <p className="notificationleftpara">These are notifications for when someone tags you in a comment, post or story.</p>
                            </div>
                            <div className="notificationright">
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Push</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Email</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">SMS</h6>
                                </div>
                            </div>
                        </div>
                        <div className="notificationmain">
                            <div className="notificationleft">
                                <h6 className="notificationlefthead">Reminders</h6>
                                <p className="notificationleftpara">These are notifications to remind you of updates you might have missed.</p>
                            </div>
                            <div className="notificationright">
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Push</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Email</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">SMS</h6>
                                </div>
                            </div>
                        </div>
                        <div className="notificationmain">
                            <div className="notificationleft">
                                <h6 className="notificationlefthead">More activity about you</h6>
                                <p className="notificationleftpara">These are notifications for posts on your profile, likes and other reactions to your posts, and more.</p>
                            </div>
                            <div className="notificationright">
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Push</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">Email</h6>
                                </div>
                                <div className="switchmain">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider"></span>
                                    </label>
                                    <h6 className="switchead">SMS</h6>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Integrations" title="Integrations">
                        <div className="integrationtop">
                            <div className="integrationtopleft">
                                <h6 className="mydetailhead">Connected apps</h6>
                                <p className="mydetailpara">Supercharge your workflow and connect the tool you use every day.</p>
                            </div>
                            <div className="searchtopright">
                                <input type="search" placeholder='Search' className="searchinput" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='searchimg'>
                                    <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\linear.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">Linear</h6>
                                    <p className="integrationpara">Streamline software projects, sprints, tasks, and bug tracking.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\github.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">GitHub</h6>
                                    <p className="integrationpara">Link pull requests and automate workflows.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\figma.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">Figma</h6>
                                    <p className="integrationpara">Embed file previews in projects.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\zapier.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">Zapier</h6>
                                    <p className="integrationpara">Build custom automations and integrations with other apps.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\notion.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">Notion</h6>
                                    <p className="integrationpara">Embed notion pages and notes in projects.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                        <div className="integrationmain">
                            <div className="integrationleft">
                                <img src="\assets\main-assets\slack.svg" alt="integrationleftimg" className="integrationleftimg" />
                                <div className="integrationlefttexts">
                                    <h6 className="inergrationhead">Slack</h6>
                                    <p className="integrationpara">Send notifications to channels and create projects from messages.</p>
                                </div>
                            </div>
                            <div className="switchmain">
                                <h6 className="switcheadblue">Learn more</h6>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider"></span>
                                </label>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </div>
    )
}

export default Settings