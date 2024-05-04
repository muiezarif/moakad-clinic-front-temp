import Appointment from "views/Appointment/Appointment";
import Clinicsprofile from "views/Clinicprofile/Clinicsprofile";
import Adddoctor from "views/Doctors/Adddoctor";
import Doctors from "views/Doctors/Doctors";
import Editclinicprofile from "views/Clinicprofile/Editclinicprofile";
import Addpatients from "views/Patients/Addpatients";
import Editpatients from "views/Patients/Editpatients";
import Patients from "views/Patients/Patients";
import Addservice from "views/Services/Addservice";
import Editservice from "views/Services/Editservice";
import Services from "views/Services/Services";
import Settings from "views/Settings/Settings";
import Settlements from "views/Settlements/Settlements";
import Dashboard from "views/dashboard/Dashboard.js";
import Reports from "views/Reports/Reports";
import DoctorProfile from "views/Doctors/DoctorProfile";
import Addapointment from "views/Appointment/Addapointment";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/clinic",
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    layout: "/clinic",
  },
  {
    path: "/addservice",
    name: "Addservice",
    component: Addservice,
    layout: "/clinic",
  },
  {
    path: "/editservice",
    name: "Editservice",
    component: Editservice,
    layout: "/clinic",
  },
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
    layout: "/clinic",
  },
  {
    path: "/addpatients",
    name: "Addpatients",
    component: Addpatients,
    layout: "/clinic",
  },
  {
    path: "/editpatients",
    name: "Editpatients",
    component: Editpatients,
    layout: "/clinic",
  },
  {
    path: "/settlements",
    name: "Settlements",
    component: Settlements,
    layout: "/clinic",
  },
  {
    path: "/clinicprofile",
    name: "Clinicprofile",
    component: Clinicsprofile,
    layout: "/clinic",
  },
  {
    path: "/editclinicprofile",
    name: "Editclinicprofile",
    component: Editclinicprofile,
    layout: "/clinic",
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    layout: "/clinic",
  },
  {
    path: "/doctors",
    name: "Doctors",
    component: Doctors,
    layout: "/clinic",
  },
  {
    path: "/doctorprofile",
    name: "DoctorsProfile",
    component: DoctorProfile,
    layout: "/clinic",
  },
  {
    path: "/adddoctor",
    name: "Doctors",
    component: Adddoctor,
    layout: "/clinic",
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: Appointment,
    layout: "/clinic",
  },
  {
    path: "/addappointment",
    name: "Addappointment",
    component: Addapointment,
    layout: "/clinic",
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports,
    layout: "/clinic",
  },
];
export default routes;