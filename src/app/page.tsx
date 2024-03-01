"use client"
import Image from 'next/image';
import Banner from '../../public/Banner.jpg';
import Paper from '../../public/PaperFront-1.png';
import Universities from '../../public/University logos.svg';
import Server from '../../public/Server_Code.png';
import BackendLanguages from '../../public/Memories_Backend.svg';
import Website from '../../public/Website.png';
import WebsiteLogos from '../../public/WebsiteLogos (1).svg';
import LinkedinButton from '../../public/LinkedIn_icon.svg';
import GithubButton from '../../public/github-mark-white.svg';
import MemoriesFront from '../../public/MemoriesFront.svg';
import { Card, CardHeader, CardBody, CardFooter, NextUIProvider } from "@nextui-org/react";
import {ReactHTMLElement, useState, useEffect} from 'react';

const useIsClient = () => {
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
    setIsClient(true);
 }, []);

 return isClient;
}


function MobileWebsite(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center">
      <div className="flex w-[60vw] h-100 mt-5 flex-col items-center">
        <p className="text-white text-center"> This website is written in Typescript using the Next.js framework. It is served on an Apache server. </p>
        <Card
          className="flex flex-col justify-center items-center bg-gradient-to-b from-waterfall to-white mt-5 w-[40vh]"
        >
          <Image
            src={WebsiteLogos}
            alt="React, typescript, Next.js, and Apache logos"
            className="h-[30vh] aspect-[3/4]"
          />
        </Card>
        <div className="w-[60vw] h-[30vh] m-10 bg-website bg-cover bg-no-repeat" />
      </div>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function DesktopWebsite(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="relative w-full h-auto flex justify-center">
      <div className="flex w-[95vw] h-100 mt-10 items-center">
        <div className="w-[90vw] h-[30vh] m-10 bg-website bg-cover bg-no-repeat" />
        <div className="justify-center items-center">
          <p className="text-white"> This website is written in Typescript using the Next.js framework. It is served statically on an Apache server. </p>
          <Image
            src={WebsiteLogos}
            alt="React, typescript, Next.js, and Apache logos"
            className="h-[30vh] aspect-[3/4]"
          />
        </div>
      </div>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function WebsiteSection(): ReactHTMLElement<HTMLElement> {
  return <MobileWebsite /> as ReactHTMLElement<HTMLElement>
}

function MemoriesBackText() {

}

function MemoriesBackDesktop(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="flex justify-center items-center w-[100vw]">
      <div className="flex flex-col max-h-[80vh] justify-center items-center max-w-[100vh]">
        <p className="text-white text-center my-5"> The backend for the Memories app is a websocket server written in C++ that interfaces with a PostgreSQL database. It is deployed locally via a CI/CD pipeline that uses github actions to build and push a Docker container and deploy it with Kubernetes. As part of the Kubernetes deployment process, end-to-end tests are ran using a Javascript client running in another container.  </p>
        <div className="max-h-[80vh] w-[60vw] grid grid-cols-2 gap-10 justify-center">
          <div className="col-span-1 bg-server bg-no-repeat bg-cover" />
          <div className="col-span-1">
            <Card className="flex flex-row bg-darkGreen h-[60vh]">
              <Image
                src={BackendLanguages}
                alt="C++, SQL, and PostgreSQL logos"
                fill={true}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function MemoriesBackMobile(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="relative w-[95vw] flex flex-col justify-center items-center">
      <p className="text-white text-center my-5"> The backend for the Memories app is a websocket server written in C++ that interfaces with a PostgreSQL database. It is deployed locally via a CI/CD pipeline that uses github actions to build and push a Docker container and deploy it with Kubernetes.  </p>
      <div className="aspect-[7/8] m-10 bg-server bg-no-repeat bg-cover w-[95vw]" />
      <Card className="flex bg-darkGreen snap-start justify-center items-center">
        <Image
          src={BackendLanguages}
          alt="C++, SQL, and PostgreSQL logos"
          className="aspect-[3/4]"
        />
      </Card>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function MemoriesBack(): ReactHTMLElement<HTMLElement> {
  const isClient = useIsClient();
  const mobile = isClient && window.innerWidth < window.innerHeight;
  if (!mobile) {
    return <MemoriesBackDesktop /> as ReactHTMLElement<HTMLElement>
  } else {
    return <MemoriesBackMobile /> as ReactHTMLElement<HTMLElement>
  }
}

function DesktopMath(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="flex flex-col justify-center w-[100vw]">
      <p className="font-bold text-white text-center text-5xl my-5 snap-start scroll-mt-[10vh]"> Pure Math Research </p>
      <p className="text-white text-center">
        Mathematics research on algebraic geometry presented at 7 seminars and conferences across the US.
      </p>
      <p className="text-white text-center mb-5">
        Preprint in preparation.
      </p>
      <div className="flex justify-center">
        <div
          className="grid grid-cols-2 gap-10 h-[70vh] w-[60vw] items-center justify-center"
        >
          <div className="col-span-1 bg-white h-full box-border  flex items-center justify-center">
            <div className="h-full aspect-[12/18] bg-paper bg-contain bg-no-repeat" />
          </div >
          <div className="col-span-1 flex flex-col justify-center">
            <div className="flex h-full align-center justify-center">
              <Card className="bg-waterfall inline-block h-full w-full">
                <div className="h-[70vh] w-full">
                  <Image
                    src={Universities}
                    alt="University logos"
                    quality={100}
                    fill={true}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function MobileMath(): ReactHTMLElement<HTMLElement> {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-white text-center text-5xl my-5 snap-start scroll-mt-[10vh]"> Pure Math Research </p>
      <p className="text-white text-center">
        Mathematics research on algebraic geometry presented at 7 seminars and conferences across the US.
      </p>
      <p className="mb-5 text-white text-center">
        Preprint in preparation.
      </p>
      <div
        className="flex flex-col w-[90vw] justify-center"
      >
        <div className="mb-10 h-full box-border w-full flex justify-center">
          <div className="w-full aspect-[12/18] bg-paper bg-contain bg-no-repeat" />
        </div >
        <div className="flex w-full justify-center">
          <Card className="bg-waterfall inline-flex">
            <div className="max-w-[300px]">
              <Image
                src={Universities}
                alt="University logos"
                quality={100}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  ) as ReactHTMLElement<HTMLElement>;
}

function MemoriesBody() {
  return (<MemoriesDesktop/>);
}

function Memories() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-white text-center text-5xl my-5 snap-start scroll-mt-[10vh]"> Memories App </p>
      <div className="w-[70vw] max-w-[100vh]">
        <p className="text-white text-center mb-5">
          I have been developing a mobile app called Memories using React Native. The mission of the app is to help you connect with the important people in your life. Here&apos;s a video showcasing profile pictures, friend requests, and the coupon book feature: 
        </p>
      </div>
      <MemoriesBody />
    </div>
  );

}

function Equivariance() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-white text-center text-5xl my-5 snap-start scroll-mt-[10vh]"> Equivariant Machine Learning </p>
      <div className="flex flex-col justify-center items-center w-[70vw] max-w-[100vh]">
        <p className="text-white text-center mb-5">
          I have been researching a method to train machine learning models to be more equivariant. The video below goes into what this means, and gives a demonstration of the difference that it makes to apply my method to a machine learning model.
          The method has been implemented as a pip package and you can see its code and documentation at my <a href='https://www.github.com/jjkjjk23/Equivariance-Regularizer'> GitHub.</a>
        </p>
        <div className="flex flex-col items-center justify-center w-[95vw] mobile:w-[560px] overflow-hidden aspect-[1.78]">
          <iframe
            className="w-[95vw] mobile:w-[560px] aspect-[1.78]"
            src="https://www.youtube.com/embed/p4PM7FvxxsU?si=RYJdcZf-taJjPWkX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}


function Math() {
  const isClient = useIsClient();
  const mobile = isClient && window.innerWidth < window.innerHeight;
  if (!mobile) {
    return <DesktopMath />;
  } else {
    return <MobileMath />;
  }
}

function MemoriesDesktop() {
  return (
  <div className="flex flex-col items-center justify-center w-[95vw] mobile:w-[560px] overflow-hidden">
    <iframe
      className="w-[95vw] mobile:w-[560px] aspect-[1.78]"
      src="https://www.youtube.com/embed/JNr8AYtq6lc?si=ckSnDPceYIDWXos5"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
    <Card
      className="flex flex-col justify-center items-center bg-gradient-to-b from-waterfall to-white mt-5 w-[95vw] mobile:w-[560px] min-h-[100px]"
    >
      <Image
        src={MemoriesFront}
        alt={'Memories app technologies used'}
        className="w-[95vw] mobile:w-[560px]"
      />
    </Card>
    </div>
  );
}

export default function Home() {
  const isClient = useIsClient();
  const mobile = isClient && window.innerWidth < window.innerHeight;
  var format;
  if (mobile) {
    format = "min-h-screen";
  } else {
    format = "h-[100vh] overflow-y-scroll snap-y snap-mandatory";
  }
  return (
    <NextUIProvider>
      <main className=
        {`flex
        w-full 
        z-0 
        overflow-x-hidden
        ${format}
        flex-col 
        justify-start 
        items-center
        p-0 
        bg-back
        bg-cover`
        }
      >
        <div
          className="sticky z-20 flex flex-row justify-between w-full aspect-[20/1]z-10 inset-x-0 top-0 bg-[rgba(0,0,0,.8)] backdrop-blur-md h-[8vh]"
        >
          <h1 className="z-10 text-3xl m-5 font-bold text-white"> Jacob Keller </h1>
          <div className="flex flex-row">
            <a href="https://www.github.com/jjkjjk23" className="h-[4vh] w-[4vh] m-[2vh] mr-0">
              <Image
                src={GithubButton}
                alt={"Github profile"}
                className="relative"
              />
            </a>
            <a href="https://www.linkedin.com/in/jacob-keller-8899b728b/" className="h-[4vh] w-[4vh] m-[2vh]">
              <Image
                src={LinkedinButton}
                alt={"Linkedin profile"}
                className="relative"
              />
            </a>
          </div>
        </div>
        <div className="min-h-[30vw] max-h-[80vh] overflow-hidden snap-start scroll-mt-[8vh]">
          <div
            className="w-[100vw] z-0 min-h-[44vw] aspect-[6000/2631] overflow-hidden bg-Banner bg-no-repeat bg-contain"
          >
          </div>
        </div>
        <div className="w-full h-100 bg-red margin">
          <p className="flex justify-center text-center text-white mx-10 mt-5 text-lg">
            Hello! I&apos;m a fifth year PhD student in the math department at UC San Diego.
          </p>
          <p className="flex justify-center text-center text-white mx-10 mb-5 text-lg">
            Scroll down to see what I&apos;ve been working on.
          </p>
        </div>
        <Memories />
        <p className="mt-10 text-5xl font-bold text-center text-white snap-start scroll-mt-[10vh]"> Memories App Backend </p>
        <MemoriesBack />
        <Equivariance />
        <Math />
        <p className="font-bold text-center text-5xl text-white mt-10 snap-start scroll-mt-[10vh]"> Teaching </p>
        <div className="relative w-full h-auto flex justify-center">
          <div className="flex flex-col max-w-[100vh] h-100 mt-5">
            <p className="text-white text-center"> I&apos;ve heen a teaching assistant since Fall 2019 leading discussion sections and office hours for courses ranging from Precalculus to Discrete Mathematics and Abstract Algebra. Here are some reviews from my students.
            </p>
            <div className="flex justify-center">
              <Card
                className="bg-waterfall/25 backdrop-blur-md  p-5 m-5 h-auto inline-flex"
              >
                <p className="text-center text-white"> Mr. Keller is incredibly accessible and responsive to email. </p>
                <p className="text-center text-white"> He works to take the feedback of
                  students into account and attempts to bring a dull subject to life through a variety of methods of
                  teaching.  </p>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="bg-waterfall/25 backdrop-blur-md m-5 mt-0 h-auto inline-flex">
                <text className="p-5 text-white text-center"> I really like that Jacob remembered everyone&apos;s names in our discussion section. I really appreciate having Jacob as our IA. </text>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="bg-waterfall/25 backdrop-blur-md m-5 mt-0 h-auto inline-flex">
                <text className="p-5 text-white text-center"> Introduces very interesting problems and is always happy to clarify hard concepts. It is clear that Jacob cares about his students.</text>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="bg-waterfall/25 backdrop-blur-md m-5 mt-0 h-auto w-auto inline-flex">
                <text className="p-5 text-white text-center"> Excellent TA!</text>
              </Card>
            </div>
            <div className="flex justify-center">
              <Card className="bg-waterfall/25 backdrop-blur-md m-5 mt-0 h-auto inline-flex">
                <text className="p-5 text-white text-center"> He is hands down one of the best math TAs in the math
                  department!</text>
              </Card>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-white text-5xl font-bold snap-start scroll-mt-[10vh]"> Personal Website</p>
        <WebsiteSection />
      </main>
    </NextUIProvider>
  )
}
