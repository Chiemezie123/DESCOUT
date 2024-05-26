import React, { useState } from "react";
import { Typography } from "@utils/typography";
import { Input } from "@utils/input";
import Copy from "@assets/copy";
import Star from "@assets/star";
import Snippet from "@assets/snippet";
import { Button } from "@utils/button";
import ButtonCopy from "@utils/buttonCopy";
import ArrowDown from "@assets/arrowdown";
import SmallCodeSnippet from "@assets/smallcodesnippet";

function ConnectApi() {
  // const [isActive, setIsActive] = useState(false);

  // const handleFocus = () => {
  //   setIsActive(true);
  // };

  // const handleBlur = () => {
  //   setIsActive(false);
  // };
  return (
    <>
      <div className="">
        <div className="bg-[#000000] px-[48px]  py-[20px] msm:px-[24px] ">
          <div className="mb-5">
            <Typography
              variant="h1"
              color="white"
              fontWeight="bold"
              font="CabinetGrotesk"
            >
              Link Descout To Your Product
            </Typography>
          </div>
          <div className="max-w-[548px] mb-5">
            <Typography variant="body-r" color="star5" fontWeight="regular">
              We are connected with the top ride-hailing companies in africa.
              Some of these companies include: Bolt, LagRide, Rider, Shuttlers,
              Uber and many more.
            </Typography>
          </div>
        </div>
        <div className="px-[48px] py-[20px] msm:px-[24px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10 mmd:gap-8">
              <div className=" mmd:w-full">
                <ButtonCopy
                  label="DE Base API Endpoint "
                  children={"https://www.dis.com"}
                  rightIcon={<Copy />}
                  size="crap"
                  customClass="bg-[#F9FAFB] md:max-w-[321px]"
                  labelCustomClassName="text-woodsmoke-950 font-bold"
                  color="star9"
                  fontWeight="medium"
                
                />
              </div>
              <div className="flex gap-4 items-center mmd:flex-col mmd:items-start mmd:gap-8">
                <div className="mmd:w-full">
                  <ButtonCopy
                    label="API Key"
                    children={"12344257875366"}
                    rightIcon={<Copy />}
                    size="crap"
                    customClass="bg-[#F9FAFB] md:w-[321px]"
                    labelCustomClassName="text-woodsmoke-950 font-bold"
                    color="star9"
                    fontWeight="medium"
                    
                  />
                </div>
                {/* <div className="mmd:w-full">
                  <ButtonCopy
                    label="OAuth"
                    children={"Shuttlers NG"}
                    rightIcon={<Copy />}
                    size="crap"
                    customClass="bg-[#F9FAFB] md:w-[321px]"
                    labelCustomClassName="text-woodsmoke-950 font-bold"
                    color="star9"
                    fontWeight="medium"
                  />
                </div> */}
              </div>
            </div>
            <div className="border rounded-md p-4">
              <div className="flex gap-1 items-center pb-4">
                <Star />
                <Typography variant="caption-s" color="wood9" fontWeight="bold">
                  Code Snippets
                </Typography>
              </div>
              <div className="flex gap-4 border-t pt-6 mmd:flex-col">
                <div className=" flex-grow">
                  <div className="group flex h-[120px] cursor-pointer">
                    <div className="flex justify-between w-98  flex-grow p-[24px] transition-colors duration-300 group-hover:bg-[#E5E5E5]">
                      <Typography>Search NIN</Typography>
                      <ArrowDown />
                    </div>
                    <div className="w-2  transition-colors duration-300 group-hover:bg-gray-300"></div>
                  </div>

                  <div className="group flex h-[120px] cursor-pointer">
                    <div className="flex justify-between w-98  flex-grow p-[24px] transition-colors duration-300 group-hover:bg-[#E5E5E5]">
                      <Typography>Search Name</Typography>
                      <ArrowDown />
                    </div>
                    <div className="w-2  transition-colors duration-300 group-hover:bg-gray-300"></div>
                  </div>

                  <div className="group flex h-[120px] cursor-pointer">
                    <div className="flex justify-between w-98  flex-grow p-[24px] transition-colors duration-300 group-hover:bg-[#E5E5E5]">
                      <Typography>Search with ID</Typography>
                      <ArrowDown />
                    </div>
                    <div className="w-2  transition-colors duration-300 group-hover:bg-gray-300"></div>
                  </div>
                </div>

                <div className="px-[64px] py-[32px] border-md bg-[#F4F4F4] mmd:px-[24px] mmd:py-[16px] mmd:flex mmd:items-center mmd:justify-center">
                  <div className="flex flex-col gap-4 mmd:w-full">
                    {/* <img src="/Code snippet.png" alt="code"/> */}
                    <div className="flex gap-4 items-center mmd:flex-col mmd:w-full">
                      <div className="mmd:w-full">
                        <img src="/public/code snippit.png" alt="snip1"/>
                      </div>
                      <div className="mmd:w-full"> <img src="/public/code1.png" alt="snip2"/></div>
                    </div>
                    <div className="mmd:w-full"> <img src="/public/Row.png" alt="snip2"/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectApi;
