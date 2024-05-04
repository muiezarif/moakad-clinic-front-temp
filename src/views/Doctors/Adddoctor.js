import React, { useState } from 'react'
import '../Services/services.scss'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

const Adddoctor = () => {
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleReplaceImage = () => {
        setImageUrl(null);
    };
    const [selectedItem, setSelectedItem] = useState("");
    const items = ["1", "2", "3"]
    return (
        <>
            <div className="content">
                <section className="addservice adddoctor">
                    <h4 className="addservicehead">Add a Doctor</h4>
                    <div className="multi-fields">
                        <div className="option-field">
                            <p className="inputtext">Name</p>
                            <input type="text" className="addserviceinput" placeholder='Enter the name ' />
                        </div>
                        <div className="option-field">
                            <p className="inputtext">Doctor Specialty</p>
                            <input type="text" className="addserviceinput" placeholder='Select the specialty ' />
                        </div>
                        <div className="option-field">
                            <p className="inputtext">Mobile number</p>
                            <input type="number" className="addserviceinput" placeholder='Enter the mobile number ' />
                        </div>
                    </div>
                    <p className="inputtext">Description</p>
                    <textarea placeholder='Add a description' className="servicetextarea"></textarea>
                    {!imageUrl ? (
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
                        <div>
                            <p className="inputtextbold">Replace Image</p>
                            <div className="replaceimgmain">
                                <div className="replaceimg">
                                    <img src={imageUrl} alt="replaceinnerimg" className="replaceinnerimg" />
                                </div>
                                <button className="whitebtn" onClick={handleReplaceImage}>Replace Image</button>
                            </div>
                        </div>
                    )}
                    <div className="timetable-div">
                        <h6 className="main-heading">Time table</h6>
                        <div className="bottom-twice">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    {selectedItem ? <><h6>{selectedItem}</h6></> : "Select the day"}
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
                            <div className="twice-elements">
                                <div className="twice-inputs">
                                    <input type="text" placeholder='00' />
                                    <span>:</span>
                                    <input type="text" placeholder='00' />
                                </div>
                                <div className="plus-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0013 4.16699V15.8337M4.16797 10.0003H15.8346" stroke="#2652FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addservicebtns">
                        <Link to="/clinic/doctors" className="whitebtn">Cancel</Link>
                        <button className="bluebtn">Add</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Adddoctor