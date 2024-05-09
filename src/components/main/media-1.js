/** @format */

import Image from "next/image";
import { useState } from "react";
const PosterJuanpe = "/image/ableton/poster-juanpe.avif";

export default function AbletonMainMedia1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mb-[8.33333vw] mx-[8.33333vw] md:w-[66.66667vw] md:mx-auto xl:w-[50vw] min-[1600px]:w-[800px]">
      <figure className="relative">
        <div className="bg-[#bfbfbf] relative pb-[56.25%]">
          <div className="absolute top-0 left-0 w-full h-full cursor-pointer">
            {isPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9SbnhgjeyXA?si=4eUrJRvM7OTlST_B&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <div onClick={() => setIsPlaying(true)}>
                <div className="w-full flex items-center justify-center absolute top-0 right-0 bottom-0 left-0">
                  <span className="w-[5rem] h-[5rem] bg-blue text-white rounded-[50%] relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 56"
                      className="w-[1.625rem] h-[1.8125rem] absolute top-[1.625rem] left-[1.9375rem]"
                    >
                      <polygon
                        fill="currentColor"
                        points="0 0 0 56 48 28 0 0"
                      ></polygon>
                    </svg>
                  </span>
                </div>

                <Image src={PosterJuanpe} width={853} height={480} />
              </div>
            )}
          </div>
        </div>
        <figcaption className="max-w-[83.33333vw] text-xs font-semibold p-[0.625rem]">
          Why Ableton - Juanpe Bolivar
        </figcaption>
      </figure>
    </div>
  );
}
