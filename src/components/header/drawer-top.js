/** @format */

import Link from "next/link";
import AbletonMoreContent from "./more-content";

export default function AbletonDrawerTop(props) {
  const {
    isOpen,
    showMore,
    router,
    PRIMARY_NAVBAR_ITEMS_LEFT,
    PRIMARY_NAVBAR_ITEMS_RIGHT,
    MORE_SECTION_ONE,
    MORE_SECTION_TWO,
  } = props;

  return (
    <div
      id="drawer-top"
      className={`absolute top-0 left-0 z-50 w-full pt-[4.375rem] px-[0.9375rem] overflow-y-auto transition-transform duration-[350ms] ease-in-out ${
        isOpen ? "translate-y bg-blue" : "-translate-y-full bg-transparent"
      } text-white text-base`}
      tabIndex="-1"
      aria-labelledby="drawer-label"
    >
      {/* Primary Navbar Items */}
      <ul className="pr-[1.25rem]">
        {[...PRIMARY_NAVBAR_ITEMS_LEFT, ...PRIMARY_NAVBAR_ITEMS_RIGHT].map(
          (item, index) =>
            item.type === "link" && (
              <li
                key={index}
                className="mb-[1rem] pr-[0.625rem] font-medium last:text-[13px] last:font-normal"
              >
                <Link href={item.url}>{item.text}</Link>
              </li>
            )
        )}
      </ul>

      {/* More Content */}
      <AbletonMoreContent
        showMore={showMore}
        router={router}
        MORE_SECTION_ONE={MORE_SECTION_ONE}
        MORE_SECTION_TWO={MORE_SECTION_TWO}
      />
    </div>
  );
}
