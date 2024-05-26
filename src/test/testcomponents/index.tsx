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

function Test() {
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
    </>
  );
}

export default Test;
