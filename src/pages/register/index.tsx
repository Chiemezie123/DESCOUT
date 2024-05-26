import React, { useState } from "react";
import { Typography } from "@utils/typography";
import { Input } from "@utils/input";
import { Button } from "@utils/button";
import Search from "@assets/search";
import Arry from "@assets/arry";
import { useNavigate } from "react-router-dom";
import Eye from "@assets/eye";
import EyeSlash from "@assets/eyeSlash";

export default function Register() {
  const navigate = useNavigate();
  const RouteLogin = () => navigate("/login");
  const [ passwordState, setPasswordState] =useState(false);
  const [ secondPasswordState, setSecondPasswordState] =useState(false);
  const togglePassword=()=> setPasswordState((prev)=>!prev);
  const toggleSecondPassword=()=> setSecondPasswordState((prev)=>!prev)
  return (
    <div className="bg-black bg-custom-image bg-cover bg-center h-screen msm:h-full text-white flex flex-col justify-center items-center msm:px-[24px] mxxxs:px-[16px]">
      <div className="xl:w-[1116px] lg:w-[900px] mx-auto bg-[#141414] min-h-[780px]   px-[48px] py-[32px] msm:px-[24px] msm:py-[16px] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <Typography
            variant="h3"
            fontWeight="black"
            font="CabinetGrotesk"
            customClassName="msm:text-h-1 msm: font-bold"
          >
            Creating Your Account
          </Typography>
          <Typography
            variant="body-t"
            fontWeight="medium"
            font="CabinetGrotesk"
            color="star5"
          >
            Welcome to the best background checker for ride-hailing services out
            there.
          </Typography>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="grid grid-cols-2 grid-rows-2 gap-8 msm:flex msm:flex-col">
            <Input
              name="Company Name"
              label="Company Name"
              placeholder="Jeremiah Folorunso"
              bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
              type='text'
            />
            <Input
              name="Email Address"
              label="Email Address"
              placeholder="jeremiah@emailaddress.com"
              bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
              type='text'
            />
            <Input
              name="Password"
              label="Password"
              placeholder="starboy122#?$””:("
              bgcolor="placeholder:text-star-dust-800 bg-[#141414] border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
              passwordFunc={togglePassword}
              icon2={passwordState ?<Eye/>:<EyeSlash/>}
              passwordWay={passwordState}
            />
            <Input
              name="Re-enter Password"
              label="Re-enter Password"
              placeholder="starboy122#?$””:("
              bgcolor="placeholder:text-star-dust-800 bg-[#141414]  border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
              passwordFunc={toggleSecondPassword}
              icon2={secondPasswordState?<Eye/>:<EyeSlash/>}
              passwordWay={secondPasswordState}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <label className="custom-checkbox">
                <input type="checkbox" className="hidden peer" />
                <span className="w-[16.5px] h-[16.5px] bg-[#141414] border border-[#D6D6D6]  inline-block peer-checked:bg-blue-600"></span>
              </label>
              <p className="text-body-u text-star-dust-500 font-regular">
                {" "}
                I have read and agreed to the <span>terms and conditions</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="custom-checkbox">
                <input type="checkbox" className="hidden peer" />
                <span className="w-[16.5px] h-[16.5px] bg-[#141414] border border-[#D6D6D6]  inline-block peer-checked:bg-blue-600"></span>
              </label>
              <Typography
                variant="body-u"
                color="star5"
                fontWeight="regular"
                font="CabinetGrotesk"
              >
                I agree to recieve promotional informations through newsletters
              </Typography>
            </div>
          </div>
          <div className="flex gap-8 items-center pt-4 msm:flex-col msm:items-none">
            <Button
              children="Create an account"
              rightIcon={<Arry />}
              color="white"
              size="medium"
              customClassName="bg-[#654EF2] "
              fontWeight="medium"
            />
            <Button
              children="Login to your account"
              rightIcon={<Arry />}
              color="star5"
              size="medium"
              customClassName="bg-[#141414] border border-[#5C5C5C]"
              fontWeight="medium"
              onClick={RouteLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
