/** @format */

export default function AbletonLanguageLocation() {
  const FOOTER_LANGUAGE = [
    { code: "en", text: "English" },
    { code: "de", text: "Deutsch" },
    { code: "fr", text: "Français" },
    { code: "ja", text: "日本語" },
    { code: "zh-cn", text: "简体中文" },
    { code: "es", text: "Español" },
  ];

  const FOOTER_LOCATION = [
    { code: "us", text: "United State" },
    { code: "uk", text: "United Kingdom" },
    { code: "fr", text: "France" },
    { code: "de", text: "Germany" },
    { code: "ca", text: "Canada" },
    { code: "jp", text: "Japan" },
    { code: "cn", text: "China" },
    { code: "au", text: "Australia" },
  ];

  return (
    <div className="pb-[8.33333vw] text-app01_sm md:pb-[4.16667vw] lg:pr-[0.625rem] lg:w-[40%] lg:float-left lg:text-app01_base">
      <h3 className="font-semibold">Language and Location</h3>

      <div className="mt-[0.75em]">
        <div className="inline-block mr-[2px] max-w-[200px]">
          <div className="inline-block relative max-w-none w-auto">
            <form>
              <select className="inline-block text-app01_xs font-semibold w-full h-[1.875rem] m-0 pr-[50px] pl-[0.75em] py-[0.35em] bg-app01_paleGray border-0 cursor-pointer text-black">
                {FOOTER_LANGUAGE.map((item, index) => (
                  <option key={index} value={item.code}>
                    {item.text}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>

        <div className="inline-block mr-[2px] max-w-[200px]">
          <div className="inline-block relative max-w-none w-auto">
            <form>
              <select className="inline-block text-app01_xs font-semibold w-full h-[1.875rem] m-0 pr-[50px] pl-[0.75em] py-[0.35em] bg-app01_paleGray border-0 cursor-pointer text-black">
                {FOOTER_LOCATION.map((item, index) => (
                  <option key={index} value={item.code}>
                    {item.text}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
