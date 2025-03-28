import { Achievements } from "../components/Achievements/Achievements";
import { Calender } from "../components/Calender/Calender";
import { Clients } from "../components/Clients/Clients";
import { Community } from "../components/Community/Community";
import { CommunityUpd } from "../components/CummunityUpd/CommunityUpd";
import { Customers } from "../components/Customers/Customers";
import HeroSection from "../components/HeroSection/HeroSection";
import { Unlock } from "../components/Unlock/Unlock";

export const MainPage = () => {
  return (
    <>
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <CommunityUpd />
    </>
  );
};
