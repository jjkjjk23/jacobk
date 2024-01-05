"use client"
import Image from 'next/image';
import Banner from '../../public/Banner.jpg';
import Paper from '../../public/PaperFront-1.png';
import Universities from '../../public/University logos.svg';
import Server from '../../public/ServerCode.png';
import BackendLanguages from '../../public/Backend.svg';
import Website from '../../public/Website.png';
import WebsiteLogos from '../../public/WebsiteLogos (1).svg';
import {Card, CardHeader, CardBody, CardFooter, NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className=
        {`flex
        w-full 
        z-0 
        min-h-screen 
        flex-col 
        items-center 
        justify-start 
        p-0 
        bg-back
        bg-cover`}
      >
        <div
          className="flex flex-col w-full aspect-[20/1] z-10 inset-x-0 top-0 justify-center text-center"
        >
            <h1 className="z-10 text-5xl m-5 font-bold"> Jacob Keller </h1>
        </div>
        <div
          className="relative w-full z-0 aspect-[6000/2631] overflow-hidden"
        >
          <Image
            alt={"Banner image of Jacob"}
            src={Banner}
            quality={100}
            className = "z-0 w-full h-full"
          />
        </div>
        <div className="w-full h-100 bg-red margin">
        <p className="flex justify-center text-center mx-10 mt-5 text-lg">
          Hello! I&apos;m a fifth year PhD student in the math department at UC San Diego.
        </p>
        <p className="flex justify-center text-center mx-10 mb-5 text-lg">
          Scroll down to see what I&apos;ve been working on.
        </p>
        </div>
        <p className="font-bold text-white text-5xl my-10"> Pure Math Research </p>
        <div className="relative w-full h-auto flex justify-center">
          <Card
            className= "relative p-10 w-[95vw] h-auto bg-gradient-to-tl from-rocky to-darkerRock flex-row content-end"
          >
            <div className="relative w-1/2 h-full flex items-center">
              <div className="w-full h-auto flex justify-center">
                <Image 
                  src={Paper}
                  alt="Paper cover"
                  className="w-full aspect-[12/18]"
                  quality={100}
                />
              </div>
            </div>
            <div className="relative w-1/2 mx-10 flex flex-col mr-0">
              <p className="mb-5 text-white">
              Mathematics research on algebraic geometry presented at 7 seminars and conferences across the US.
              Preprint in preparation.
              </p>
              <Card className="relative w-full bg-waterfall">
                <Image
                  src={Universities}
                  alt="University logos"
                  className="w-full h-full"
                  quality={100}
                />
              </Card>
            </div>
          </Card>
        </div>
        <p className="mt-10 text-5xl font-bold"> Memories App Backend </p> 
        <div className="relative w-full h-auto flex justify-center">
          <Card className="flex flex-row bg-darkGreen w-[95vw] h-100 mt-10">
            <Image 
              src={Server}
              alt="Snippet of server code"
              className="w-1/2 aspect-[7/8] m-10"
            />
            <div className="m-10 ml-0">
              <p className="text-white"> The backend for the Memories app is a websocket server written in C++ that interfaces with a PostgreSQL database. </p>
              <Image
                src = {BackendLanguages}
                alt = "C++, SQL, and PostgreSQL logos"
                className = "w-full aspect-[3/4]"
              />
            </div>
          </Card>
        </div>
        <p className="font-bold text-5xl text-white mt-10"> Teaching </p>
        <div className="relative w-full h-auto flex justify-center">
          <Card className="flex flex-col bg-darkBlueGreen w-[95vw] h-100 mt-10">
            <p className="text-white m-10"> I&apos;ve been a teaching assistant since Fall 2019 leading discussion sections and office hours for courses ranging from Precalculus to Discrete Mathematics and Abstract Algebra. Here are some reviews from my students.
            </p>
            <div className="flex flex-row items-center">
              <div>
                <Card 
                  className=" bg-waterfall m-10 mt-0 h-auto"
                >
                  <text className="p-5"> Mr. Keller is incredibly accessible and responsive to email. He works to take the feedback of
    students into account and attempts to bring a dull subject to life through a variety of methods of
    teaching. </text>
                </Card>
              </div>
              <div>
                <Card className="bg-waterfall m-10 mt-0 h-auto">
                  <text className="p-5"> I really like that Jacob remembered everyone&apos;s names in our discussion section. He also took
    the time to talk to each student a little bit about the problem we were working on and talk to
    each of us about what we understood or were confused with. It made me feel more welcomed
    and involved in the section and its just a small thing that makes you feel more cared about. I
    also thought his discussion sections were helpful for homework and the course in general. I
    really appreciate having Jacob as our IA. </text>
                </Card>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <Card className="bg-waterfall m-10 mt-0 h-auto">
                  <text className="p-5"> Fosters a very friendly and open environment during discussion that is friendly to any questions
  regarding homework, tests, or topics beyond coursework. Always helps us prepare for future
  lecture and homeworks. Introduces very interesting problems and is always happy to clarify
  hard concepts. It is clear that Jacob cares about his students.</text>
                </Card>
              </div>
              <div>
                <Card className="bg-waterfall m-10 mt-0 h-auto">
                  <text className="p-5"> Excellent TA!</text>
                </Card>
              </div>
              <div>
                <Card className="bg-waterfall m-10 mt-0 h-auto">
                  <text className="p-5"> Also, I appreciate how patient he is when explaining
the material and how he explains the materials in a way that doesn&apos;t make students feel dumb.
Overall, the complex world is difficult to understand, but I appreciate how Jacob made it a little
easier for me to understand. He is hands down one of the best math TAs in the math
department!</text>
                </Card>
              </div>
            </div>
          </Card>
        </div>
        <p className="mt-10 text-5xl font-bold"> Personal Website</p> 
        <div className="relative w-full h-auto flex justify-center">
          <Card className="flex flex-row bg-darkGreen w-[95vw] h-100 mt-10">
            <Image 
              src={Website}
              alt="Snippet of server code"
              className="w-1/2 aspect-[7/8] m-10"
            />
            <div className="m-10 ml-0">
              <p className="text-white"> This website is written in Typescript using the Next.js framework. It is served statically on an Apache server. </p>
              <Image
                src = {WebsiteLogos}
                alt = "C++, SQL, and PostgreSQL logos"
                className = "w-full aspect-[3/4]"
              />
            </div>
          </Card>
        </div>
      </main>
    </NextUIProvider>
  )
}
