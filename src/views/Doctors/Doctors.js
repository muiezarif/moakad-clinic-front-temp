import React, { useState } from 'react'
import "./doctors.scss"
import { Link } from 'react-router-dom'
import { Dropdown, Modal, Pagination } from 'react-bootstrap';

const Doctors = () => {
    const [activeButton, setActiveButton] = useState('card');

    const handleButtonClick = (view) => {
        setActiveButton(view);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
            <div className="content">
                <section className="doctors-section">
                    <div className="servicesupper">
                        <h4 className="serviceshead">Doctors</h4>
                        <div className="servicesbtns">
                            <button className="sortbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.83398 12.4997L10.0007 16.6663L14.1673 12.4997M5.83398 7.49967L10.0007 3.33301L14.1673 7.49967" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Sort
                            </button>
                            <Link to="/clinic/adddoctor" className="addbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99935 4.16699V15.8337M4.16602 10.0003H15.8327" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add
                            </Link>
                        </div>
                    </div>
                    <div className="servicesmid">
                        <div className="servicesmidleft">
                            <div className="searchinputmain">
                                <input type="text" className="searchinput" placeholder='Search here' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='searchimg'>
                                    <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <button className="filterbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8ZM9 16L21 16M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mainshiftbtns">
                            <button
                                className={activeButton === 'table' ? 'active shiftbtn' : 'shiftbtn'}
                                onClick={() => handleButtonClick('table')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.5 10.0003L7.5 10.0003M17.5 5.00033L7.5 5.00033M17.5 15.0003L7.5 15.0003M4.16667 10.0003C4.16667 10.4606 3.79357 10.8337 3.33333 10.8337C2.8731 10.8337 2.5 10.4606 2.5 10.0003C2.5 9.54009 2.8731 9.16699 3.33333 9.16699C3.79357 9.16699 4.16667 9.54009 4.16667 10.0003ZM4.16667 5.00033C4.16667 5.46056 3.79357 5.83366 3.33333 5.83366C2.8731 5.83366 2.5 5.46056 2.5 5.00033C2.5 4.54009 2.8731 4.16699 3.33333 4.16699C3.79357 4.16699 4.16667 4.54009 4.16667 5.00033ZM4.16667 15.0003C4.16667 15.4606 3.79357 15.8337 3.33333 15.8337C2.8731 15.8337 2.5 15.4606 2.5 15.0003C2.5 14.5401 2.8731 14.167 3.33333 14.167C3.79357 14.167 4.16667 14.5401 4.16667 15.0003Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button
                                className={activeButton === 'card' ? 'active shiftbtn' : 'shiftbtn'}
                                onClick={() => handleButtonClick('card')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 2.5H3.83333C3.36662 2.5 3.13327 2.5 2.95501 2.59083C2.79821 2.67072 2.67072 2.79821 2.59083 2.95501C2.5 3.13327 2.5 3.36662 2.5 3.83333V7C2.5 7.46671 2.5 7.70007 2.59083 7.87833C2.67072 8.03513 2.79821 8.16261 2.95501 8.24251C3.13327 8.33333 3.36662 8.33333 3.83333 8.33333H7C7.46671 8.33333 7.70007 8.33333 7.87833 8.24251C8.03513 8.16261 8.16261 8.03513 8.24251 7.87833C8.33333 7.70007 8.33333 7.46671 8.33333 7V3.83333C8.33333 3.36662 8.33333 3.13327 8.24251 2.95501C8.16261 2.79821 8.03513 2.67072 7.87833 2.59083C7.70007 2.5 7.46671 2.5 7 2.5Z" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.1667 2.5H13C12.5333 2.5 12.2999 2.5 12.1217 2.59083C11.9649 2.67072 11.8374 2.79821 11.7575 2.95501C11.6667 3.13327 11.6667 3.36662 11.6667 3.83333V7C11.6667 7.46671 11.6667 7.70007 11.7575 7.87833C11.8374 8.03513 11.9649 8.16261 12.1217 8.24251C12.2999 8.33333 12.5333 8.33333 13 8.33333H16.1667C16.6334 8.33333 16.8667 8.33333 17.045 8.24251C17.2018 8.16261 17.3293 8.03513 17.4092 7.87833C17.5 7.70007 17.5 7.46671 17.5 7V3.83333C17.5 3.36662 17.5 3.13327 17.4092 2.95501C17.3293 2.79821 17.2018 2.67072 17.045 2.59083C16.8667 2.5 16.6334 2.5 16.1667 2.5Z" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.1667 11.6667H13C12.5333 11.6667 12.2999 11.6667 12.1217 11.7575C11.9649 11.8374 11.8374 11.9649 11.7575 12.1217C11.6667 12.2999 11.6667 12.5333 11.6667 13V16.1667C11.6667 16.6334 11.6667 16.8667 11.7575 17.045C11.8374 17.2018 11.9649 17.3293 12.1217 17.4092C12.2999 17.5 12.5333 17.5 13 17.5H16.1667C16.6334 17.5 16.8667 17.5 17.045 17.4092C17.2018 17.3293 17.3293 17.2018 17.4092 17.045C17.5 16.8667 17.5 16.6334 17.5 16.1667V13C17.5 12.5333 17.5 12.2999 17.4092 12.1217C17.3293 11.9649 17.2018 11.8374 17.045 11.7575C16.8667 11.6667 16.6334 11.6667 16.1667 11.6667Z" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 11.6667H3.83333C3.36662 11.6667 3.13327 11.6667 2.95501 11.7575C2.79821 11.8374 2.67072 11.9649 2.59083 12.1217C2.5 12.2999 2.5 12.5333 2.5 13V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7C7.46671 17.5 7.70007 17.5 7.87833 17.4092C8.03513 17.3293 8.16261 17.2018 8.24251 17.045C8.33333 16.8667 8.33333 16.6334 8.33333 16.1667V13C8.33333 12.5333 8.33333 12.2999 8.24251 12.1217C8.16261 11.9649 8.03513 11.8374 7.87833 11.7575C7.70007 11.6667 7.46671 11.6667 7 11.6667Z" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {activeButton === 'card' ?
                        <>
                            <div className="doctor-parent">
                                <div className="doctor-card">
                                    <Dropdown align='end'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M9.99935 10.833C10.4596 10.833 10.8327 10.4599 10.8327 9.99967C10.8327 9.53944 10.4596 9.16634 9.99935 9.16634C9.53911 9.16634 9.16602 9.53944 9.16602 9.99967C9.16602 10.4599 9.53911 10.833 9.99935 10.833Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.99935 4.99967C10.4596 4.99967 10.8327 4.62658 10.8327 4.16634C10.8327 3.7061 10.4596 3.33301 9.99935 3.33301C9.53911 3.33301 9.16602 3.7061 9.16602 4.16634C9.16602 4.62658 9.53911 4.99967 9.99935 4.99967Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.99935 16.6663C10.4596 16.6663 10.8327 16.2932 10.8327 15.833C10.8327 15.3728 10.4596 14.9997 9.99935 14.9997C9.53911 14.9997 9.16602 15.3728 9.16602 15.833C9.16602 16.2932 9.53911 16.6663 9.99935 16.6663Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Link to="/clinic/adddoctor">
                                                <div className="editmain">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <g clip-path="url(#clip0_355_2871)">
                                                            <path d="M13.9994 13.9996H8.66603M1.66602 14.3329L5.36553 12.91C5.60216 12.819 5.72047 12.7735 5.83116 12.7141C5.92948 12.6613 6.02322 12.6004 6.11138 12.532C6.21063 12.4549 6.30027 12.3653 6.47954 12.186L13.9994 4.66622C14.7357 3.92984 14.7357 2.73593 13.9994 1.99955C13.263 1.26317 12.0691 1.26317 11.3327 1.99955L3.81287 9.51936C3.6336 9.69864 3.54396 9.78827 3.46694 9.88752C3.39853 9.97569 3.33762 10.0694 3.28484 10.1677C3.22542 10.2784 3.17991 10.3967 3.0889 10.6334L1.66602 14.3329ZM1.66602 14.3329L3.0381 10.7655C3.13628 10.5102 3.18537 10.3826 3.26958 10.3241C3.34316 10.273 3.43422 10.2537 3.52221 10.2705C3.6229 10.2898 3.7196 10.3865 3.913 10.5799L5.41906 12.0859C5.61246 12.2793 5.70916 12.376 5.72839 12.4767C5.7452 12.5647 5.72587 12.6558 5.67478 12.7293C5.61631 12.8135 5.48867 12.8626 5.2334 12.9608L1.66602 14.3329Z" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_355_2871">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    Edit
                                                </div>
                                            </Link>
                                            <div onClick={handleShow} className="deletemain">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="#E86136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                Delete
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="left-side">
                                        <div className="profile">
                                            <img src="\assets\dummyassets\doctor-profile.png" alt="img" className='img-fluid' />
                                        </div>
                                        <div className="content-data">
                                            <h5>Dr. Saud Mostafa</h5>
                                            <h6><span>Dentist</span><span>|</span> <span>#D-1245125</span></h6>
                                            <div className="reviews">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="14" viewBox="0 0 96 14" fill="none">
                                                    <path d="M7.19533 0.952219L5.36449 4.31352L1.26824 4.85428C0.533658 4.95075 0.239266 5.77076 0.771975 6.24043L3.73552 8.85534L3.03459 12.5492C2.90842 13.2169 3.68505 13.717 4.33552 13.4048L8 11.6607L11.6645 13.4048C12.3149 13.7145 13.0916 13.2169 12.9654 12.5492L12.2645 8.85534L15.228 6.24043C15.7607 5.77076 15.4663 4.95075 14.7318 4.85428L10.6355 4.31352L8.80467 0.952219C8.47664 0.353074 7.52617 0.345458 7.19533 0.952219Z" fill="#F5C24F" />
                                                    <path d="M27.1953 0.952219L25.3645 4.31352L21.2682 4.85428C20.5337 4.95075 20.2393 5.77076 20.772 6.24043L23.7355 8.85534L23.0346 12.5492C22.9084 13.2169 23.6851 13.717 24.3355 13.4048L28 11.6607L31.6645 13.4048C32.3149 13.7145 33.0916 13.2169 32.9654 12.5492L32.2645 8.85534L35.228 6.24043C35.7607 5.77076 35.4663 4.95075 34.7318 4.85428L30.6355 4.31352L28.8047 0.952219C28.4766 0.353074 27.5262 0.345458 27.1953 0.952219Z" fill="#F5C24F" />
                                                    <path d="M47.1953 0.952219L45.3645 4.31352L41.2682 4.85428C40.5337 4.95075 40.2393 5.77076 40.772 6.24043L43.7355 8.85534L43.0346 12.5492C42.9084 13.2169 43.6851 13.717 44.3355 13.4048L48 11.6607L51.6645 13.4048C52.3149 13.7145 53.0916 13.2169 52.9654 12.5492L52.2645 8.85534L55.228 6.24043C55.7607 5.77076 55.4663 4.95075 54.7318 4.85428L50.6355 4.31352L48.8047 0.952219C48.4766 0.353074 47.5262 0.345458 47.1953 0.952219Z" fill="#F5C24F" />
                                                    <path d="M67.1953 0.952219L65.3645 4.31352L61.2682 4.85428C60.5337 4.95075 60.2393 5.77076 60.772 6.24043L63.7355 8.85534L63.0346 12.5492C62.9084 13.2169 63.6851 13.717 64.3355 13.4048L68 11.6607L71.6645 13.4048C72.3149 13.7145 73.0916 13.2169 72.9654 12.5492L72.2645 8.85534L75.228 6.24043C75.7607 5.77076 75.4663 4.95075 74.7318 4.85428L70.6355 4.31352L68.8047 0.952219C68.4766 0.353074 67.5262 0.345458 67.1953 0.952219Z" fill="#F5C24F" />
                                                    <path d="M87.1953 0.952219L85.3645 4.31352L81.2682 4.85428C80.5337 4.95075 80.2393 5.77076 80.772 6.24043L83.7355 8.85534L83.0346 12.5492C82.9084 13.2169 83.6851 13.717 84.3355 13.4048L88 11.6607L91.6645 13.4048C92.3149 13.7145 93.0916 13.2169 92.9654 12.5492L92.2645 8.85534L95.228 6.24043C95.7607 5.77076 95.4663 4.95075 94.7318 4.85428L90.6355 4.31352L88.8047 0.952219C88.4766 0.353074 87.5262 0.345458 87.1953 0.952219Z" fill="#B8B8C7" />
                                                </svg>
                                                <p>451 reviews</p>
                                            </div>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</p>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="appointment-parent">
                                            <div className="upper-data">
                                                <a href="#" className='prev-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15 18L9 12L15 6" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg></a>
                                                <div className="inner-days">
                                                    <p>Sun <br /> 22</p>
                                                    <p>Mon <br /> 23</p>
                                                    <p>Tue <br /> 24</p>
                                                    <p>Wed <br /> 25</p>
                                                    <p>Thu <br /> 26</p>
                                                    <p>Fri <br /> 27</p>
                                                    <p>Sat <br /> 28</p>
                                                </div>
                                                <a href="#" className='next-btn'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 18L15 12L9 6" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="bottom-data">
                                                <div className="timer active">
                                                    <h6>4:00</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>4:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>5:00</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>5:30</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>6:00</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>6:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>7:00</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>7:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>8:00</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>8:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>4:00</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>4:30</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>5:00</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>5:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>6:00</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>6:30</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>7:00</h6>
                                                </div>
                                                <div className="timer">
                                                    <h6>7:30</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>8:00</h6>
                                                </div>
                                                <div className="timer active">
                                                    <h6>8:30</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <>
                            <div className="servicestablemain">
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <th>
                                                <div className="namemain">
                                                    <p className="namepara">Name</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8.00065 3.33301V12.6663M8.00065 12.6663L12.6673 7.99967M8.00065 12.6663L3.33398 7.99967" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th>
                                                Image
                                            </th>
                                            <th>Specialties</th>
                                            <th>Reviews</th>
                                            <th>Calendar</th>
                                            <th>
                                                Description
                                            </th>
                                            <th>
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6 className="nametd">Saud Mashari</h6>
                                                    <p>#56786</p>
                                                </td>
                                                <td>
                                                    <div className="servicecardimg">
                                                        <img src="\assets\dummyassets\doctor-profile-table.png" alt="innerserviceimg" className="innerserviceimg" />
                                                    </div>
                                                </td>
                                                <td>Dentist</td>
                                                <td>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clip-path="url(#clip0_427_5101)">
                                                            <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FDB022" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_427_5101">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>  4.8 (451 Review )
                                                </td>
                                                <td><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M21.5 10H3.5M16.5 2V6M8.5 2V6M9.5 16L11.5 18L16 13.5M8.3 22H16.7C18.3802 22 19.2202 22 19.862 21.673C20.4265 21.3854 20.8854 20.9265 21.173 20.362C21.5 19.7202 21.5 18.8802 21.5 17.2V8.8C21.5 7.11984 21.5 6.27976 21.173 5.63803C20.8854 5.07354 20.4265 4.6146 19.862 4.32698C19.2202 4 18.3802 4 16.7 4H8.3C6.61984 4 5.77976 4 5.13803 4.32698C4.57354 4.6146 4.1146 5.07354 3.82698 5.63803C3.5 6.27976 3.5 7.11984 3.5 8.8V17.2C3.5 18.8802 3.5 19.7202 3.82698 20.362C4.1146 20.9265 4.57354 21.3854 5.13803 21.673C5.77976 22 6.61984 22 8.3 22Z" stroke="#696985" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg></a></td>
                                                <td>
                                                    <p className="descriptionpara" style={{maxWidth: "270px"}}>Lorem ipsum dolor sit amet consectetur. Cursus fermentum eget et lectus in dignissim Lorem ipsum dolor sit amet consectetur. Cursus fermentum eget et lectus in dignissim</p>
                                                </td>
                                                <td>
                                                    <Dropdown align='end'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path d="M9.99935 10.833C10.4596 10.833 10.8327 10.4599 10.8327 9.99967C10.8327 9.53944 10.4596 9.16634 9.99935 9.16634C9.53911 9.16634 9.16602 9.53944 9.16602 9.99967C9.16602 10.4599 9.53911 10.833 9.99935 10.833Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.99935 4.99967C10.4596 4.99967 10.8327 4.62658 10.8327 4.16634C10.8327 3.7061 10.4596 3.33301 9.99935 3.33301C9.53911 3.33301 9.16602 3.7061 9.16602 4.16634C9.16602 4.62658 9.53911 4.99967 9.99935 4.99967Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M9.99935 16.6663C10.4596 16.6663 10.8327 16.2932 10.8327 15.833C10.8327 15.3728 10.4596 14.9997 9.99935 14.9997C9.53911 14.9997 9.16602 15.3728 9.16602 15.833C9.16602 16.2932 9.53911 16.6663 9.99935 16.6663Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Link to="/clinic/adddoctor">
                                                                <div className="editmain">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                        <g clip-path="url(#clip0_355_2871)">
                                                                            <path d="M13.9994 13.9996H8.66603M1.66602 14.3329L5.36553 12.91C5.60216 12.819 5.72047 12.7735 5.83116 12.7141C5.92948 12.6613 6.02322 12.6004 6.11138 12.532C6.21063 12.4549 6.30027 12.3653 6.47954 12.186L13.9994 4.66622C14.7357 3.92984 14.7357 2.73593 13.9994 1.99955C13.263 1.26317 12.0691 1.26317 11.3327 1.99955L3.81287 9.51936C3.6336 9.69864 3.54396 9.78827 3.46694 9.88752C3.39853 9.97569 3.33762 10.0694 3.28484 10.1677C3.22542 10.2784 3.17991 10.3967 3.0889 10.6334L1.66602 14.3329ZM1.66602 14.3329L3.0381 10.7655C3.13628 10.5102 3.18537 10.3826 3.26958 10.3241C3.34316 10.273 3.43422 10.2537 3.52221 10.2705C3.6229 10.2898 3.7196 10.3865 3.913 10.5799L5.41906 12.0859C5.61246 12.2793 5.70916 12.376 5.72839 12.4767C5.7452 12.5647 5.72587 12.6558 5.67478 12.7293C5.61631 12.8135 5.48867 12.8626 5.2334 12.9608L1.66602 14.3329Z" stroke="#12215C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_355_2871">
                                                                                <rect width="16" height="16" fill="white" />
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                    Edit
                                                                </div>
                                                            </Link>
                                                            <div onClick={handleShow} className="deletemain">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="#E86136" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                Delete
                                                            </div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    }
                    <div className="paginationmain">
                        <button className="mainpaginationbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.8327 10.0003H4.16602M4.16602 10.0003L9.99935 15.8337M4.16602 10.0003L9.99935 4.16699" stroke="#12215C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Previous</span>
                        </button>
                        <Pagination>
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                        </Pagination>
                        <button className="mainpaginationbtn">
                            <span>Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.16602 10.0003H15.8327M15.8327 10.0003L9.99935 4.16699M15.8327 10.0003L9.99935 15.8337" stroke="#12215C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>

            <Modal className='servicesmodal' show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <h6 className="modalhead">Are you sure you want to delete this service?</h6>
                    <p className="modalpara">deleted services cannot be restored</p>
                    <div className="modalbtns">
                        <button onClick={() => {
                            handleClose();
                            handleShow1();
                        }} className="bluebtn">Delete</button>
                        <button onClick={handleClose} className="whitebtn">Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className='servicesmodal tickmodal' show={show1} onHide={handleClose1} centered>
                <Modal.Body>
                    <img src="\assets\main-assets\modaltick.svg" alt="modaltickimg" className="modaltickimg" />
                    <h6 className="modalhead mbottom">This service has been deleted</h6>
                    <div className="modalbtns">
                        <button onClick={handleClose1} className="bluebtn">Done</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Doctors
