import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/Types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/Types/ActionButton";
type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
  const flexItemBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav>
      <div
        className={`${
          !isTopPage ? "bg-primary-100 drop-shadow" : ""
        } ${flexItemBetween} fixed top-0 z-30 w-full py-6 `}
      >
        <div className={`${flexItemBetween} mx-auto w-5/6`}>
          {/* Left Side */}
          <div className={`${flexItemBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexItemBetween} w-full `}>
                <div className={`${flexItemBetween} gap-8 text-sm `}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexItemBetween} gap-8  `}>
                  <p>Sign In</p>
                  <ActionButton setSelecedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setMenuToggle(!menuToggle)}
                className="rounded-full bg-secondary-500 p-2"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* {Mobile} */}
      <div
        className={
          !isAboveMediumScreens && menuToggle
            ? "fixed bg-primary-100 right-0 top-0 z-40 h-full  duration-300 w-[300px]"
            : "fixed bg-primary-100 right-[-100%] top-0 z-40 h-full  duration-300 w-[300px]"
        }
      >
        <button
          onClick={() => setMenuToggle(false)}
          className=" flex justify-end p-12 w-full"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="flex flex-col justify-center ml-[33%] gap-y-4 font-bold text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
