/** @format */

import Link from "next/link";

export default function AbletonEducation() {
  const FOOTER_EDUCATION = [
    {
      type: "link",
      text: "Offers for students and teachers",
      url: "#education",
    },
    { type: "link", text: "Ableton for the Classroom", url: "#classroom" },
    {
      type: "link",
      text: "Ableton for Colleges and Universities",
      url: "#colleges-universities",
    },
  ];

  return (
    <div className="pb-[8.33333vw] text-sm lg:pr-[0.625rem] md:pb-[4.16667vw] lg:w-[30%] lg:float-left lg:text-base">
      <h3 className="font-semibold">Education</h3>
      <ul>
        {FOOTER_EDUCATION.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.text} &rsaquo;</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
