/** @format */
import { useRouter } from "next/router";
import { useState } from "react";

import { ICON_MINUS, ICON_PLUS } from "public/svg/icons";
import AbletonBackdrop from "../layout/backdrop";
import AbletonDrawerTop from "./drawer-top";
import AbletonPrimaryNavbar from "./primary-navbar";
import AbletonSecondaryNavbar from "./secondary-navbar";
import AbletonMoreContent from "./more-content";

export default function AbletonHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const PRIMARY_NAVBAR_ITEMS_LEFT = [
    { type: "link", text: "Live", url: "#Live" },
    { type: "link", text: "Push", url: "#push" },
    { type: "link", text: "Note", url: "#note" },
    { type: "link", text: "Link", url: "#link" },
    { type: "link", text: "Shop", url: "#shop" },
    { type: "link", text: "Packs", url: "#packs" },
    { type: "link", text: "Help", url: "#help" },
    {
      type: "button",
      text: (
        <span className="flex items-center gap-1">
          More {showMore ? ICON_MINUS : ICON_PLUS}
        </span>
      ),
      func: () => setShowMore(!showMore),
    },
  ];

  const PRIMARY_NAVBAR_ITEMS_RIGHT = [
    { type: "link", text: "Try Live for free", url: "#trial" },
    { type: "link", text: "Log in or register", url: "#login" },
  ];

  const SECONDARY_NAVBAR_ITEMS_RIGHT = [
    { text: "About", url: "/ableton/about" },
    { text: "Jobs", url: "#jobs" },
    { text: "Apprenticeships", url: "#ausbildung" },
  ];

  const MORE_SECTION_ONE = {
    title: "More on Ableton.com:",
    items: [
      { text: "Blog", url: "#blog" },
      { text: "Ableton for the Classroom", url: "#classroom" },
      {
        text: "Ableton for Colleges and Universities",
        url: "#colleges-universities",
      },
      { text: "Certified Training", url: "#certified-training" },
      { text: "About Ableton", url: "/ableton/about" },
      { text: "Jobs", url: "#jobs" },
      { text: "Apprenticeships", url: "#ausbildung" },
    ],
  };

  const MORE_SECTION_TWO = {
    title: "More for Ableton:",
    items: [
      {
        title: "Loop",
        content:
          "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
        url: "#loop",
      },
      {
        title: "Learning Music",
        content:
          "Learn the fundamentals of music making right in your browser.",
        url: "#learning-music",
      },
      {
        title: "Learning Synths",
        content:
          "Get started with synthesis using a web-based synth and accompanying lessons.",
        url: "#learning-synths",
      },
      {
        title: "Making Music",
        content:
          "Some tips from 74 Creative Strategies for Electronic Producers.",
        url: "#making-music",
      },
    ],
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // TODO: (closeMenu) refocus on tab

  return (
    <>
      <div className="lg:hidden">
        <AbletonBackdrop isOpen={isMenuOpen} onClose={toggleMenu} />

        <AbletonDrawerTop
          isOpen={isMenuOpen}
          showMore={showMore}
          router={router}
          PRIMARY_NAVBAR_ITEMS_LEFT={PRIMARY_NAVBAR_ITEMS_LEFT}
          PRIMARY_NAVBAR_ITEMS_RIGHT={PRIMARY_NAVBAR_ITEMS_RIGHT}
          MORE_SECTION_ONE={MORE_SECTION_ONE}
          MORE_SECTION_TWO={MORE_SECTION_TWO}
        />
      </div>

      <header className="bg-white max-w-[1600px] w-full m-auto pt-[1.25rem] pb-0 relative overflow-visible z-35">
        <AbletonPrimaryNavbar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          PRIMARY_NAVBAR_ITEMS_LEFT={PRIMARY_NAVBAR_ITEMS_LEFT}
          PRIMARY_NAVBAR_ITEMS_RIGHT={PRIMARY_NAVBAR_ITEMS_RIGHT}
        />

        <div className="hidden lg:block">
          <AbletonMoreContent
            showMore={showMore}
            router={router}
            MORE_SECTION_ONE={MORE_SECTION_ONE}
            MORE_SECTION_TWO={MORE_SECTION_TWO}
          />
        </div>

        {/* Divider */}
        <div className="block border-solid border-t-2 bg-app01_paleGray"></div>
      </header>

      <AbletonSecondaryNavbar
        router={router}
        SECONDARY_NAVBAR_ITEMS_RIGHT={SECONDARY_NAVBAR_ITEMS_RIGHT}
      />
    </>
  );
}
