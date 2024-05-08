/** @format */

import Link from "next/link";

export default function AbletonCommunity() {
  const FOOTER_COMMUNITY = [
    { type: "link", text: "Find Ableton User Groups", url: "#user-groups" },
    {
      type: "link",
      text: "Find Certified Training",
      url: "#certified-training",
    },
    {
      type: "link",
      text: "Become a Certified Trainer",
      url: "#certified-program",
    },
  ];

  return (
    <div className="pb-[8.33333vw] text-app01_sm md:pb-[4.16667vw] lg:pr-[0.625rem] lg:w-[30%] lg:float-left lg:text-app01_base">
      <h3 className="font-semibold">Community</h3>
      <ul>
        {FOOTER_COMMUNITY.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.text} &rsaquo;</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
