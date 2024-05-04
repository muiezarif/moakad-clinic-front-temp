import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './clinicprofile.scss'
import { Dropdown } from 'react-bootstrap';

const Editclinicprofile = () => {
    const [imageUrl, setImageUrl] = useState("/assets/main-assets/clinicmainimg.png"); // Default image URL
    const [uploadMode, setUploadMode] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result);
            setUploadMode(false);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleReplaceImage = () => {
        setUploadMode(true);
    };
    const [selectedItem, setSelectedItem] = useState(null);
    const [addedServices, setAddedServices] = useState([]);

    const items = ["Dermatology", "Cardiology", "Neurology","Derma", "Cardio", "Neuro"];

    const handleAddService = () => {
        if (selectedItem && !addedServices.includes(selectedItem)) {
            setAddedServices([...addedServices, selectedItem]);
        }
    };

    const handleDeleteService = (service) => {
        setAddedServices(addedServices.filter(item => item !== service));
    };
    return (
        <>
            <div className="content">
                <section className="editclinicprofile">
                    <h4 className="addservicehead">Edit Profile</h4>
                    <div className="editprofilemain">
                        <div className="editprofileinner">
                            <p className="inputtext">Name</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the name ' />
                        </div>
                        <div className="editprofileinner">
                            <p className="inputtext">Bio</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the Bio ' />
                        </div>
                        <div className="editprofileinner">
                            <p className="inputtext">Description</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the Description ' />
                        </div>
                    </div>
                    <div className="editprofilemain">
                        <div className="editprofileinner">
                            <p className="inputtext">Website Link</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the Website Link ' />
                        </div>
                        <div className="editprofileinner">
                            <p className="inputtext">Mobile Number</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the Mobile Number ' />
                        </div>
                        <div className="editprofileinner">
                            <p className="inputtext">Landline</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the Landline ' />
                        </div>
                    </div>
                    <div className="addservicesmain">
                        <div className="addservicesmaintop">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem ? <><h6>{selectedItem}</h6></> : "Select specialty"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path d="M4.33594 6L8.33594 10L12.3359 6" stroke="#A3A3B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {items.map((item) => (
                                        <p className="drop" key={item} onClick={() => setSelectedItem(item)}>
                                            {item}
                                        </p>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <button className="plusbtn" onClick={handleAddService}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99935 4.1665V15.8332M4.16602 9.99984H15.8327" stroke="#2652FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="addedservices">
                            {addedServices.map((service, index) => (
                                <span key={index} className="addedservicesinner">
                                    {service}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='deleteimg' onClick={() => handleDeleteService(service)}>
                                        <path d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167" stroke="#E86136" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        {uploadMode ? (
                            <div>
                                <p className="inputtextbold">Upload Image</p>
                                <label htmlFor="fileInput" className="uploadmain">
                                    <div className="uploadimg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M6.66602 13.3333L9.99935 10M9.99935 10L13.3327 13.3333M9.99935 10V17.5M16.666 13.9524C17.6839 13.1117 18.3327 11.8399 18.3327 10.4167C18.3327 7.88536 16.2807 5.83333 13.7493 5.83333C13.5673 5.83333 13.3969 5.73833 13.3044 5.58145C12.2177 3.73736 10.2114 2.5 7.91602 2.5C4.46424 2.5 1.66602 5.29822 1.66602 8.75C1.66602 10.4718 2.36222 12.0309 3.48847 13.1613" stroke="#696985" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h6 className="uploadhead"><span className="boldtext">Click to upload</span> or drag and drop</h6>
                                    <p className="uploadpara">PNG, JPG (max. 800x400px)</p>
                                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageUpload} />
                                </label>
                            </div>
                        ) : (
                            <div className="replaceimgmain">
                                <p className="inputtextbold">Replace Image</p>
                                <div className="replaceimg">
                                    <img src={imageUrl} alt="replaceinnerimg" className="replaceinnerimg" />
                                </div>
                                <button className="whitebtn" onClick={handleReplaceImage}>Replace Image</button>
                            </div>
                        )}
                    </div>
                    <p className="inputtextbold margintopset">Add Location</p>
                    <div className="mapmain">
                        <img src="\assets\dummyassets\mapimg.png" alt="mapmainimg" className="mapmainimg" />
                        <button className="whitebtn">Change your location</button>
                    </div>
                    <div className="addservicebtns">
                        <Link to="/clinic/clinicprofile" className="whitebtn">Cancel</Link>
                        <button className="bluebtn">Add</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Editclinicprofile