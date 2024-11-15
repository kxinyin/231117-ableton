/** @format */
import Link from "next/link";
import Image from "next/image";
import IconLogo from "public/svg/ableton-logo.svg";
import { ICON_DOWN, ICON_UP } from "public/svg/icons";

export default function AbletonPrimaryNavbar(props) {
  const {
    isMenuOpen,
    toggleMenu,
    PRIMARY_NAVBAR_ITEMS_LEFT,
    PRIMARY_NAVBAR_ITEMS_RIGHT,
  } = props;

  return (
    <nav className="flex">
      <Link
        passHref
        href="/"
        className={`inline-block align-midlle mr-[2em] mb-[1.25rem] ml-[1.25rem] relative z-50 ${
          isMenuOpen ? "text-white" : "text-black"
        } lg:text-black xl:mr-[2rem] xl:ml-[2.5rem] w-[60px] h-[28px]`}
      >
        <Image
          src={IconLogo}
          alt="Ableton"
          className="max-w-full h-auto w-[122px] lg:w-[188px]"
        />
      </Link>

      <div className="lg:absolute lg:w-full">
        {/* Mobile Menu */}
        <button
          className={`text-base font-semibold flex items-end gap-1 relative z-50 ${
            isMenuOpen ? "text-white" : "text-black"
          } lg:hidden`}
          onClick={toggleMenu}
          type="button"
          data-drawer-target="drawer-top"
          data-drawer-toggle="drawer-top"
          data-drawer-placement="top"
          aria-controls="drawer-top"
        >
          Menu
          <span
            className={`w-6 h-6 ${isMenuOpen ? "text-white" : "text-black"}`}
          >
            {isMenuOpen ? ICON_UP : ICON_DOWN}
          </span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex w-full items-end overflow-hidden h-[1.75rem] pl-[6.25rem] pr-[1.25rem] text-sm font-medium xl:pl-[8.75rem] xl:pr-[2.5rem] xl:text-base xl:font-medium ">
          {PRIMARY_NAVBAR_ITEMS_LEFT.map((item, index) => {
            if (item.type === "link")
              return (
                <li
                  key={index}
                  className="px-[0.625rem] mx-0 first:pl-0 first:ml-0 xl:mx-[0.625rem]"
                >
                  <Link href={item.url}>{item.text}</Link>
                </li>
              );
            else
              return (
                <li
                  key={index}
                  className="px-[0.625rem] mx-0 text-coral xl:mx-[0.625rem]"
                >
                  <button onClick={item.func}>{item.text}</button>
                </li>
              );
          })}

          {PRIMARY_NAVBAR_ITEMS_RIGHT.map(
            (item, index) =>
              item.type === "link" && (
                <li
                  key={index}
                  className={`pr-0 pl-[0.625rem] mr-0 text-xs font-medium xl:font-medium ${
                    index === 0
                      ? "ml-auto text-blue xl:px-[0.625rem] xl:text-base"
                      : "ml-[0.3125rem] text-black xl:px-0 xl:ml-[0.625rem] xl:text-sm"
                  }`}
                >
                  <Link href={item.url}>{item.text}</Link>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
}
