/** @format */

import Image from "next/image";
const Photo6 = "/image/photo-6-a.jpg";
const Photo7 = "/image/photo-7.jpg";

export default function AbletonMainCollage3() {
  return (
    <div className="relative mb-[8.33333vw] min-[1600px]:mb-[133.33333px]">
      <div className="w-[66.66667vw] h-[58.33333vw] bg-lavender absolute left-[16.66667vw] min-[1600px]:w-[1066.66667px] min-[1600px]:h-[933.33333px] min-[1600px]:left-[266.66667px]" />

      <div className="py-[8.33333vw] relative flex flex-row items-center min-[1600px]:py-[133.33333px]">
        <Image
          src={Photo6}
          width={455}
          height={341}
          className="w-[33.33333vw] h-[25vw] ml-[8.33333vw] min-[1600px]:w-[533.33333px] min-[1600px]:h-[400px] min-[1600px]:ml-[133.33333px]"
        />

        <Image
          src={Photo7}
          width={569}
          height={569}
          className="w-[41.66667vw] h-[41.66667vw] ml-[16.66667vw] min-[1600px]:w-[666.66667px] min-[1600px]:h-[666.66667px] min-[1600px]:ml-[266.66667px]"
        />
      </div>
    </div>
  );
}
