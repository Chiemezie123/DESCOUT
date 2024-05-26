import React from "react";
import { NavLink } from "react-router-dom";

export default function InnerNavBar() {
  return (
    <>
      <div className="flex items-center 2xl:gap-32 xl:gap-32 lg:gap-[64px] ">
        <div>
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Bolt Ride-Share
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/lagride"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Lagride
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/rida"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2]  font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Rida
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/shuttler"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Shuttlers
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/uber"
            className={({ isActive }) =>
              isActive
                ? "text-[#654EF2] font-bold border-b pb-1 border-[#654EF2]"
                : "text-special font-regular"
            }
          >
            Uber
          </NavLink>
        </div>
      </div>
    </>
  );
}
