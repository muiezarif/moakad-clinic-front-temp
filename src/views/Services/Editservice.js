import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Editservice = () => {
    const [imageUrl, setImageUrl] = useState("/assets/dummyassets/service.png"); // Default image URL
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
    return (
        <>
            <div className="content">
                <section className="addservice">
                    <h4 className="addservicehead">Edit a Service</h4>
                    <p className="inputtext">Name</p>
                    <input type="text" className="addserviceinput" placeholder='Enter the name ' />
                    <p className="inputtext">Description</p>
                    <textarea placeholder='Add a description' className="servicetextarea"></textarea>
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
                    <div className="addservicebtns">
                        <Link to="/clinic/services" className="whitebtn">Cancel</Link>
                        <button className="bluebtn">Add</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Editservice