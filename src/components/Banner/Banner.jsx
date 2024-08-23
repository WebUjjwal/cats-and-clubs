"use client";
import { useGSAP } from "@gsap/react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const headTittle = useRef();

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine.to(".banner_main", {
      backgroundColor: "#070707b0",
      backdropFilter: "blur(1px)",
      duration: 2.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".banner_overlay",
        pin: ".banner_overlay",
        scrub: 1,
        start: "top top",
      },
    });

    timeLine.to(headTittle.current, {
      scale: 3,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: headTittle.current,
        scrub: 1,
        start: "10% top",
        end: "bottom bottom",
        pin: headTittle.current,
      },
    });

    // timeLine.to(headTittle.current, {
    //     y: -1000,
    //     scale: 3,
    //     scrollTrigger: {
    //         trigger: headTittle.current,
    //         scrub:1,
    //         start: "top top"
    //     }
    // })
  });

  return (
    <>
      <div className="banner_overlay">
        <div className="banner_main">
          <div className="container">
            <div className="banner_items"></div>
          </div>
        </div>

        <div className="content">
          <h2 ref={headTittle}>Cats Club & Bar</h2>
          {/* <p>[ScrollDown to know more]</p> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Banner;
