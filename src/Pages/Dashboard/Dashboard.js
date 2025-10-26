import TopBar from "../../Components/TopBar";

import SideBar from "../../Components/SideBar";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <TopBar></TopBar>
      <div className="content-flex">
        <SideBar />
        <div className="content-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
