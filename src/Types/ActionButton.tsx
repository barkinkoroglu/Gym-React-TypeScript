import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
type Props = {
  children: React.ReactNode;
  setSelecedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelecedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelecedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
