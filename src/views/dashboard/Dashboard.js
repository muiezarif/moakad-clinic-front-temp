import React from 'react'
import "./dashboard.scss"
import Dashedlinechart from './Dashedlinechart'
import Donutchart from './Donutchart'
import Datatable from './Datatable/Datatable'

const Dashboard = () => {
  return (
    <>
      <div className="content">
        <section className="dashboard-section">
          <div className="upper-cards">
            <div className="single-card">
              <div className="inner-upper">
                <img src="\assets\main-assets\revenue-icon.svg" alt="img" className='img-fluid' />
                <h6>Revenue</h6>
              </div>
              <div className="bottom-content">
                <h5>$187,972.54</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 13.3334V2.66675M8 2.66675L4 6.66675M8 2.66675L12 6.66675" stroke="#29D19E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span>+3%</span> from last week</p>
              </div>
            </div>
            <div className="single-card">
              <div className="inner-upper">
                <img src="\assets\main-assets\totaldoctors-icon.svg" alt="img" className='img-fluid' />
                <h6>Total Doctors</h6>
              </div>
              <div className="bottom-content">
                <h5>25468</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2.66659V13.3333M8 13.3333L4 9.33325M8 13.3333L12 9.33325" stroke="#F04438" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span>-3%</span> from last week</p>
              </div>
            </div>
            <div className="single-card">
              <div className="inner-upper">
                <img src="\assets\main-assets\totalpateint-icons.svg" alt="img" className='img-fluid' />
                <h6>Total Patients</h6>
              </div>
              <div className="bottom-content">
                <h5>100254</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 13.3334V2.66675M8 2.66675L4 6.66675M8 2.66675L12 6.66675" stroke="#F48E09" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span>+3%</span> from last week</p>
              </div>
            </div>
            <div className="single-card">
              <div className="inner-upper">
                <img src="\assets\main-assets\totalservice-icon.svg" alt="img" className='img-fluid' />
                <h6>Total Services</h6>
              </div>
              <div className="bottom-content">
                <h5>140000</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 13.3334V2.66675M8 2.66675L4 6.66675M8 2.66675L12 6.66675" stroke="#2D8EF8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span>+3%</span> from last week</p>
              </div>
            </div>
          </div>
          <div className="twice-graph">
            <div className="left-graph">
              <Dashedlinechart />
            </div>
            <div className="right-graph">
              <Donutchart />
            </div>
          </div>
          <Datatable />
        </section>
      </div>
    </>
  )
}

export default Dashboard