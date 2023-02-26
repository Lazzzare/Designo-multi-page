import React, { useRef, useState } from "react";
import styled from "styled-components";
import { LogoDark } from "../assets";
import { Close, Hamburger } from "../svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const backDrop = useRef<HTMLDivElement | null>(null);

  const backDropHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === backDrop.current) {
      setShowMenu(false);
    }
  };
  return (
    <HeaderComponent>
      <Link to={"/"} onClick={() => setShowMenu(false)}>
        <Logo src={LogoDark} alt="logo" />
      </Link>
      {showMenu ? (
        <Close
          onClick={() => {
            setShowMenu(false);
          }}
        />
      ) : (
        <Hamburger
          onClick={() => {
            setShowMenu(true);
          }}
        />
      )}
      {showMenu ? (
        <Backdrop ref={backDrop} onClick={backDropHandler}>
          <Menu>
            <NavList>
              <Link
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                }}
                to={"/about"}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <NavItem>OUR COMPANY</NavItem>
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                }}
                to={"/location"}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <NavItem>LOCATIONS</NavItem>
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                }}
                to={"/contact"}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <NavItem>CONTACT</NavItem>
              </Link>
            </NavList>
          </Menu>
        </Backdrop>
      ) : null}
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  width: 202px;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: absolute;
  left: 0;
  top: 96px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Menu = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-color: #1d1c1e;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 32px;
`;

const NavItem = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 2px;
  color: #ffffff;
`;
