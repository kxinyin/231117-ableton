/** @format */
import Link from "next/link";
import {
  LOGO_FACEBOOK,
  LOGO_INSTAGRAM,
  LOGO_TWITTER,
  LOGO_YOUTUBE,
} from "../../../../public/svg/ableton/icons";

export default function AbletonFooterInfo() {
  const FOOTER_INFO = [
    { type: "link", text: "Register Live or Push", url: "#acc-add-license" },
    { type: "link", text: "About Ableton", url: "/ableton/about" },
    { type: "link", text: "Jobs", url: "#jobs" },
  ];

  const FOOTER_SOCIAL = [
    {
      type: "link",
      icon: LOGO_FACEBOOK,
      color: "bg-[#3477F2]",
      url: "#facebook",
    },
    {
      type: "link",
      icon: LOGO_TWITTER,
      color: "bg-[#1DA1F2]",
      url: "#twitter",
    },
    {
      type: "link",
      icon: LOGO_YOUTUBE,
      color: "bg-[#FF001D]",
      url: "#youtube",
    },
    {
      type: "link",
      icon: LOGO_INSTAGRAM,
      color: "bg-[#F77737]",
      url: "#instagram",
    },
  ];

  return (
    <div className="pb-[8.33333vw] lg:pr-[0.625rem] md:pb-[4.16667vw] lg:w-[30%] lg:float-left">
      <ul className="text-app01_sm lg:text-app01_base">
        {FOOTER_INFO.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.text} &rsaquo;</Link>
          </li>
        ))}
      </ul>
      <ul>
        {FOOTER_SOCIAL.map((item, index) => (
          <li
            key={index}
            className={`inline-block w-[40px] h-[40px] mt-[0.625rem] mr-[0.625rem] ${item.color}`}
          >
            <Link href={item.url}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
