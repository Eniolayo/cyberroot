import Head from "next/head";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Icon } from "@iconify/react";
import Button from "@components/ui/button";
import ctl from "@netlify/classnames-template-literals";
import ReactSimplyCarousel from "react-simply-carousel";
import React from "react";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

function Header() {
  return (
    <header className="fixed top-0 z-30 max-w-[1600px] right-[5%] left-[5%] py-6 ">
      <div className="flex items-center justify-between ">
        <Image
          src="/CyberRoot Logo.png"
          alt="cyberroot Icon"
          width={200}
          height={49}
          style={{ cursor: "pointer" }}
        />
        <ul className="flex items-center w-[26%] justify-between text-primary-white">
          <li className="flex items-center cursor-pointer gap-1">
            <span>Services</span>
            <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
          </li>
          <li className="flex items-center cursor-pointer gap-1 ">
            <span>Events</span>
            <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
          </li>
          <li className="cursor-pointer ">Blog</li>
        </ul>
        <Button styles={ContactUsStyles}>Contact Us</Button>
      </div>
    </header>
  );
}
export default function Home() {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  return (
    <>
      <Head>
        <title>Cyberroot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-[url('/markus.jpg')] clippy-dent bg-cover h-[100vh] grid items-center relative  justify-center">
          <span className="h-[100vh] w-[100vw] bg-black bg-opacity-60 absolute" />
          {/* <div className="w-[90%] mx-auto"> */}
          <Header />
          <div className="text-center py-5 relative z-50 text-primary-white">
            <h2 className={mainSectionTextStyle}>
              Leading the charge against cyber threats
            </h2>
            <p className="w-[566px] mx-auto font-medium text-xl mt-6">
              Protect your digital assets from cyber criminals with our
              cutting-edge cybersecurity solutions.{" "}
            </p>
            <Button styles={GetInTouchStyles}>Get In Touch</Button>
          </div>
          {/* <Image src="/markus.jpg" alt="markus img" width={550} height={620} /> */}
        </div>
        <div></div>
      </main>
    </>
  );
}
const mainSectionTextStyle = ctl(`
  text-5xl
  font-black
  max-w-[730px]
  leading-l
  mx-auto
`);
const ContactUsStyles = ctl(`
  py-3
  px-9
  font-medium
  rounded-xl
`);
const GetInTouchStyles = ctl(`
  py-3
  px-9
  font-medium
  rounded-xl
  mt-12
`);
