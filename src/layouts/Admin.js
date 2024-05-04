
import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";

function Dashboard(props) {
  const [backgroundColor] = React.useState("black");
  const [activeColor] = React.useState("info");
  const [brandName, setbrandName] = React.useState();
  const mainPanel = React.useRef();

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

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className={
        brandName === "Clinicprofile" ? "main-panel colorwhite" :
          brandName === "DoctorsProfile" ? "main-panel colorwhite" :
            "main-panel"
      } ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>

    </div>
  );
}

export default Dashboard;
