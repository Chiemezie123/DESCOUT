import React from "react";
import { Input } from "@utils/input";
import { Button } from "@utils/button";
import Search from "@assets/search";
import { PerformComp } from "@utils/performcomp";
import Notify from "@assets/notify";
import Warning from "@assets/warning";
import SideContainer from "@utils/sidecontainer";
import Car from "@assets/car";
import MobileNav from "@components/mobileNav";
import SelectComp from "@utils/select";
import DummyFolder from "@test/dummyfolder";
import Copy from "@assets/copy";
import { Typography } from "@utils/typography";

function Test() {


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <div>
        <Input
          name="first-name"
          label="Full Name"
          placeholder="Jeremiah Folorunso"
          bgcolor="placeholder:text-star-dust-800"
        />
      </div>
      <div>
        <Button children="Search For Driver" rightIcon={<Search />} />
      </div>
      <div>
        <PerformComp
          header="Discplinary Issue(s)"
          icon={<Warning />}
          text="excellent"
          count={22}
          color="#0E9F6E"
        />
      </div>
      <div>
        <SideContainer
          icon={<Car />}
          firstText="Joined since"
          secondText="Monday, 23rd May 2024"
        />
      </div>
      <div>
        <MobileNav/>
      </div>
      <div>
        <SelectComp options={options} placeholder="this is it"/>
      </div>
      <div>

<div>
 <div className="bg-[#2F2F2F] flex justify-between">
   <Typography color="apicolor">
     request url
   </Typography>
   <Button leftIcon={<Copy/>} children="copy code" fit color="apicolor"/>
 </div>
 <div className="bg-[#0D0D0D] h-[60px] text-white">
      this is the dipal code dcdfeddcdcdcdcdcdc
 </div>
</div>

</div>
      <div>
        <DummyFolder/>
      </div>
     
    </>
  );
}

export default Test;
