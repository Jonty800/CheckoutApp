import styled from "styled-components"
import AppLogo from './images/AppLogo'
import BasketIcon from "./images/BasketIcon"
import { Text } from "./shared/Styles"

export default function NavBar() {

  return (
    <StyledNavBar className="nav-bar">
        <AppLogo />
        <RightNavigation>
          <NavigationText>Products</NavigationText>
          <NavigationText>News</NavigationText>
          <NavigationText>Contact</NavigationText>
          <NavigationText><BasketIcon width={20} height={20}/></NavigationText>
        </RightNavigation>
    </StyledNavBar>
  )
}

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 112px;
  border-bottom: 1px solid #e6e6e6;
`

const RightNavigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  font-family: LibreFranklinRegular;
  text-transform: uppercase;
`

const NavigationText = styled(Text)`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.325714px;
  text-transform: uppercase;
`
