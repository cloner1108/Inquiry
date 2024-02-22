import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { Nav } from "./Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between max-w-[1280px] mx-auto">
      <div>
        <Nav />
        <Outlet />
      </div>

      <footer className="w-full pt-5">
        <Divider />
        <p className="py-2">
          پروژه ورودی توسط علی عبدی به سفارش شرکت ایده گستران سبز
        </p>
      </footer>
    </div>
  );
};

export { MainLayout };
