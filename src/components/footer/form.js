/** @format */

export default function AbletonNewsletterForm() {
  return (
    <div className="pb-[8.33333vw] pr-0 md:pb-[4.16667vw] lg:w-[40%] lg:float-right">
      <label className="text-app01_sm lg:text-app01_base">
        <span className="block font-semibold">Sign up to our newsletter</span>
        <span>
          Enter your email address to stay up to date with the latest offers,
          tutorials, downloads, surveys and more.
        </span>
      </label>
      <div>
        <form className="block mt-[1em]">
          <div className="flex">
            <div className="grow">
              <input
                id="newsletter"
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full m-0 px-[0.75em] py-[0.4em] bg-[#eee] border-0 text-app01_sm lg:text-app01_base"
              />
            </div>
            <input
              type="button"
              value="Sign Up"
              className="inline-block m-0 px-[1.5em] py-[0.35em] text-app01_sm font-semibold text-white bg-app01_blue cursor-pointer lg:text-app01_base"
            />
          </div>
        </form>
      </div>
    </div>
  );
}