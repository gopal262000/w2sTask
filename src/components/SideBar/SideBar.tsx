
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

interface SideBarDiv {
  isVisible: boolean;
}

const SidebarContainer = styled.div<SideBarDiv>`
  width: 300px;
  height: 91.4vh;
  background-color: #282c34;
  color: white;
  padding: 5px;
  display: ${(props) => (props.isVisible ? 'block' : "none")};
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  position: relative; // Default position

  @media (max-width: 768px) {
    width: 50%;
    height: 93vh;
    position: absolute; // Overlay on top
    top: 20;
    left: 0;
    z-index: 1000; // Ensure it appears on top of other content
  }
`;

const CustomNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  /* margin: 10px 0; */
  border-radius: 4px;
  display: inline-block;
  width: 90%;
  padding: 10px;
  &.active {
    background-color: #61dafb; /* Active link background color */
    color: #282c34; /* Active link text color */
  }
`;

const NavList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

/**
 * 
 * @param {boolean} isVisible - Whether the Sidebar is visible or not
 * @returns - Sidebar Component
 */

const Sidebar = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <SidebarContainer isVisible={isVisible}>
      <NavList>
        <li>
          <CustomNavLink to="/products">Products</CustomNavLink>
        </li>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
