import React, { useState } from "react";
import CustomAppBar from "../../components/AppBar/AppBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";
import styled from "@emotion/styled";
// import { styled } from "@mui/material";

const HomeLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1; // Allow content area to grow and fill remaining space
  height: 88vh;
`;

const ChildrenArea = styled.div`
  flex-grow: 1;
  overflow-y: auto; // Allow vertical scrolling within this area only
  padding: 16px;
  height: inherit; // Ensure this area takes up all remaining space
`;

/**
 * Servers as the Layout for the home
 * - Contains Appbar, Sidebar and Main content
 * @returns {Component} - Component layout
 */

const HomeLayout = ({ children }: { children?: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
