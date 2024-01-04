"use client"
import Image from 'next/image';
import Banner from '../../public/Banner.jpg';
import Paper from '../../public/PaperFront-1.png';
import Universities from '../../public/University logos.svg';
import {Card, CardHeader, CardBody, CardFooter, NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex w-full z-0 min-h-screen flex-col items-center justify-start p-0">
        <div
          className="relative w-full z-0 aspect-[6000/2631] overflow-hidden"
        >
          <Image
            alt={"Banner image of Jacob"}
            src={Banner}
            quality={100}
            className = "z-0 w-full h-full"
          />
          <div
            className="absolute flex flex-col w-full aspect-[20/1] z-10 bg-black/50 inset-x-0 top-0 justify-center text-center"
          >
              <h1 className="z-10 text-xl"> Jacob Keller </h1>
          </div>
        </div>
        <div className="w-full h-100 bg-red margin">
        <p className="flex justify-center text-center mx-10 mt-5 text-lg">
          Hello! I`&apos;`m a fifth year PhD student in the math department at UC San Diego.
        </p>
        <p className="flex justify-center text-center mx-10 mb-5 text-lg">
          Scroll down to see what I`&apos;`ve been working on.
        </p>
        </div>
        <div className="relative w-full h-auto flex justify-center">
          <Card
            className= "relative p-10 w-[95vw] h-auto bg-slate-700 flex-row content-end"
          >
            <div className="relative w-1/2 h-full flex justify-center">
              <div className="w-full h-auto flex justify-center">
                <Image 
                  src={Paper}
                  alt="Paper cover"
                  className="absolute w-full aspect-[12/18]"
                  quality={100}
                />
              </div>
            </div>
            <div className="relative w-1/2 mx-10 flex flex-col mr-0">
              <p className="mb-5 text-white"> Mathematics research on algebraic geometry presented at 7 seminars and conferences across the US. Preprint in preparation.
              </p>
              <Card className="relative w-full bg-slate-300">
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
      </main>
    </NextUIProvider>
  )
}
