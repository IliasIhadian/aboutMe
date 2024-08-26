import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function projects() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
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

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div>
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
      <div className="">
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
      <div>
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
      <div>
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
      <div>
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
  );
}
