import React, { useState } from 'react'
import './patients.scss'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import Datepicker from './Datepicker';

const Addpatients = () => {
    const [selectedItem, setSelectedItem] = useState("");
    const items = ["Dermatology", "Dermatology", "Dermatology"]

    const [selectedItem1, setSelectedItem1] = useState("");
    const items1 = ["Nouf Saud", "Nouf Saud", "Nouf Saud"]

    const [selectedItem2, setSelectedItem2] = useState("");
    const items2 = ["0510589789", "0510589789", "0510589789"]

    const [selectedItem3, setSelectedItem3] = useState("");
    const items3 = ["Malaz", "Malaz", "Malaz"]

    const [selectedItem4, setSelectedItem4] = useState("");
    const items4 = ["New Patient", "New Patient", "New Patient"]

    const [selectedItem5, setSelectedItem5] = useState("");
    const items5 = ["15:40", "15:40", "15:40"]
    return (
        <>
            <div className="content">
                <section className="addservice">
                    <h4 className="addservicehead">Add a Patient</h4>
                    <div className="addpatientsmain">
                        <div className="addpatientinner">
                            <p className="addpatientpara">Name</p>
                            <input type="text" className="addpatientinput" placeholder='Enter the name' />
                        </div>
                        <div className="addpatientinner">
                            <p className="addpatientpara">Service</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem ? <><h6>{selectedItem}</h6></> : "Select the service"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items.map((item) => (
                                        <p className="drop" onClick={() => setSelectedItem(item)}>
                                            {item}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="addpatientinner">
                            <p className="addpatientpara">Doctor Numbers</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem1 ? <><h6>{selectedItem1}</h6></> : "Select the doctor"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items1.map((item1) => (
                                        <p className="drop" onClick={() => setSelectedItem1(item1)}>
                                            {item1}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="addpatientsmain">
                        <div className="addpatientinner">
                            <p className="addpatientpara">Mobile Number</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem2 ? <><h6>{selectedItem2}</h6></> : "Enter the mobile number"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items2.map((item2) => (
                                        <p className="drop" onClick={() => setSelectedItem2(item2)}>
                                            {item2}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="addpatientinner">
                            <p className="addpatientpara">Insurance</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem3 ? <><h6>{selectedItem3}</h6></> : "Select the insurance"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items3.map((item3) => (
                                        <p className="drop" onClick={() => setSelectedItem3(item3)}>
                                            {item3}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="addpatientinner">
                            <p className="addpatientpara">Status</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem4 ? <><h6>{selectedItem4}</h6></> : "Select the status"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items4.map((item4) => (
                                        <p className="drop" onClick={() => setSelectedItem4(item4)}>
                                            {item4}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="addpatientsmain">
                        <div className="addpatientinner">
                            <p className="addpatientpara">Date</p>
                         <Datepicker />
                        </div>
                        <div className="addpatientinner">
                            <p className="addpatientpara">Time</p>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem5 ? <><h6>{selectedItem5}</h6></> : "Select the preferred time"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items5.map((item5) => (
                                        <p className="drop" onClick={() => setSelectedItem5(item5)}>
                                            {item5}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="addservicebtns">
                        <Link to="/clinic/patients" className="whitebtn">Cancel</Link>
                        <button className="bluebtn">Add</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Addpatients