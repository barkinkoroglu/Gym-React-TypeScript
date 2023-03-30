import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/Types/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexItemBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav>
      <div className={`${flexItemBetween} fixed top-0 z-30 w-full py-6 `}>
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
                  <button>Become a Member</button>
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
    </nav>
  );
};

export default Navbar;
