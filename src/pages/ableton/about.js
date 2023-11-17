/** @format */
// * Breakpoint: 1024px(lg); 1280px(xl);

import AbletonFooter from "../../components/ableton/footer";
import AbletonHeader from "../../components/ableton/header";
import AbletonMain from "../../components/ableton/main";

export default function Ableton() {
  return (
    <>
      <header>
        <title>
          Learn more about Ableton - maker of Live and Push | Ableton
        </title>
      </header>

      <main className="bg-app01_paleGray min-h-screen font-app01_main">
        <AbletonHeader />
        <AbletonMain />
        <AbletonFooter />
      </main>
    </>
  );
}
