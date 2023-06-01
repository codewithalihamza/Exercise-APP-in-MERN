import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Activities from "./Activities";
import ActivityForm from "./ActivityForm";
import ActivityRecord from "./ActivityRecord";
import DashboardActivityRecord from "./DashboardActivityRecord";
import { FaArrowCircleLeft, FaRunning } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Dashboard = () => {
  const [sessionData, setsessionData] = useState(null);
  const getSessionData = () => {
    setsessionData(sessionStorage.getItem("user"));
  };
  const navigate = useNavigate();
  useEffect(() => {
    getSessionData();
    navigate();
  }, []);
  const logOut = () => {
    sessionStorage.clear();
  };
  return (
    <>
      {sessionData === null ? (
        navigate("/login")
      ) : (
        <div
          className="bg-dark"    
        >
        
          <div className="row m-auto">
              <div className="col mt-4">
                  <div className="" title="Dashboard">
                  <Link to="/dashboard/DashboardActivitiesRecord">
                    <MdDashboard size={42} /> Dashboard
                  </Link>
                  </div>
              </div>
              <div className="col mt-4">
                    <div className="md:hidden block" title="Activities">
                      <Link to="/dashboard/activities">
                        <FaRunning size={42} /> Activities
                      </Link>
                    </div>
              </div>
              <div className="col mt-4">
              <div className="md:hidden block" title="Logout">
                  <Link to="/">
                    <FaArrowCircleLeft size={42} onClick={logOut} />   Logout
                  </Link>
                </div>
              </div>
          </div>
          <Routes>
            <Route
              path="/DashboardActivitiesRecord"
              element={<DashboardActivityRecord />}
            ></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/ActivityForm" element={<ActivityForm />}></Route>
            <Route path="/ActivityRecord" element={<ActivityRecord />}></Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default Dashboard;
