/** @format */

import Link from "next/link";
import AbletonMainHeader from "./header-image";
import AbletonMainCollage1 from "./collage-1";
import AbletonMainMedia1 from "./media-1";
import AbletonMainCollage2 from "./collage-2";
import AbletonMainMedia2 from "./media-2";
import AbletonMainCollage3 from "./collage-3";
import AbletonMainJobsTeasers from "./jobs-teaser";

function AbletonMainText({ p1, p2 }) {
  return (
    <div className="mb-[8.33333vw] mx-[8.33333vw] md:w-[66.66667vw] md:mx-auto xl:w-[50vw] min-[1600px]:w-[800px]">
      <h1 className="mb-[1rem] text-base font-semibold min-[1124px]:text-lg min-[1124px]:font-semibold">
        {p1}
      </h1>

      <div className="text-sm min-[1124px]:text-base">{p2}</div>
    </div>
  );
}

export default function AbletonMain() {
  return (
    <div className="bg-white max-w-[1600px] h-full m-auto z-35">
      <AbletonMainHeader />

      {AbletonMainText({
        p1: (
          <>
            We make{" "}
            <Link href="#live" className="text-blue">
              Live
            </Link>
            ,{" "}
            <Link href="#push" className="text-blue">
              Push
            </Link>{" "}
            and{" "}
            <Link href="#link" className="text-blue">
              Link
            </Link>{" "}
            — unique software and hardware for music creation and performance.
            With these products, our community of users creates amazing things.
          </>
        ),
        p2: (
          <p>
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        ),
      })}

      <AbletonMainCollage1 />

      {AbletonMainText({
        p1: (
          <>
            Making music isn’t easy. It takes time, effort, and learning. But
            when you’re in the flow, it’s incredibly rewarding.
          </>
        ),
        p2: (
          <p>
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our passion for what we make, and the people
            we make it for.
          </p>
        ),
      })}

      <AbletonMainMedia1 />

      {AbletonMainText({
        p1: (
          <>
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </>
        ),
        p2: (
          <p>
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        ),
      })}

      <AbletonMainCollage2 />

      {AbletonMainText({
        p1: (
          <>
            We believe it takes focus to create truly outstanding instruments.
            We only work on a few products and we strive to make them great.
          </>
        ),
        p2: (
          <p>
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work their magic and grow. We’ve learned
            that achieving the best results comes from building teams that are
            richly diverse, and thus able to explore problems from a wider set
            of perspectives. We don’t always agree with each other, but opinion
            and debate are valued and openly encouraged.
          </p>
        ),
      })}

      <AbletonMainMedia2 />

      {AbletonMainText({
        p1: (
          <>
            We’re passionate about what we do, but we’re equally passionate
            about improving who we are.
          </>
        ),
        p2: (
          <>
            <p className="mb-[1em]">
              We work hard to foster an environment where people can grow both
              personally and professionally, and we strive to create a wealth of
              opportunities to learn from and with each other.
            </p>

            <p>
              Alongside an internal training program, employees are actively
              supported in acquiring new knowledge and skills, and coached on
              applying these in their daily work. In addition, staff-organized
              development and music salons are a chance to discuss new
              technologies, production techniques and best practices.
            </p>
          </>
        ),
      })}

      <AbletonMainCollage3 />

      {AbletonMainText({
        p1: (
          <>
            We want our employees to love it here. Since we’re looking for
            exceptional talent from around the world, we will do everything we
            can to make your transition as easy as possible.
          </>
        ),
        p2: (
          <p>
            If you’re joining us in Berlin, we’ll help with relocation and
            paperwork. We’ll even provide you with free German or English
            lessons. Plus, working in Germany means you can expect comprehensive
            health insurance for you and your family, as well as generous
            maternity and paternity leave. Office hours are flexible, but it’s
            not all work; we have several company and team outings throughout
            the year as well as a variety of fun, informal small-group
            activities.
          </p>
        ),
      })}

      <AbletonMainJobsTeasers />
    </div>
  );
}
