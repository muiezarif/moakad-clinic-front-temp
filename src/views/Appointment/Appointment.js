import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./appointment.scss"

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";


const localizer = momentLocalizer(moment);

const Appointment = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const appointments = [
    {
      title: "Dr. Ahmed Saud 1",
      start: moment().set({ month: 2, date: 5, hour: 10, minute: 0 }).toDate(),
      end: moment().set({ month: 2, date: 5, hour: 11, minute: 0 }).toDate(),
      type: "current"
    },
    {
      title: "Dr. Ahmed Saud 2",
      start: moment().set({ month: 2, date: 10, hour: 12, minute: 0 }).toDate(),
      end: moment().set({ month: 2, date: 10, hour: 13, minute: 0 }).toDate(),
      type: "previous"
    },
    {
      title: "Dr. Ahmed Saud 3",
      start: moment().set({ month: 2, date: 15, hour: 14, minute: 0 }).toDate(),
      end: moment().set({ month: 2, date: 15, hour: 15, minute: 0 }).toDate(),
      type: "canceled"
    },
    {
      title: "Dr. Ahmed Saud 4",
      start: moment().set({ month: 2, date: 20, hour: 16, minute: 0 }).toDate(),
      end: moment().set({ month: 2, date: 20, hour: 17, minute: 0 }).toDate(),
      type: "upcoming"
    }
  ];

  const eventMonth = ({ event }) => {
    let backgroundColor;
    let borderLeftColor;
    let textColor;
    switch (event.type) {
      case "current":
        backgroundColor = "#E8EDFC";
        borderLeftColor = "#2652FF";
        textColor = "#2652FF";
        break;
      case "previous":
        backgroundColor = "Green/300";
        borderLeftColor = "#1C9480";
        textColor = "#1C9480";
        break;
      case "canceled":
        backgroundColor = "Secondary/Bold orange";
        borderLeftColor = "#E86136";
        textColor = "#E86136";
        break;
      case "upcoming":
        backgroundColor = "Base/White";
        borderLeftColor = "#DE66A1";
        textColor = "#DE66A1";
        break;
      default:
        backgroundColor = "lightgray";
        borderLeftColor = "gray";
        break;
    }

    const style = {
      backgroundColor,
      padding: 5,
      cursor: "pointer",
      borderLeft: `5px solid ${borderLeftColor}`,
      color: textColor,
      fontSize: "10px"
    };

    return (
      <div
        style={style}
        onClick={() => handleEventClick(event)}
      >
        <strong>{event.title}</strong>
        <br />
        {moment(event.start).format("MMMM Do YYYY, h:mm A")}
      </div>
    );
  };

  const handleEventClick = event => {
    setShowModal(true);
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="content">
      <section className="appointment-section">
        <div className="servicesupper">
          <h4 className="serviceshead">Appointments</h4>
          <div className="servicesbtns">
            <button className="sortbtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.83398 12.4997L10.0007 16.6663L14.1673 12.4997M5.83398 7.49967L10.0007 3.33301L14.1673 7.49967" stroke="#2652FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Sort
            </button>
            <Link to="/clinic/addappointment" className="addbtn">
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
              <input type="text" className="searchinput" placeholder='Specialty' />
              <svg className="searchimg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <button className="filterbtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#8F8FA6" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

        </div>
        <Calendar
          localizer={localizer}
          defaultDate={moment().set({ month: 2 }).toDate()}
          defaultView="month"
          events={appointments}
          style={{ height: "100vh" }}
          components={{ month: { event: eventMonth } }}
          onSelectEvent={handleEventClick}
        />

        <Modal className="appointment-modal" show={showModal} onHide={closeModal} centered>
          <Modal.Body>
            <div className="main-heading">
              <h6>Appointment Details</h6>
              <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#8F8FA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="bottom-detail">
              <div className="upper-content">
                <div className="doctor-profile">
                  <img src="\assets\dummyassets\doctor-profile-modal.png" alt="img" className="img-fluid" />
                </div>
                <div className="content">
                  <h6>Dr. Saud Mostafa</h6>
                  <p><span>Dentist</span><span>|</span><span>#D-1245125</span></p>
                  <div className="reviews">
                    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" viewBox="0 0 116 20" fill="none">
                      <path d="M8.9271 0.695722L6.48599 5.86696L1.02432 6.69889C0.0448775 6.84731 -0.347645 8.10887 0.362634 8.83144L4.31403 12.8544L3.37945 18.5373C3.21123 19.5645 4.24674 20.3339 5.11403 19.8535L10 17.1702L14.886 19.8535C15.7533 20.33 16.7888 19.5645 16.6206 18.5373L15.686 12.8544L19.6374 8.83144C20.3476 8.10887 19.9551 6.84731 18.9757 6.69889L13.514 5.86696L11.0729 0.695722C10.6355 -0.226039 9.36823 -0.237757 8.9271 0.695722Z" fill="#F5C24F" />
                      <path d="M32.9271 0.695722L30.486 5.86696L25.0243 6.69889C24.0449 6.84731 23.6524 8.10887 24.3626 8.83144L28.314 12.8544L27.3795 18.5373C27.2112 19.5645 28.2467 20.3339 29.114 19.8535L34 17.1702L38.886 19.8535C39.7533 20.33 40.7888 19.5645 40.6206 18.5373L39.686 12.8544L43.6374 8.83144C44.3476 8.10887 43.9551 6.84731 42.9757 6.69889L37.514 5.86696L35.0729 0.695722C34.6355 -0.226039 33.3682 -0.237757 32.9271 0.695722Z" fill="#F5C24F" />
                      <path d="M56.9271 0.695722L54.486 5.86696L49.0243 6.69889C48.0449 6.84731 47.6524 8.10887 48.3626 8.83144L52.314 12.8544L51.3795 18.5373C51.2112 19.5645 52.2467 20.3339 53.114 19.8535L58 17.1702L62.886 19.8535C63.7533 20.33 64.7888 19.5645 64.6206 18.5373L63.686 12.8544L67.6374 8.83144C68.3476 8.10887 67.9551 6.84731 66.9757 6.69889L61.514 5.86696L59.0729 0.695722C58.6355 -0.226039 57.3682 -0.237757 56.9271 0.695722Z" fill="#F5C24F" />
                      <path d="M80.9271 0.695722L78.486 5.86696L73.0243 6.69889C72.0449 6.84731 71.6524 8.10887 72.3626 8.83144L76.314 12.8544L75.3795 18.5373C75.2112 19.5645 76.2467 20.3339 77.114 19.8535L82 17.1702L86.886 19.8535C87.7533 20.33 88.7888 19.5645 88.6206 18.5373L87.686 12.8544L91.6374 8.83144C92.3476 8.10887 91.9551 6.84731 90.9757 6.69889L85.514 5.86696L83.0729 0.695722C82.6355 -0.226039 81.3682 -0.237757 80.9271 0.695722Z" fill="#F5C24F" />
                      <path d="M104.927 0.695722L102.486 5.86696L97.0243 6.69889C96.0449 6.84731 95.6524 8.10887 96.3626 8.83144L100.314 12.8544L99.3795 18.5373C99.2112 19.5645 100.247 20.3339 101.114 19.8535L106 17.1702L110.886 19.8535C111.753 20.33 112.789 19.5645 112.621 18.5373L111.686 12.8544L115.637 8.83144C116.348 8.10887 115.955 6.84731 114.976 6.69889L109.514 5.86696L107.073 0.695722C106.636 -0.226039 105.368 -0.237757 104.927 0.695722Z" fill="#B8B8C7" />
                    </svg> <p className="review-text">451 reviews</p>
                  </div>
                </div>
              </div>
              <div className="bottom-fields">
                <h6><span className="green-text">Patient Name</span> <span className="border-line">|</span>Ahmed Mohamed Hamed</h6>
                <h6><span className="green-text">Mobile Number</span> <span className="border-line">|</span>0510589789</h6>
                <h6><span className="green-text">Insurance</span> <span className="border-line">|</span>Malaz</h6>
                <h6><span className="green-text">Appointment Date</span> <span className="border-line">|</span>Sat, 20 / 1 / 2024    3:00 PM</h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default Appointment;
