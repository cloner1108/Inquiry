import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

const Nav = () => {
  const location = useLocation();

  return (
    <Navbar
      className="border-b mb-4 shadow-sm max-w-[1280px] mx-auto"
      maxWidth="full"
      shouldHideOnScroll
    >
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ButtonGroup>
          <Button
            className="px-0"
            variant={location.pathname == "/estelam" ? "faded" : "solid"}
          >
            <Link className="p-4" to="/estelam">
              استعلام تخلفات خودرو
            </Link>
          </Button>
          <Button
            className="px-0"
            variant={location.pathname == "/add" ? "faded" : "solid"}
          >
            <Link className="p-4" to="/add">
              ثبت تخلف جدید
            </Link>
          </Button>
          <Button
            className="px-0"
            variant={location.pathname == "/all" ? "faded" : "solid"}
          >
            <Link className="p-4" to="/all">
              لیست تخلفات خودرو
            </Link>
          </Button>
        </ButtonGroup>
      </NavbarContent>
      <Link to="/">
        <NavbarBrand>
          <p className="font-bold text-inherit">سامانه بررسی و ثبت تخلفات</p>
          <img src={logo} alt="logo" className="h-10" />
        </NavbarBrand>
      </Link>
    </Navbar>
  );
};

export { Nav };
