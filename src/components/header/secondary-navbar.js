/** @format */
import Link from "next/link";

export default function AbletonSecondaryNavbar(props) {
  const { router, SECONDARY_NAVBAR_ITEMS_RIGHT } = props;

  return (
    <nav
      id="secondary-navbar"
      className="sticky top-0 bg-white bg-opacity-80 max-w-[1600px] w-full m-auto z-40"
    >
      {/*overflow-x-auto overflow-y-hidden whitespace-nowrap transition-transform duration-[250ms] ease-in-out translate-y-0 -translate-x-2/4 left-2/4 */}
      <ul className="flex pr-[2rem] pl-[1.25rem] py-[1.25rem] relative xl:px-[2.5rem]">
        {SECONDARY_NAVBAR_ITEMS_RIGHT.map((item, index) => {
          let isActive = router.pathname === item.url || false;

          return (
            <Link
              key={index}
              href={item.url}
              className={`px-[0.625rem] mx-0 first:pl-0 ${
                isActive ? "text-coral" : "text-black"
              } text-[13px] font-semibold xl:mx-[0.3125rem] xl:text-[15px] xl:font-semibold xl:first:ml-0`}
            >
              <li>{item.text}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
