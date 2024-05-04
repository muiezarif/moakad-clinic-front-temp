import React from 'react'
import './clinicprofile.scss'
import { Link } from 'react-router-dom'

const Clinicsprofile = () => {
  return (
    <>
      <section className="clinicprofile">
        <div className="clinicbanner">
          <div className="clinicimg">
            <img src="\assets\main-assets\clinicmainimg.png" alt="clinicinnerimg" className="clinicinnerimg" />
          </div>
        </div>
        <div className="clinicheadings">
          <div className="clinictextleft">
            <h4 className="clinichead">Al Rahma Clinic</h4>
            <p className="clinicpara">Medical clinic based in Riyadh</p>
          </div>
          <Link to="/clinic/editclinicprofile" className="bluebtn">Edit Profile</Link>
        </div>
        <div className="clinicdeatils">
          <h6 className="clinicdetailhead">About Clinic</h6>
          <p className="clinicdetailpara">
            Lorem ipsum dolor sit amet consectetur. Vulputate ipsum urna sit mus ultrissces maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat Lorem ipsum dolor sit amet consectetur. Vulputate ipsum urna sit mus ultrissces hshshs maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat Lorem ipsum dolor sit amet consectetur. sjsss sss Vulputate ipsum urna sit mus ultrissces maecenas. Iaculis tincidunt condimentum sed urna pellentesque in placerat
          </p>
          <h6 className="clinicdetailhead">Services</h6>
          <div className="tickmain">
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
            </div>
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
            </div>
          </div>
          <div className="tickmain">
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
            </div>
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
            </div>
          </div>
          <div className="tickmain">
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
            </div>
            <div className="tickinner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M5 13.2988L9 17.2988L19 7.29883" stroke="#29D19E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="tickpara">Gynecology and obstetrics</p>
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

export default Clinicsprofile