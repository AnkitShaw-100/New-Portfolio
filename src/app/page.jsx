import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GrayTitle, GoldTitle, SectionLabel } from "@/components/Reusables";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden">
        <StarsBackgroundDemo />

      <div className="colc-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
        <Badge variant="gold">
          Powered by AI - Now in Beta
        </Badge>
      </div>

        {/* <GrayTitle>Welcome to Zentrix</GrayTitle>
        <GoldTitle>W</GoldTitle>
        <SectionLabel></SectionLabel> */}
      </section>
    </div>
  );
}
