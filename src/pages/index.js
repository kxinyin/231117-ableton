/** @format */
// * Breakpoint: 1024px(lg); 1280px(xl);

import AbletonFooter from "../components/footer";
import AbletonHeader from "../components/header";
import AbletonMain from "../components/main";

export default function Ableton() {
  return (
    <>
      <header>
        <title>
          Learn more about Ableton - maker of Live and Push | Ableton
        </title>
      </header>

      <main className="bg-paleGray min-h-screen font-main">
        <AbletonHeader />
        <AbletonMain />
        <AbletonFooter />
      </main>
    </>
  );
}
