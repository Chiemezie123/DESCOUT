import React ,{useState}from 'react';
import { Typography } from '@utils/typography';
import { Button } from '@utils/button';
import { Input } from '@utils/input';
import Arry from '@assets/arry';
import Cuppy from '@assets/cuppy';
import { useNavigate } from 'react-router-dom';
import Eye from '@assets/eye';
import EyeSlash from '@assets/eyeSlash';

export default function Login() {

    const navigate = useNavigate();
    const routeHomePage =()=> navigate("/home");
    const routeRegisterPage =()=> navigate("/register");
    const [ passwordState, setPasswordState] =useState(false);
    const togglePassword=()=> setPasswordState((prev)=>!prev);
  return (
    <div className="bg-black bg-custom-image bg-cover bg-center h-screen text-white pt-[100px] msm:pt-[20px] px-[20px]">
     <div className="max-w-[660px] mx-auto bg-[#141414] min-h-[514px] msm:h-full  px-[48px] msm:px-[24px] py-[32px] msm:py-[16px] flex flex-col gap-8 ">
        <div className="flex items-center justify-between">
         <div className='flex flex-col gap-2'>
         <Typography variant="h4" fontWeight="bold" font="CabinetGrotesk">
          Accessing Your Account
          </Typography>
          <Typography
            variant="body-t"
            fontWeight="medium"
            font="CabinetGrotesk"
            color="star5"
          >
           If you dont't have an account, <span className='text-body-v text-white'onClick={routeRegisterPage}> Click here to signup</span>
          </Typography>
         </div>
         <div className='msm:hidden'>
            <Cuppy/>
         </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input
              name="Email Address"
              label="Email Address"
              placeholder="jeremiah@emailaddress.com"
              bgcolor="placeholder:text-star-dust-500 bg-[#141414] border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
            
            />
            <Input
              name="Password"
              label="Password"
              placeholder="jeremiah@emailaddress.com"
              bgcolor="placeholder:text-star-dust-500 bg-[#141414] border-[#5C5C5C]"
              labelCustomClassName="text-star-dust-500"
              maindiv="flex-grow-3"
              passwordFunc={togglePassword}
              icon2={passwordState ?<Eye/>:<EyeSlash/>}
              passwordWay={passwordState}
            />
           
          </div>
          <div className="flex flex-col gap-4">
      
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
             Keep me signed in
              </Typography>
            </div>
          </div>
          <div className="flex gap-8 items-center pt-4">
            <Button
              children="Login To My Account"
              rightIcon={<Arry />}
              color="white"
              size="medium"
              customClassName="bg-[#654EF2] "
              fontWeight="medium"
            onClick={routeHomePage}
            />
            
          </div>
        </div>
      </div>
    </div>
  )
}
