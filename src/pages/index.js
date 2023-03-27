import Head from "next/head";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Icon } from "@iconify/react";
import Button from "@components/ui/button";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

function Header({ changeBg }) {
  return (
    <header
      className={`fixed top-0 z-[150]  mx-auto w-full py-4 ${
        changeBg ? "bg-[#000109]" : "bg-transparent"
      } transition-all`}
    >
      <div className="flex items-center justify-between max-w-[1500px] w-[90%] mx-auto">
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
function AboutUs() {
  return (
    <div className="flex w-[90%] mx-auto my-5 py-9 gap-10 items-center justify-between">
      <div className="w-[45%] h-[280px] relative">
        <Image src="/markus.jpg" alt="markus" fill objectFit="cover" />
      </div>
      <div className="w-[45%] grid gap-7">
        <h4 className="text-2xl font-medium tracking-m">About Us</h4>
        <p className="font-bold text-4xl">
          A leading company in the{" "}
          <span className="text-primary-blue">
            provision of cyber security services
          </span>
          .
        </p>
        <p className="leading-7">
          CyberRoot International Ltd is a cyber security consulting and IT
          firms in Nigeria specializes in Information and intelligence
          gathering, managed cyber security services, strategic IT consulting,
          cyber awareness training provider, and secure product and services
          such as clients’ devices and systems against all kinds of malware,
          including zero-hour malware, spyware, and ransomware.
        </p>
      </div>
    </div>
  );
}
function WhyChooseUs() {
  return (
    <div className="flex w-[90%] flex-row-reverse mx-auto my-5 py-9 gap-10 items-center justify-between">
      <div className="w-[45%] h-[280px] relative">
        <Image src="/markus.jpg" alt="markus" fill objectFit="cover" />
      </div>
      <div className="w-[45%] grid gap-7">
        <h4 className="text-2xl font-medium tracking-m">Why Choose Us</h4>
        <p className="font-bold text-4xl">
          Expert in providing{" "}
          <span className="text-primary-blue">cyber security solutions</span>
        </p>
        <div className="grid gap-2">
          <p className="font-semibold">
            The depth of the services we offer ranges around the following.
          </p>
          {[
            "The strengths of her highly skilled and experienced personnel.",
            "Value-focused and quality professional services.",
            "Our solutions are commercial, and customer focused.",
            "Our excellence in customer service.",
            "Our deep understanding of the CYBER SECURITY AND ICT sector.",
            "The well-equipped environment to learn from.",
          ].map((item) => (
            <div className="flex items-center gap-2" key={item}>
              <Icon
                icon="material-symbols:check-circle-outline-rounded"
                width="20px"
                h="20px"
              />
              <p className="flex-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Purpose() {
  return (
    <div className="flex w-[90%] mx-auto my-5 py-9 gap-10 items-center justify-between">
      <div className="w-[45%] h-[280px] relative">
        <Image src="/markus.jpg" alt="markus" fill objectFit="cover" />
      </div>
      <div className="w-[45%] grid gap-7">
        <h4 className="text-2xl font-medium tracking-m">Purpose</h4>
        <p className="font-bold text-4xl">
          Providing cyber skills for{" "}
          <span className="text-primary-blue">a secure future</span>
        </p>
        <div className="grid gap-2">
          <p className="font-semibold">
            The depth of the services we offer ranges around the following.
          </p>
          {[
            "To provide solutions that enable clients to find, fix, stop, and ultimately solve cyber security problems across their entire enterprise and product portfolios.",
            "To make the cyber world a better and safer place via awareness, training, research, and education.",
          ].map((item) => (
            <div className="flex items-center gap-2" key={item}>
              <Icon
                icon="material-symbols:check-circle-outline-rounded"
                width="20px"
                h="20px"
              />
              <p className="flex-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function ServiceCard({ name, desc, img }) {
  return (
    <div className="w-[362px] h-[352px] mx-auto text-center border bg-primary-cloud border-primary-denim rounded-xl grid gap-5 py-8 cursor-pointer">
      <div className="w-[80px] h-[80px] relative mx-auto">
        <Image src={img} alt={name} objectFit="contain" fill />
      </div>
      <h4 className="text-2xl font-semibold">{name}</h4>
      <p className="w-[85%] mx-auto">{desc}</p>
    </div>
  );
}
function Partners() {
  return (
    <>
      <h3 className="text-center font-bold text-4xl mt-24">Partners</h3>
      <div className="flex justify-center items-center gap-36 py-10">
        <div className="w-[280px] h-[85px] relative">
          <Image
            src="/comptia_logo.png"
            alt="comptia logo"
            objectFit="contain"
            fill
          />
        </div>
        <div className="w-[200px] relative h-[70px]">
          <Image
            priority
            src="/pecb-logo.svg"
            fill
            objectFit="contain"
            alt="pecb-logo"
          />
        </div>
      </div>
    </>
  );
}
function Services() {
  return (
    <>
      <h3 className="text-center font-bold text-4xl mt-24">Services</h3>
      <p className="w-[70%] mx-auto text-center text-xl font-medium mt-6">
        Our clients receive individualized, value-based advice that is tailored
        to their particular position and environment in order to strengthen
        their security posture using a continuous improvement methodology.
      </p>
      <div className="w-[90%] mx-auto my-10 gap-7 justify-between grid grid-cols-[repeat(auto-fit,_minmax(362px,_1fr))] items-center">
        {ServicesItems.map((item) => (
          <ServiceCard
            key={item.name}
            name={item.name}
            desc={item.desc}
            img={item.image}
          />
        ))}
      </div>
    </>
  );
}
function HowWeOperate() {
  return (
    <>
      <h3 className="text-center font-bold text-4xl mt-24">How We Operate</h3>
      <AboutUs />
      <WhyChooseUs />
      <Purpose />
    </>
  );
}
function BlogAndNews() {
  return (
    <>
      <h3 className="text-center font-bold text-4xl mt-14">
        Read our Latest <span className="text-primary-blue">Blog & News</span>
      </h3>
      <div className="w-[90%] mx-auto my-10 gap-7 justify-between grid grid-cols-[repeat(auto-fit,_minmax(362px,_1fr))] items-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            className=" w-[340px] mx-auto bg-primary-cloud rounded-xl overflow-hidden"
            key={i}
          >
            <div className="w-[340px] h-[241px] relative">
              <Image
                src="/blogPost.png"
                alt="blogPost"
                fill
                objectFit="cover"
              />
            </div>
            <div className="p-5 grid gap-2">
              <h4 className="text-xl font-bold">
                The Security Risks Of Cyber Changing Package
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sit amet eros non ex vehicula porta....
              </p>
              <button className="flex items-center text-primary-blue gap-1 hover:gap-3 transition-all">
                <span>Read More</span>
                <Icon icon="material-symbols:arrow-right-alt-rounded" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
function Newsletter() {
  return (
    <div className="max-w-[887px] text-white py-12 rounded-xl bg-[#3a8fcfce] w-[90%] mx-auto text-center grid gap-3">
      <h3 className="text-3xl font-bold">Sign Up For Newsletters</h3>
      <p className="max-w-[453px] mx-auto">
        Stay up-to-date on the latest threats, trends, and best practices in
        cyber security.{" "}
      </p>
      <div className="flex w-fit mx-auto">
        <input
          type="text"
          placeholder="Enter your email address..."
          className="text-black placeholder:text-[#000000b2] py-3 px-3 rounded-tl-md rounded-bl-md"
        />
        <Button styles={SubscibeStyles}>Subscribe</Button>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="w-[90%] mx-auto my-10 flex gap-10 justify-between flex-wrap">
      <div className="grid gap-3">
        <Image
          src="/CyberRoot Logo.png"
          alt="cyberroot Icon"
          width={200}
          height={49}
          style={{ cursor: "pointer" }}
        />
        <p className="max-w-[450px] leading-7">
          CyberRoot International Ltd is a cyber security consulting and IT
          firms in Nigeria specializes in Information and intelligence
          gathering, managed cyber security services, strategic IT consulting
          and cyber awareness training provider.
        </p>
        <div className="flex gap-3">
          {[
            "ic:round-facebook",
            "fe:twitter",
            "ic:sharp-whatsapp",
            "ph:instagram-logo",
            "carbon:logo-youtube",
          ].map((item) => (
            <Icon
              key={item}
              icon={item}
              width="32px"
              className="cursor-pointer hover:scale-110 transition-all"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-rows-[1fr_,3fr] min-w-[124px] max-w-[160px]">
        <h5 className="text-xl font-bold self-center">Quick Links</h5>
        <ul>
          {["About Us", "Services", "Contact Us", "FAQ"].map((item) => (
            <li
              className="mt-2 cursor-pointer hover:text-primary-blue"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-rows-[1fr_,3fr] max-w-[309px] min-[250px]">
        <h5 className="text-xl font-bold self-center">Get In Touch</h5>
        <ul>
          <li className="flex gap-2 items-center mt-2 cursor-pointer">
            <Icon icon="material-symbols:location-on-outline" width="30px" />
            <span>Adamolekun Estate Old Take Away, Adebayo, Ado-Ekiti. </span>
          </li>
          <li className="flex gap-2 items-center mt-1 cursor-pointer">
            <Icon icon="material-symbols:call-outline-sharp" width="20px" />
            <a href="callto:+2348144106279">+(234)8144106279</a>
          </li>
          <li className="flex gap-2 items-center mt-1 cursor-pointer">
            <Icon icon="material-symbols:mail-outline-rounded" width="25px" />
            <p>
              <a
                href="mailto:info@cyberootltd.com?subject=Mail from Website"
                className="block"
              >
                info@cyberootltd.com,
              </a>
              <a
                href="mailto:cyberrootltd@hotmail.com?subject=Mail from Website"
                className="block"
              >
                cyberrootltd@hotmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div className="grid content-start grid-rows-[1fr_,3fr] min-w-[131px] max-w-[160px]">
        <h5 className="text-xl font-bold self-center">More</h5>
        <ul>
          {["Privacy policy", "Terms Of Sources"].map((item) => (
            <li
              key={item}
              className="mt-2 cursor-pointer hover:text-primary-blue"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function IntroContent() {
  return (
    <div className="bg-[url('/markus.jpg')] bg-gray-800 clippy-dent bg-cover h-[100vh] grid items-center   justify-center">
      <span className="h-[100vh] w-[100vw] bg-black bg-opacity-60 absolute" />
      <div className="text-center py-5 relative z-50 text-primary-white">
        <h2 className={mainSectionTextStyle}>
          Leading the charge against cyber threats
        </h2>
        <p className="w-[566px] mx-auto font-medium text-xl mt-6">
          Protect your digital assets from cyber criminals with our cutting-edge
          cybersecurity solutions.{" "}
        </p>
        <Button styles={GetInTouchStyles}>Get In Touch</Button>
      </div>
    </div>
  );
}
export default function Home() {
  const [changeBg, setChangeBg] = React.useState(false);
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  });

  return (
    <>
      <Head>
        <title>Cyberroot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <Header changeBg={changeBg} />
        <IntroContent />
        <div className="max-w-[1600px] mx-auto">
          <HowWeOperate />
          <Services />
          <Partners />
          <BlogAndNews />
          <Newsletter />
          <Footer />
        </div>
      </main>
    </>
  );
}
const ServicesItems = [
  {
    name: "Penetration Testing",
    desc: "Our company provides professional penetration testing services to guarantee security and get protection against potential cyber attacks.",
    image: "/pen-testing.png",
  },
  {
    name: "Vulnerability Assessment",
    desc: "We offer comprehensive vulnerability assessment services to help identify potential weaknesses in your organization's IT infrastructure.",
    image: "/vuneralibilty-assessement.png",
  },
  {
    name: "Web Development Training",
    desc: "We provide web development training programs designed to equip individuals with the necessary skills to create dynamic and responsive websites.",
    image: "/web-dev.png",
  },
  {
    name: "Ethical Hacking Training",
    desc: "We offer professional ethical hacking training programs to assist professionals in developing the skills needed to detect and resolve possible cybersecurity risks and vulnerabilities.",
    image: "/hacking-icon-5 1.png",
  },
  {
    name: "Cyber Security awareness training",
    desc: "We provide comprehensive cyber security awareness training for individuals and organizations to help prevent cyber attacks and safeguard sensitive data.",
    image: "/training_icon.png",
  },
  {
    name: "Cyber Security Consultancy",
    desc: "Our company offers expert cyber security consultancy services to help organizations assess, plan, and implement robust security strategies to protect against cyber threats.",
    image: "/cyber-security-consult.png",
  },
];
const mainSectionTextStyle = ctl(`
  text-5xl
  font-black
  max-w-[730px]
  leading-l
  mx-auto
`);
const ContactUsStyles = ctl(`
  py-2
  px-8
  font-medium
  rounded-xl
`);
const GetInTouchStyles = ctl(`
  py-4
  px-16
  font-medium
  rounded-xl
  mt-12
`);
const SubscibeStyles = ctl(`
  py-4
  px-16
  font-medium
  rounded-tr-[10px]
  rounded-br-[10px]
`);
