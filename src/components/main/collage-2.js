/** @format */

import Image from "next/image";
const Photo3 = "/image/photo-3.jpg";
const Photo4 = "/image/photo-4.jpg";
const Photo5 = "/image/photo-5.jpg";

export default function AbletonMainCollage2() {
  return (
    <div className="relative mb-[8.33333vw] min-[1600px]:mb-[133.33333px]">
      <div className="w-[58.33333vw] h-[75vw] bg-mintGreen absolute min-[1600px]:w-[933.33333px] min-[1600px]:h-[1200px]" />

      <div className="w-full h-full p-[8.33333vw] relative flex flex-row items-center">
        <div>
          <Image
            src={Photo3}
            width={455}
            height={341}
            className="w-[33.33333vw] h-[25vw] object-cover min-[1600px]:w-[533.33333px] min-[1600px]:h-[400px]"
          />
          <Image
            src={Photo4}
            width={455}
            height={341}
            className="w-[33.33333vw] h-[25vw] object-cover mt-[8.33333vw] min-[1600px]:w-[533.33333px] min-[1600px]:h-[400px] min-[1600px]:mt-[133.33333px]"
          />
        </div>

        <div>
          <Image
            src={Photo5}
            width={569}
            height={569}
            className="w-[41.66667vw] h-[41.66667vw] object-cover ml-[8.33333vw] min-[1600px]:w-[666.66667px] min-[1600px]:h-[666.66667px] min-[1600px]:ml-[133.33333px]"
          />
        </div>
      </div>
    </div>
  );
}
