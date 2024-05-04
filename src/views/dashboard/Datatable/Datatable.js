import React from 'react'
import "./datatable.scss"
import { Link } from 'react-router-dom'
import { Dropdown, Pagination } from 'react-bootstrap'

const Datatable = () => {
    return (
        <>
            <div className="dashboard-datatable">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <th>
                                <div className="namemain">
                                    <p className="namepara">Name</p>
                                </div>
                            </th>
                            <th>
                                Specialty
                            </th>
                            <th>
                                Doctor Name
                            </th>
                            <th>
                                Date
                            </th>
                            <th>Status</th>
                            <th>Insurance</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="twice-items">
                                        <div className="profile">
                                            <img src="\assets\dummyassets\dummytableprofile.png" alt="img" className='img-fluid' />
                                        </div>
                                        <div className="textt">
                                            <h6 className="nametd">Nouf Ali</h6>
                                            <p>#12547</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Cardiology
                                </td>
                                <td>Badr Ali</td>
                                <td>Jan 6, 2022</td>
                                <td>
                                    <div className="status">
                                        <h6 className='paid'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                            <path d="M10.666 3.00073L5.16602 8.50073L2.66602 6.00073" stroke="#17B26A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Paid</h6>
                                    </div>
                                </td>
                                <td>Badr Ali</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="twice-items">
                                        <div className="profile">
                                            <img src="\assets\dummyassets\dummytableprofile.png" alt="img" className='img-fluid' />
                                        </div>
                                        <div className="textt">
                                            <h6 className="nametd">Nouf Ali</h6>
                                            <p>#12547</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Cardiology
                                </td>
                                <td>Badr Ali</td>
                                <td>Jan 6, 2022</td>
                                <td>
                                    <div className="status">
                                        <h6 className='refunded'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                            <g clip-path="url(#clip0_484_1743)">
                                                <path d="M2.66602 3.50073H7.66602C9.32287 3.50073 10.666 4.84388 10.666 6.50073C10.666 8.15759 9.32287 9.50073 7.66602 9.50073H2.66602M2.66602 3.50073L4.66602 1.50073M2.66602 3.50073L4.66602 5.50073" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_484_1743">
                                                    <rect width="12" height="12" fill="white" transform="translate(0.666016 0.000732422)" />
                                                </clipPath>
                                            </defs>
                                        </svg>Refunded</h6>
                                    </div>
                                </td>
                                <td>Badr Ali</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="twice-items">
                                        <div className="profile">
                                            <img src="\assets\dummyassets\dummytableprofile.png" alt="img" className='img-fluid' />
                                        </div>
                                        <div className="textt">
                                            <h6 className="nametd">Nouf Ali</h6>
                                            <p>#12547</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Cardiology
                                </td>
                                <td>Badr Ali</td>
                                <td>Jan 6, 2022</td>
                                <td>
                                    <div className="status">
                                        <h6 className='cancelled'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                            <path d="M9.16602 3.50073L4.16602 8.50073M4.16602 3.50073L9.16602 8.50073" stroke="#F04438" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>Cancelled</h6>
                                    </div>
                                </td>
                                <td>Badr Ali</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
            </div>
        </>
    )
}

export default Datatable
