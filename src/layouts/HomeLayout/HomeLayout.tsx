import React, { useState } from "react";
import CustomAppBar from "../../components/AppBar/AppBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";
import { styled } from "@mui/material";

const HomeLayoutStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const ContentArea = styled("div")({
  display: "flex", 
  flexGrow: 1, // Allow content area to grow and fill remaining space
  height: "88vh"
});

const ChildrenArea = styled("div")({
  flexGrow: 1, 
  overflowY: "auto", // Allow vertical scrolling within this area only
  padding: "16px",
  height: 'inherit', // Ensure this area takes up all remaining space
});

const HomeLayout = ({ children }: { children?: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleOnSideMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <HomeLayoutStyle>
      <CustomAppBar onSideMenuClick={handleOnSideMenuClick} />
      <ContentArea>
        <SideBar isVisible={isSidebarVisible} />
        <ChildrenArea>
          <Outlet />
        </ChildrenArea>
      </ContentArea>
    </HomeLayoutStyle>
  );
};

export default HomeLayout;
