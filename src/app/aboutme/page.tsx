import Link from "next/link";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";

export default function aboutme() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="order-first col-span-3 ">
            <Hero></Hero>
          </div>
          <div className="">
            <Sidebar animate={"a"}></Sidebar>
          </div>
          <div className="col-span-2">
            <div className="grid grid-rows-2 gap-4">
              <div>
                <Text></Text>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Education></Education>
                </div>
                <div>
                  <Skills></Skills>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AspectRatio>
      <div className="absolute right-[40px] bottom-[10px]">
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
    <>
      <div>
        <h2 className="text-2xl">Hello my name is Ilias Ihadian</h2>
        <p className="pt-8 pr-8">
          I am a passionate software developer with a strong background in
          programming and algorithm development. I have experience in web
          development using JavaScript and Node.js, and I’ve implemented
          advanced algorithms like KNN Matting and Closed-Form Matting in
          Python. My technical skills were honed through team projects, such as
          developing an exam registration website, and an internship at Bechtle,
          where I gained insights into the IT industry. I also participate in
          coding competitions to challenge myself and improve under pressure.
          Outside of tech, I volunteer as a homework tutor, enhancing my
          communication skills and commitment to community service.
        </p>
      </div>
    </>
  );
}
function Education() {
  return (
    <>
      <div>
        <h2 className="text-2xl underline ">Education</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="py-8">
            <p className="text-slate-500"> 08/2017 - 05/2020</p>
          </div>
          <div className="py-8">
            <p className="font-bold">ABITUR:</p>
            <p className="">Schloß-Gymnasium</p>
          </div>
          <div className="py-8">
            <p className="text-slate-500"> 10/2020 - 9/2024</p>
          </div>
          <div className="py-8">
            <p className="font-bold">BACHELOR OF SCIENCE: </p>
            <p className="">Heinrich-Heine Univeristät</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div>
        <h2 className="text-2xl underline">Skills</h2>
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="">
            <p className=""> Python</p>
          </div>
          <div className="">
            <p className="font-bold grayscale">🙂</p>
          </div>
          <div className="">
            <p className=""> Java</p>
          </div>
          <div className="">
            <p className="font-bold grayscale">🙂</p>
          </div>
          <div className="">
            <p className=""> Javascript</p>
          </div>
          <div className="">
            <p className="font-bold grayscale">🙂</p>
          </div>
          <div className="">
            <p className=""> Next.js</p>
          </div>
          <div className="">
            <p className="font-bold grayscale">😐</p>
          </div>
          <div className="">
            <p className=""> SQL</p>
          </div>
          <div className="">
            <p className="font-bold grayscale">🙂</p>
          </div>
        </div>
      </div>
    </>
  );
}
