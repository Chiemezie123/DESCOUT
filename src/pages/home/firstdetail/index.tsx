import React from "react";
import { PerformComp } from "@utils/performcomp";
import Warning from "@assets/warning";
import Sprinkles from "@assets/sprinkles";
import Chart from "@assets/chart";
import TableComp from "@utils/table";
import { Typography } from "@utils/typography";
import secondcolumns from "@utils/table/secondTableColumn";
import { SecondTable } from "@mock/secondmock";
import SideContainer from "@utils/sidecontainer";
import Car from "@assets/car";
import Circlezero from "@assets/circleZero";
import Article from "@assets/article";
import SelectAll from "@assets/selectall";
import { Button } from "@utils/button";
import ArrowDown from "@assets/arrowdown";
import Review from "@utils/review";
import ReviewIcon from "@assets/reviewicon";
import SecondTableComp from "@utils/table/secondReactTable";
import { DriverDataProps } from "@api/mainAppContext/index.types";
import useLocalStorage from "@hooks/useLocalStorage";
export default function First() {
  const initialDriverData:DriverDataProps[] =[];
  const[storedValue, setValue] = useLocalStorage("storedDriverInfo", initialDriverData)
  const ridesArray = storedValue.map((value) => value.ridesInfo);
  const MainRideArray = ridesArray[0];
  const ride = MainRideArray.find((item) => item.name === 'Bolt Ride-Share');
  const rideTable = ride?.dvi;

  console.log(storedValue,"this is stored value")
  return (
    <div className="py-[20px] pl-[20px] pr-[40px] flex flex-col gap-12 mxxxs:p-[24px]">
    <div className="flex mmd:flex-col">
      <div className="flex-grow">
        <PerformComp
          header="Discplinary Issue(s)"
          icon={<Warning />}
          text={ride?.disciplinaryIssue?.comment}
          count={ride?.disciplinaryIssue?.amount}
          color="#0E9F6E"
        />
      </div>
      <div className="flex-grow">
        <PerformComp
          header="Ratings"
          icon={<Sprinkles />}
          text="over 5.00"
          count={ride?.ratings}
          color="#0E9F6E"
        />
      </div>
      <div className="flex-grow">
        <PerformComp
          header="Trips"
          icon={<Chart />}
          text="trips"
          count={ride?.trips}
          color="#FF5A1F"
        />
      </div>
    </div>
    <div className="">
      <div className="pb-2">
        <Typography
          variant="body-r"
          color="special"
          fontWeight="bold"
          font="CabinetGrotesk"
        >
          Driver and Vehicle Informations
        </Typography>
      </div>
      <div className="flex gap-4 mmd:flex-col">
        <div className="flex-grow">
          <SecondTableComp columns={secondcolumns} data={rideTable} />
        </div>
        <div className="flex flex-col justify-between mmd:gap-4">
          <div className="">
            <SideContainer
              icon={<Circlezero />}
              firstText="Joined since"
              secondText={ride?.dateJoined}
            />
          </div>
          <div>
            <SideContainer
              icon={<Car />}
              firstText="Vehicle Name"
              secondText={ride?.vehicleName}
            />
          </div>
          <div>
            <SideContainer
              icon={<Article />}
              firstText="Model No (VIN)"
              secondText={ride?.modelNo}
            />
          </div>
          <div>
            <SideContainer
              icon={<SelectAll />}
              firstText="License Plate"
              secondText={ride?.licensePlate}
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Typography variant="body-r" fontWeight="bold" color="wood9">
            Reviews:
          </Typography>
          <Typography fontWeight="regular" color="wood5">
            {ride?.reviews?.length} Reviews
          </Typography>
        </div>
        <div>
          <Button rightIcon={<ArrowDown />} children="Show all" />
        </div>
      </div>
      <div className="flex items-center gap-4 mmd:flex-col ">
        <div className="flex-grow">
          <Review
            text1="Riding in aderiye’s car was very enjoyeable. We talked and vibed along the way. I enjoyed his jokes and nice sense of humour."
            text2="23rd, Dec 2024."
            icon={<ReviewIcon />}
          />
        </div>
        <div className="flex-grow">
          <Review
            text1="Riding in aderiye’s car was very enjoyeable. We talked and vibed along the way. I enjoyed his jokes and nice sense of humour."
            text2="23rd, Dec 2024."
            icon={<ReviewIcon />}
          />
        </div>
        <div className="flex-grow">
          <Review
            text1="Riding in aderiye’s car was very enjoyeable. We talked and vibed along the way. I enjoyed his jokes and nice sense of humour."
            text2="23rd, Dec 2024."
            icon={<ReviewIcon />}
          />
        </div>
      </div>
    </div>
  </div> 
  );
}