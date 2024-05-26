import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@utils/typography";
import Shape from "@assets/shape";
import Settings from "@assets/settings";
import Bell from "@assets/bell";
import Hamburger from "@assets/hamburger";
import Cancel from "@assets/close";


type NavBarProps ={
  navState?: boolean;
  setNavState: () => void;

}
function NavBar(props:NavBarProps) {
  const{navState, setNavState} = props;
  return (
    <>
      <div className=" flex flex-row justify-between">
        <div className="flex items-center justify-evenly gap-8 px-2">
          <div className="pr-6 border-r ">
            <NavLink to="/">
              <Typography
                variant="body-m"
                color="white"
                fontWeight="bold"
                font="CabinetGrotesk"
              >
                Descout
              </Typography>
            </NavLink>
          </div>
          <div className="px-2 ">
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium bg-[#1A1A1A] px-[8px] py-[12px]"
                  : "text-star-dust-500 font-medium "
              }
            >
              {/* <Typography
                variant="body-s"
                color="star5"
                fontWeight="medium"
                font="CabinetGrotesk"
              ></Typography> */}
              Home
            </NavLink>
          </div>
          <div className="px-2 mmd:hidden">
            <NavLink
              to="connectApi"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium bg-[#1A1A1A] px-[8px] py-[12px]"
                  : "text-star-dust-500 font-medium "
              }
            >
              {/* <Typography
                variant="body-s"
                color="star5"
                fontWeight="medium"
                font="CabinetGrotesk"
              ></Typography> */}
              Connect API
            </NavLink>
          </div>
          <div className="px-2 mmd:hidden">
            <NavLink
              to="update"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium bg-[#1A1A1A] px-[8px] py-[12px]"
                  : "text-star-dust-500 font-medium "
              }
            >
              {/* <Typography
                variant="body-s"
                color="star5"
                fontWeight="medium"
                font="CabinetGrotesk"
              ></Typography> */}
              Update Company Profile
            </NavLink>
          </div>
        </div>
        <div>
        <div className=" lg:hidden mmd:block" onClick={setNavState}>
           {!navState ? <Hamburger/>: <Cancel/>}
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-4 mmd:hidden">
          <div>
            <Settings />
          </div>
          <div>
            <Bell />
          </div>
          <div>
            <div className="flex items-center justify-evenly border-l gap-2 px-2">
              <Shape />
              <p>
                <Typography
                  variant="body-s"
                  color="star5"
                  fontWeight="medium"
                  font="CabinetGrotesk"
                >
                  userName
                </Typography>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;