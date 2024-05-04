import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';

import {
  Collapse,
  Navbar,
  Container,
} from "reactstrap";

import routes from "routes.js";
import { Dropdown } from "react-bootstrap";

function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [brandName, setbrandName] = React.useState();
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("");
    }
    setIsOpen(!isOpen);
  };
  const getBrand = () => {
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        setbrandName(prop.name);
      }
      return null;
    });
  };
  useEffect(() => {
    getBrand();
  });
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
  };
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);

  const [showdis, setShowdis] = useState(false);
  const handleClosedis = () => setShowdis(false);

  const [activeTab, setActiveTab] = useState('link-1');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <>
     {brandName === "Clinicprofile" || brandName === "DoctorsProfile" ? "" : ( <div className="main-navbar">
        <Navbar
          color={
            props.location.pathname.indexOf("full-screen-maps") !== -1
              ? ""
              : color
          }
          expand="lg"
          className={
            props.location.pathname.indexOf("full-screen-maps") !== -1
              ? ""
              : "" +
              (color === "transparent" ? "navbar-transparent " : "")
          }
        >
          <Container fluid className="main-header-top-change p-0">
            <div className="topnavbar">
              <div className="logo d-none mobile-show-logo">
                <img src="\logo.svg" alt="img" className="img-fluid" />
              </div>
              <div className="navbar-wrapper">
                <svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#0024B2" class="bi bi-three-dots-vertical wallet-btn-sm d-none" style={{ width: '20px', height: '20px' }} onClick={toggle}>
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                <div className="navbar-toggle">
                  <button
                    type="button"
                    ref={sidebarToggle}
                    className="navbar-toggler"
                    onClick={() => openSidebar()}
                  >
                    <img src="\assets\main-assets\menu.svg" alt="img" className="img-fluid" />
                    {/* <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" /> */}
                  </button>
                </div>
                {/* <NavbarBrand href="/">{brandName}</NavbarBrand> */}
              </div>
            </div>
            {/* <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler> */}
            <Collapse isOpen={isOpen} navbar className="justify-content-between">
              <div className="innnernavbar">
                <div className="navleft">
                  {brandName === 'Dashboard' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Settlements</p>
                    </div>
                  )}
                  {brandName === 'Services' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Services Management</p>
                    </div>
                  )}
                  {brandName === 'Addservice' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Services Management</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Add a Service</p>
                    </div>
                  )}
                  {brandName === 'Editservice' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Services Management</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Edit a Service</p>
                    </div>
                  )}
                  {brandName === 'Addpatients' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Patients List</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Add a Patient</p>
                    </div>
                  )}
                  {brandName === 'Editpatients' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Patients List</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Edit a Patient</p>
                    </div>
                  )}
                  {brandName === 'Patients' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Patients List</p>
                    </div>
                  )}
                  {brandName === 'Settlements' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Settlements</p>
                    </div>
                  )}
                  {brandName === 'Editclinicprofile' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Clinic Profile</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Edit Profile</p>
                    </div>
                  )}
                  {brandName === 'Settings' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Settings</p>
                    </div>
                  )}
                  {brandName === 'Doctors' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Doctors</p>
                    </div>
                  )}
                  {brandName === 'Appointment' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Appointments</p>
                    </div>
                  )}
                  {brandName === 'Reports' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Reports</p>
                    </div>
                  )}
                  {brandName === 'Addappointment' && (
                    <div className="navleftinner">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="homeicon">
                        <path d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67078 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67078 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z" stroke="#595970" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Appointments</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#CCCCD6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="navleftpara">Add an appointment</p>
                    </div>
                  )}
                </div>
                <div className="navright">

                  <Dropdown align='end' autoClose='outside'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <button className="notificationbutton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7.79447 17.5001C8.38208 18.0187 9.15395 18.3334 9.99932 18.3334C10.8447 18.3334 11.6166 18.0187 12.2042 17.5001M14.9993 6.66675C14.9993 5.34067 14.4725 4.0689 13.5349 3.13121C12.5972 2.19353 11.3254 1.66675 9.99932 1.66675C8.67324 1.66675 7.40147 2.19353 6.46379 3.13121C5.52611 4.0689 4.99932 5.34067 4.99932 6.66675C4.99932 9.2419 4.34972 11.005 3.62404 12.1713C3.01193 13.155 2.70587 13.6468 2.71709 13.784C2.72952 13.936 2.76171 13.9939 2.88414 14.0847C2.99471 14.1667 3.49315 14.1667 4.49004 14.1667H15.5086C16.5055 14.1667 17.0039 14.1667 17.1145 14.0847C17.2369 13.9939 17.2691 13.936 17.2816 13.784C17.2928 13.6468 16.9867 13.155 16.3746 12.1713C15.6489 11.005 14.9993 9.2419 14.9993 6.66675Z" stroke="#12215C" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="notificationbox">
                        <div className="notificationtop">
                          <h6 className="notificationhead">Notifications</h6>
                          <span className="notificationpara">Mark all as read</span>
                        </div>
                        <div className="mynav">
                          <Nav variant="pills" activeKey={activeTab} onSelect={handleSelect}>
                            <Nav.Item>
                              <Nav.Link eventKey="link-1">All <span className="notificationnumber">2</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-2">Reports</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="link-3">
                                Requests
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#7A7A96" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="#7A7A96" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        {activeTab === 'link-1' && (
                          <>
                            <div className="innernotificationmain">
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                               
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                            
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                            
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                              
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {activeTab === 'link-2' && (
                          <>
                            <div className="innernotificationmain">
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                               
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                            
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                            
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                              
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {activeTab === 'link-3' && (
                          <>
                           <div className="innernotificationmain">
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification activenotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                                  <span className="newnotificationdot"></span>
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                                  <div className="notificationbtns">
                                    <button className="bluebtn">Approve</button>
                                    <button className="whitebtn">reject</button>
                                  </div>
                                </div>
                              </div>
                              <div className="innernotification">
                                <div className="notificationimg">
                                  <img src="\assets\dummyassets\Avatar.png" alt="notificationinnerimg" className="notificationinnerimg" />
                               
                                </div>
                                <div className="notificationtexts">
                                  <h6 className="notificationhead">Lorem ipsum dolor sit amet consectetur.</h6>
                                  <p className="notificationpara">1 day ago</p>
                            
                                </div>
                              </div>
                           
                            </div>
                          </>
                        )}
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="profileimg">
                    <img src="\assets\dummyassets\Avatar.png" alt="profileimginner" className="profileimginner" />
                  </div>
                </div>
              </div>
            </Collapse>
          </Container>
        </Navbar>

      </div>
    )}

    </>

  );
}

export default Header;
