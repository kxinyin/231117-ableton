/** @format */
import Image from "next/image";
import TextLogo from "public/svg/ableton/ableton-wordmark.svg";
import { LOGO_ABLETON } from "../../../public/svg/ableton/icons";
import AbletonNewsletterForm from "./form";
import AbletonFooterInfo from "./information";
import AbletonEducation from "./education";
import AbletonCommunity from "./community";
import AbletonLanguageLocation from "./language-location";
import AbletonPolicy from "./policy";

export default function AbletonFooter() {
  return (
    <footer className="max-w-[100rem] mx-auto bg-[#fff]">
      {/* Seperator */}
      <div className="bg-[#fff] relative pt-[8.33333vw] border-solid border-b-2 border-paleGray" />

      <div className="px-[8.33333vw]">
        <div className="pt-[8.33333vw]">
          {/* Logo */}
          <div>
            <div className="pb-[8.33333vw] lg:w-full md:pb-[4.16667vw] lg:pr-[0.625rem]">
              <Image
                src={TextLogo}
                alt="Ableton"
                className="max-w-full h-auto w-[122px] lg:w-[188px]"
              />
            </div>
          </div>

          <div>
            <AbletonNewsletterForm />
            <AbletonFooterInfo />
            <AbletonEducation />
            <div className="lg:clear-both"></div>
          </div>

          <div>
            <AbletonCommunity />
            <AbletonLanguageLocation />
            <div className="lg:clear-both"></div>
          </div>

          <div>
            <div className="pb-[8.33333vw] lg:w-full lg:pb-[8.33333vw] lg:pr-0">
              <AbletonPolicy />

              <div className="mt-[8.33333vw] w-full text-left lg:float-right lg:w-auto lg:ml-[3em] lg:mt-[1rem]">
                <span className="inline-block align-middle w-[45px] h-[21px] lg:float-right">
                  {LOGO_ABLETON}
                </span>
                <span className="inline-block align-middle ml-[1em] text-xs font-semibold lg:float-left lg:mr-[1em]">
                  Made in Berlin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
