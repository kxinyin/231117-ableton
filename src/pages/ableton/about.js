/** @format */
// * Breakpoint: 1024px(lg); 1280px(xl);

import AbletonFooter from "@/components/ableton/footer";
import AbletonHeader from "../../components/ableton/header";

export default function Ableton() {
  return (
    <main className="bg-app01_paleGray min-h-screen font-app01_main">
      <AbletonHeader />

      <div id="page" className="h-[2000px]"></div>

      <AbletonFooter />
    </main>
  );
}
