/** @format */

import Image from "next/image";
import TextLogo from "public/svg/ableton-wordmark-coral.svg";
const HeaderImage = "/image/header.jpg";

export default function AbletonMainHeader() {
  return (
    <header
      className={`relative w-auto min-h-[calc(100vh-120px)] mx-[8.33333vw] mb-[8.33333vw]`}
    >
      <Image
        alt="Ableton Header Image"
        src={HeaderImage}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="absolute top-[50%] left-[50%] w-[215px] h-[52px] -ml-[107px] -mt-[26px] md:w-[430px] md:h-[104px] md:-ml-[215px] md:-mt-[52px]">
        <Image src={TextLogo} alt="Ableton" fill />
      </div>
    </header>
  );
}
