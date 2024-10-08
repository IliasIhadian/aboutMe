"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import { useMediaQuery } from "react-responsive";
import Navbar from "@/components/navbar";

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

export default function projects() {
  return (
    <main className="rounded p-8">
      <div className="rounded-md border-2 border-black">
        <Desktop>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="order-first col-span-3 ">
              <Hero></Hero>
            </div>
            <div className="">
              <Sidebar animate={"p"}></Sidebar>
            </div>
            <div className="col-span-2">
              <Cards></Cards>
            </div>
          </div>
        </Desktop>
        <TabletAndBelow>
          <Hero></Hero>

          <Navbar animate={"p"}></Navbar>

          <CardsTabletAndBelow></CardsTabletAndBelow>
        </TabletAndBelow>
      </div>

      <div className="absolute right-[40px] ">
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

function Cards() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-8 items-stretch">
        <div className="h-full ">
          <Card>
            <CardHeader>
              <CardTitle>Realitycheckjournal</CardTitle>
              <CardDescription className="text-green-500">
                NEW & HOT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                I build a redesign based on the{" "}
                <span>
                  <a href="https://realitycheckjournal.com">
                    realitycheckjournal.com
                  </a>
                </span>
                . I kept an minimalistic and simple style.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://realitycheckjournal.vercel.app"
                passHref={true}
              >
                <Button className="bg-green-500">realitycheckjournal</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>YEUTHEWORLD</CardTitle>
              <CardDescription className="text-green-500">
                NEW & HOT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                I build a redesign based on the{" "}
                <span>
                  <a href="https://yeutheworld.com">yeutheworld.com</a>
                </span>
                . I tried to keep a futuristic style.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://yeu-rose.vercel.app" passHref={true}>
                <Button className="bg-green-500">YEUTHEWORLD</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>REM</CardTitle>
              <CardDescription className="text-green-500">
                NEW & HOT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Based on CFM I build a website which cuts out the foreground of
                an image based on the image itself and its Trimap.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="https://rem.ihadian.com" passHref={true}>
                <Button className="bg-green-500">REM</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>Bachelorthesis</CardTitle>
              <CardDescription>My bachelorthesis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Implemented an alpha matting algorithm called the Local and
                Nonlocal Color Line Model, making it accessible for public use.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://github.com/IliasIhadian/Bachelorthesis/"
                passHref={true}
              >
                <Button>Thesis</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="h-full ">
          <Card>
            <CardHeader>
              <CardTitle>Travellist</CardTitle>
              <CardDescription>
                A packinglist for your next travel!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Implementation of an travellist with React, Node.js and
                Javascript
              </p>
            </CardContent>
            <CardFooter className="flex mb-0 place-self-stretch">
              <Link href="https://project.ihadian.com/" passHref={true}>
                <Button>Travellist</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="h-full">
          <Card>
            <CardHeader>
              <CardTitle>Codeforces Tournaments</CardTitle>
              <CardDescription>Programming Contests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Partaking in programming tournaments</p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://github.com/IliasIhadian/CodeForces/"
                passHref={true}
              >
                <Button>Codeforce-Submissions</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Alpha-matting Algorithms</CardTitle>
              <CardDescription>KNN-Matting & CF-Matting</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Implemented K-Nearest-Neighbor-matting and Closed-Form-matting.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href="https://github.com/IliasIhadian/KNN-Matting"
                passHref={true}
              >
                <Button>KNNM</Button>
              </Link>
              <Link
                href="https://github.com/IliasIhadian/Closed-Form-Matting"
                passHref={true}
              >
                <Button>CFM</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="">
            <CardHeader>
              <CardTitle>University Project</CardTitle>
              <CardDescription>An Web-application</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Collaboratively developed a web application for vacation
                registration as part of a team..
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://github.com/IliasIhadian/pra-b49"
                passHref={true}
              >
                <Button>University project</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

function CardsTabletAndBelow() {
  return (
    <div className="grid p-4">
      <div className="p-4 ">
        <Card>
          <CardHeader>
            <CardTitle>Realitycheckjournal</CardTitle>
            <CardDescription className="text-green-500">
              NEW & HOT
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              I build a redesign based on the{" "}
              <span>
                <a href="https://realitycheckjournal.com">
                  realitycheckjournal.com
                </a>
              </span>
              . I kept an minimalistic and simple style.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://realitycheckjournal.vercel.app" passHref={true}>
              <Button className="bg-green-500">realitycheckjournal</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>YEUTHEWORLD</CardTitle>
            <CardDescription className="text-green-500">
              NEW & HOT
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              I build a redesign based on the{" "}
              <span>
                <a href="https://yeutheworld.com">yeutheworld.com</a>
              </span>
              . I tried to keep a futuristic style.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://yeu-rose.vercel.app" passHref={true}>
              <Button className="bg-green-500">YEUTHEWORLD</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle>REM</CardTitle>
            <CardDescription className="text-green-500">
              NEW & HOT
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Based on CFM I build a website which cuts out the foreground of an
              image based on the image itself and its Trimap.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://rem.ihadian.com" passHref={true}>
              <Button className="bg-green-500">REM</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className=" p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>Bachelorthesis</CardTitle>
            <CardDescription>My bachelorthesis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Implemented an alpha matting algorithm called the Local and
              Nonlocal Color Line Model, making it accessible for public use.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Link
              href="https://github.com/IliasIhadian/Bachelorthesis/"
              passHref={true}
            >
              <Button>my thesis</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>Travellist</CardTitle>
            <CardDescription>
              A packinglist for your next travel!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Implementation of an travellist with React, Node.js and Javascript
            </p>
          </CardContent>
          <CardFooter>
            <Link href="https://project.ihadian.com/" passHref={true}>
              <Button>ihadian.com</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>Codeforces Tournaments</CardTitle>
            <CardDescription>Programming Contests</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Partaking in programming tournaments</p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://github.com/IliasIhadian/CodeForces/"
              passHref={true}
            >
              <Button>codeforce submissions</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>K-Nearest-Neighbor-Matting(KNNM)</CardTitle>
            <CardDescription>An alphamatting algorithm</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Implemented K-Nearest-Neighbor.</p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://github.com/IliasIhadian/KNN-Matting"
              passHref={true}
            >
              <Button>KNNM</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>Closed-Form-Matting(CFM)</CardTitle>
            <CardDescription>An alphamatting algorithm</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Implemented Closed-Form-Matting</p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://github.com/IliasIhadian/Closed-Form-Matting"
              passHref={true}
            >
              <Button>CFM</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="p-4">
        <Card className="">
          <CardHeader>
            <CardTitle>University Project</CardTitle>
            <CardDescription>An Web-application</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Collaboratively developed a web application for vacation
              registration as part of a team..
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="https://github.com/IliasIhadian/pra-b49"
              passHref={true}
            >
              <Button>University project</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
