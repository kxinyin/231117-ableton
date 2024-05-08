/** @format */

import Image from "next/image";
const PosterMeetTheMakers = "/image/ableton/poster-meet-the-makers.jpg";

export default function AbletonMainMedia2() {
  return (
    <div className="relative w-auto mb-[8.33333vw] mx-[8.33333vw] min-[1600px]:mb-[133.33333px] min-[1600px]:mx-[133.33333px]">
      <Image
        src={PosterMeetTheMakers}
        width={1138}
        height={640}
        className="w-full h-auto"
      />
    </div>
  );
}
