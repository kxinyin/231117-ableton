/** @format */
import Link from "next/link";

export default function AbletonMoreContent(props) {
  const { showMore, router, MORE_SECTION_ONE, MORE_SECTION_TWO } = props;

  return (
    <div
      className={`lg:${
        showMore ? "flex" : "hidden"
      } lg:pt-[0.625rem] lg:pb-[1.875rem] lg:px-[1.25rem] lg:flex-col xl:pt-[1.6875rem] xl:pb-[3.4375rem] xl:px-[2.5rem]`}
    >
      <section className="pt-[0.625rem] lg:pt-0">
        <h3 className="font-semibold pb-[0.625rem] lg:text-[22px] lg:pb-[0.125rem] xl:text-lg xl:font-semibold xl:pb-[0.3em]">
          {MORE_SECTION_ONE.title}
        </h3>
        <ul className="lg:flex lg:items-center">
          {MORE_SECTION_ONE.items.map((item, index) => {
            let isActive = router.pathname === item.url || false;

            return (
              <li
                key={index}
                className={`mb-[1em] pr-[0.625rem] text-[13px] ${
                  isActive && "text-coral"
                } font-normal lg:text-sm lg:mb-0 lg:px-[0.625rem] lg:first:pl-0 lg:first:ml-0 xl:text-base xl:mr-[0.3125rem] xl:ml-[0.625rem]`}
              >
                <Link href={item.url}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="pt-[0.625rem] lg:pt-[1.5625rem] xl:pt-[2.625rem]">
        <h3 className="pb-[0.625rem] font-semibold lg:text-[22px] lg:pb-[0.125rem] xl:text-lg xl:font-semibold xl:pb-[0.3em]">
          {MORE_SECTION_TWO.title}
        </h3>

        <div className="overflow-x-auto pb-[1.25rem] lg:overflow-x-hidden lg:pb-0">
          <ul className="flex -mx-[0.625rem] lg:items-center lg:-mx-[1.25rem]">
            {MORE_SECTION_TWO.items.map((item, index) => (
              <li
                key={index}
                className="list-item px-[0.625rem] min-w-[15em] text-sm 
                lg:mx-0 lg:px-[1.25rem] lg:min-w-[25%] xl:text-base"
              >
                <Link href={item.url}>
                  <div>
                    <h4 className="font-normal lg:font-semibold">
                      {item.title}
                    </h4>
                    <p>{item.content}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
