/** @format */

import Image from "next/image";
import Link from "next/link";
const Photo8D = "/image/ableton/photo-8.jpg";
const Photo8M = "/image/ableton/photo-8 (1).jpg";

export default function AbletonMainJobsTeasers() {
  return (
    <div className="relative">
      <div className="mx-[8.333333vw] xl:flex min-[1600px]:mx-[133.33333px]">
        <Image
          src={Photo8M}
          width={1065}
          height={639}
          className="w-full h-[50vw] object-cover xl:hidden"
        />

        <Image
          src={Photo8D}
          width={569}
          height={569}
          className="hidden xl:block xl:w-[41.66667vw] xl:h-[41.66667vw] min-[1600px]:w-[666.66667px] min-[1600px]:h-[666.66667px]"
        />

        <div className="bg-app01_skyBlue p-[8.33333vw] xl:w-[41.66667vw] xl:h-[41.66667vw] min-[1600px]:w-[666.66667px] min-[1600px]:h-[666.66667px] min-[1600px]:p-[133.33333px]">
          <h1 className="text-app01_base font-semibold min-[1124px]:text-app01_lg min-[1124px]:font-semibold">
            <p className="mb-[1em]">
              We’re really proud of the work we’ve done so far. But there’s so
              much more to come. If you’d like to be a part of it, please join
              us.
            </p>

            <Link href="#jobs" className="text-app01_blue">
              See latest jobs &rsaquo;
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
