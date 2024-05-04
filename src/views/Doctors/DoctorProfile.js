import React, { useState } from 'react'
import '../Clinicprofile/clinicprofile.scss'
import { Link } from 'react-router-dom'

const availableTimes = [
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '20 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },

    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '05 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },

    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
    { day: 'Sat', date: '10 / 1 / 2024', times: ['2 pm', '2:30 pm', '3 pm', '3:30 pm'] },
];

const DoctorProfile = () => {
    const cardsPerPage = 6;
    
    const [currentPage, setCurrentPage] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);
    const totalPages = Math.ceil(availableTimes.length / cardsPerPage);
    const displayedTimes = availableTimes.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

    const handleClickNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
        setNextClicked(true);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
    };

    const handleClickPrev = () => {
        setCurrentPage(prevPage => prevPage - 1);
        setNextClicked(false);
        setTransitionEnabled(true);
        setTimeout(() => setTransitionEnabled(false), 300);
    };
    return (
        <>
            <section className="clinicprofile doctor-profile">
                <div className="clinicbanner">
                    <div className="clinicimg">
                        <img src="\assets\dummyassets\doctor-profile-modal.png" alt="clinicinnerimg" className="clinicinnerimg" />
                    </div>
                </div>
                <div className="clinicheadings">
                    <div className="clinictextleft">
                        <h4 className="clinichead">Dr. Saud Mostafa</h4>
                        <p className="clinicpara">Dentist Specialty <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.40156 2.8778C9.59363 2.48869 9.68967 2.29413 9.82004 2.23197C9.93347 2.17789 10.0653 2.17789 10.1787 2.23197C10.3091 2.29413 10.4051 2.48869 10.5972 2.8778L12.4194 6.56944C12.4761 6.68432 12.5045 6.74176 12.5459 6.78635C12.5826 6.82584 12.6266 6.85783 12.6754 6.88056C12.7306 6.90623 12.794 6.91549 12.9208 6.93402L16.9968 7.5298C17.4261 7.59253 17.6407 7.6239 17.74 7.72874C17.8264 7.81995 17.8671 7.94529 17.8506 8.06985C17.8317 8.21302 17.6763 8.36436 17.3656 8.66702L14.4172 11.5387C14.3253 11.6282 14.2794 11.673 14.2497 11.7263C14.2235 11.7734 14.2066 11.8252 14.2001 11.8788C14.1928 11.9393 14.2036 12.0025 14.2253 12.129L14.921 16.1851C14.9944 16.6129 15.031 16.8269 14.9621 16.9538C14.9021 17.0642 14.7955 17.1417 14.6719 17.1646C14.5299 17.1909 14.3378 17.0899 13.9536 16.8879L10.3097 14.9716C10.1961 14.9119 10.1394 14.882 10.0796 14.8703C10.0266 14.8599 9.97213 14.8599 9.91918 14.8703C9.85937 14.882 9.8026 14.9119 9.68906 14.9716L6.04512 16.8879C5.66095 17.0899 5.46886 17.1909 5.32683 17.1646C5.20325 17.1417 5.09662 17.0642 5.03663 16.9538C4.96768 16.8269 5.00437 16.6129 5.07774 16.1851L5.77342 12.129C5.79511 12.0025 5.80595 11.9393 5.79862 11.8788C5.79212 11.8252 5.77528 11.7734 5.74902 11.7263C5.71937 11.673 5.67341 11.6282 5.5815 11.5387L2.63315 8.66702C2.3224 8.36436 2.16703 8.21302 2.14812 8.06985C2.13167 7.94529 2.17231 7.81995 2.25872 7.72874C2.35804 7.6239 2.57266 7.59253 3.00189 7.5298L7.07794 6.93402C7.2047 6.91549 7.26808 6.90623 7.32328 6.88056C7.37215 6.85783 7.41615 6.82584 7.45284 6.78635C7.49427 6.74176 7.52262 6.68432 7.57933 6.56944L9.40156 2.8778Z" fill="#F5C24F" />
                        </svg>(4.5)</span></p>
                    </div>
                    <Link to="/clinic/editclinicprofile" className="bluebtn">Edit Profile</Link>
                </div>
                <div className="clinicdeatils">
                    <h6 className="clinicdetailhead">About Doctor</h6>
                    <p className="clinicdetailpara">
                    Lorem ipsum dolor sit amet consectetur. Vulputate ipsum urna sit mus ultrissces maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat Lorem ipsum dolor sit amet consectetur. Vulputate ipsum urna sit mus ultrissces hshshs maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat Lorem ipsum dolor sit amet consectetur. sjsss sss Vulputate ipsum urna sit mus ultrissces maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat 
                    </p>
                    
                    <div className="available-time">
                        <div className="main-heading">
                            <h6>Available Time</h6>
                        </div>
                        <div className="parent-cards" >
                            {displayedTimes.map((time, index) => (
                                <div className={`single-card ${transitionEnabled ? 'fade-in' : ''}`} key={index}>
                                    <div className={`upper-div ${transitionEnabled ? 'fade-in' : ''}`}>
                                        <h6>{time.day}</h6>
                                        <span>|</span>
                                        <h6>{time.date}</h6>
                                    </div>
                                    <div className={`bottom-div ${transitionEnabled ? 'fade-in' : ''}`}>
                                        {time.times.map((t, idx) => (
                                            <div className="time-text" key={idx}>
                                                <h6>{t}</h6>
                                            </div>
                                        ))}
                                        <a href="#" className="btn-next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M9.66406 18L15.6641 12L9.66406 6" stroke="#12215C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bottom-twice">
                            <div className="left-buttons">
                                <button className={currentPage === 0 ? 'prev-btn opacityset' : 'prev-btn'} onClick={handleClickPrev} disabled={currentPage === 0}><img src="\assets\main-assets\prev-btn.svg" alt="img" className='img-fluid' /></button>
                                <button className={currentPage === totalPages - 1 ? 'next-btn opacityset' : 'next-btn'} onClick={handleClickNext} disabled={currentPage === totalPages - 1}><img src="\assets\main-assets\next-btn.svg" alt="img" className='img-fluid' /></button>
                            </div>
                        </div>
                    </div>
                  
                    <h6 className="clinicdetailhead">Contact Information</h6>
                    <div className="contactmain">
                        <div className="contactinner">
                            <p className="contactinnerpara">Location</p>
                            <div className="countrymain">
                                <img src="\assets\main-assets\flag.svg" alt="countryimg" className="countryimg" />
                                <p className="countryhead">Riyadh, Saudi Arabia</p>
                            </div>
                        </div>
                        <div className="contactinner">
                            <p className="contactinnerpara">Website</p>
                            <a href="Moakad.alrahmaclinic.com" className="bluepara">Moakad.alrahmaclinic.com
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M5.83398 14.4657L14.1673 6.13232M14.1673 6.13232H5.83398M14.1673 6.13232V14.4657" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="contactmain">
                        <div className="contactinner">
                            <p className="contactinnerpara">Mobile Number</p>
                            <div className="countrymain">
                                <p className="countryhead">+9660510589789</p>
                            </div>
                        </div>
                        <div className="contactinner">
                            <p className="contactinnerpara">Landline</p>
                            <div className="countrymain">
                                <p className="countryhead">43556554</p>
                            </div>
                        </div>
                    </div>
                    <div className="clinictopmain">
                        <h6 className="clinictophead">Clinic Reviews</h6>
                        <p className="seeallpara">See all
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M7.5 15.2988L12.5 10.2988L7.5 5.29883" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></p>
                    </div>
                    <div className="cliniccardsmain">
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>
                        <div className="cliniccard">
                            <div className="reviewmain">
                                <div className="reviewleft">
                                    <div className="reviewerimg">
                                        <img src="\assets\dummyassets\Avatarreview.png" alt="reviewerinnerimg" className="reviewerinnerimg" />
                                    </div>
                                    <div className="reviewertext">
                                        <h6 className="reviewername">Majed Al Dossary</h6>
                                        <p className="reviewtime">2 days ago</p>
                                    </div>
                                </div>
                                <div className="starmain">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.40156 3.17663C9.59363 2.78752 9.68967 2.59296 9.82004 2.5308C9.93347 2.47671 10.0653 2.47671 10.1787 2.5308C10.3091 2.59296 10.4051 2.78752 10.5972 3.17663L12.4194 6.86827C12.4761 6.98315 12.5045 7.04059 12.5459 7.08518C12.5826 7.12467 12.6266 7.15666 12.6754 7.17939C12.7306 7.20505 12.794 7.21432 12.9208 7.23285L16.9968 7.82862C17.4261 7.89136 17.6407 7.92273 17.74 8.02757C17.8264 8.11878 17.8671 8.24412 17.8506 8.36868C17.8317 8.51185 17.6763 8.66319 17.3656 8.96585L14.4172 11.8376C14.3253 11.9271 14.2794 11.9718 14.2497 12.0251C14.2235 12.0722 14.2066 12.124 14.2001 12.1776C14.1928 12.2381 14.2036 12.3014 14.2253 12.4278L14.921 16.484C14.9944 16.9118 15.031 17.1257 14.9621 17.2526C14.9021 17.3631 14.7955 17.4405 14.6719 17.4634C14.5299 17.4898 14.3378 17.3887 13.9536 17.1867L10.3097 15.2704C10.1961 15.2107 10.1394 15.1808 10.0796 15.1691C10.0266 15.1587 9.97213 15.1587 9.91918 15.1691C9.85937 15.1808 9.8026 15.2107 9.68906 15.2704L6.04512 17.1867C5.66095 17.3887 5.46886 17.4898 5.32683 17.4634C5.20325 17.4405 5.09662 17.3631 5.03663 17.2526C4.96768 17.1257 5.00437 16.9118 5.07774 16.484L5.77342 12.4278C5.79511 12.3014 5.80595 12.2381 5.79862 12.1776C5.79212 12.124 5.77528 12.0722 5.74902 12.0251C5.71937 11.9718 5.67341 11.9271 5.5815 11.8376L2.63315 8.96585C2.3224 8.66319 2.16703 8.51185 2.14812 8.36868C2.13167 8.24412 2.17231 8.11878 2.25872 8.02757C2.35804 7.92273 2.57266 7.89136 3.00189 7.82862L7.07794 7.23285C7.2047 7.21432 7.26808 7.20505 7.32328 7.17939C7.37215 7.15666 7.41615 7.12467 7.45284 7.08518C7.49427 7.04059 7.52262 6.98315 7.57933 6.86827L9.40156 3.17663Z" fill="#F5C24F" />
                                    </svg>
                                    <h6 className="reviewstar">4.5</h6>
                                </div>
                            </div>
                            <p className="reviewmainpara">
                                Lorem ipsum dolor sit amet consectetur. Vehicula in a egestas consectetur cras. Nulla phasellus duis nulla justo ac viverra in ullamcorper senectus. Aliquet sit scelerisque lectus leo varius eu non nulla. Neque nibh viverra sit maecenas nibh porta enim dignissim volutpat.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorProfile