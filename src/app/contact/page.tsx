"use client";
import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: "(min-width: 1280px)" });

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: "(max-width: 1279px)" });

const Desktop = ({ children }: { children: any }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

const TabletAndBelow = ({ children }: { children: any }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

export default function contact() {
  return (
    <main className="rounded p-8">
      <div className="	rounded-md border-2 border-black">
        <Desktop>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="order-first col-span-3 ">
              <Hero></Hero>
            </div>
            <div className="">
              <Sidebar animate={"c"}></Sidebar>
            </div>
            <div className="col-span-2">
              <Text></Text>
            </div>
          </div>
        </Desktop>
        <TabletAndBelow>
          <div className="grid ">
            <div className="order-first">
              <Hero></Hero>
            </div>
            <div>
              <Sidebar animate={"c"}></Sidebar>
            </div>
            <div>
              <Text></Text>
            </div>
          </div>
        </TabletAndBelow>
      </div>
      <div className="absolute right-[40px]">
        <Image
          src="/signing.png"
          alt={"alt"}
          width="50"
          height="50"
          className="rotate90"
        ></Image>
      </div>
    </main>
  );
}

function Text() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 p-8">
      <div>
        <h2 className="text-3xl pb-8">Let's get in touch.</h2>
        <p className="text-2xl underline">i.ihadian@gmail.com</p>
      </div>
      <div className="grid grid-rows-subgrid gap-4 row-span-2">
        <p className=" pt-11">Socials</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Link
              href="https://www.linkedin.com/in/ilias-ihadian-b00a10177/"
              passHref={true}
            >
              <Button>LinkedIn</Button>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/IliasIhadian" passHref={true}>
              <Button>GitHub</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
