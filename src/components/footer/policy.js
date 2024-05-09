/** @format */

import Link from "next/link";

export default function AbletonPolicy() {
  const FOOTER_LEGAL = [
    { type: "link", text: "Contact Us", url: "#contact-us" },
    { type: "link", text: "Press Resources", url: "#press" },
    { type: "link", text: "Legal Info", url: "#legal" },
    { type: "link", text: "Privacy Policy", url: "#privacy-policy" },
    { type: "link", text: "Cookie Settings", url: "#cookie-settings" },
    { type: "link", text: "Imprint", url: "#imprint" },
  ];

  return (
    <div className="inline-block align-middle text-xs lg:mt-[1rem] lg:w-auto">
      {FOOTER_LEGAL.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="font-semibold block mb-[0.5em] mr-[1em] lg:inline-block mb-0"
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
}
