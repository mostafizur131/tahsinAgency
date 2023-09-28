"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const current = usePathname();
  return (
    <div
      className={
        current === "/" ? "relative bg-primaryLight" : "relative bg-white"
      }
    >
      <div className="container mx-auto">
        <nav className="relative px-6 py-6 flex justify-between items-center z-10">
          <Link href={"/"} className="text-xl text-black font-bold ">
            <span>Tahsin</span>
            <span className="text-secondary">Agency</span>
          </Link>
          {/* Mobile HamBurger */}
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-primary p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className={
                  current === "/"
                    ? "text-base text-secondary font-bold"
                    : "text-base text-gray-700 hover:text-secondary"
                }
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/team"
                    ? "text-base text-secondary font-bold"
                    : "text-base text-gray-700 hover:text-secondary "
                }
                href={"/team"}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/service"
                    ? "text-base text-secondary font-bold"
                    : "text-base text-gray-700 hover:text-secondary"
                }
                href={"/service"}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/projects"
                    ? "text-base text-secondary font-bold"
                    : "text-base text-gray-700 hover:text-secondary"
                }
                href={"/projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={
                  current === "/testimonials"
                    ? "text-base text-secondary font-bold"
                    : "text-base text-gray-700 hover:text-secondary"
                }
                href={"/testimonials"}
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <div className="hidden lg:inline-block">
            <button className="text-base text-black border border-primary bg-opacity-0 hover:bg-primary hover:text-white px-[25px] py-[10px] rounded-[10px] mr-5 transition duration-200">
              Login
            </button>
            <button className="text-base text-white border border-primary bg-primary hover:bg-transparent hover:text-primary px-[20px] py-[10px] rounded-[10px] transition duration-200">
              Register
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
