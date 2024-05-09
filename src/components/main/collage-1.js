/** @format */

import Image from "next/image";
const Photo1 = "/image/photo-1.jpg";
const Photo2 = "/image/photo-2.jpg";

export default function AbletonMainCollage1() {
  return (
    <div className="relative mb-[8.33333vw] min-[1600px]:mb-[133.33333px]">
      <div className="w-[58.33333vw] h-[58.33333vw] bg-paleYellow absolute right-0 min-[1600px]:w-[933.33333px] min-[1600px]:h-[933.33333px]" />

      <div className="w-[66.66667vw] h-[58.33333vw] relative flex flex-row items-center min-[1600px]:h-[933.33333px]">
        <Image
          src={Photo1}
          width={569}
          height={569}
          className="w-[41.66667vw] h-[41.66667vw] ml-[8.33333vw] min-[1600px]:w-[666.66667px] min-[1600px]:h-[666.66667px] min-[1600px]:ml-[133.33333px]"
        />
        <Image
          src={Photo2}
          width={455}
          height={341}
          className="w-[33.33333vw] h-[25vw] ml-[8.33333vw] min-[1600px]:w-[533.33333px] min-[1600px]:h-[400px] min-[1600px]:ml-[133.33333px]"
        />
      </div>
    </div>
  );
}
