import { FaDownload } from "react-icons/fa";
import tw from "tailwind-styled-components";
import AboutCard from "./AboutCard";
// import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ImageContainer = tw.div`flex-1 max-w-sm  p-3 rounded-sm ${(p) =>
  p.$theme === "light" ? "bg-mywhite" : "bg-myblack"}`;
const About = tw.div`flex-1 p-2 max-w-lg `;
const CardContainer = tw.div`grid md:grid-cols-3 grid-cols-2 gap-2  py-2`;
const Button = tw.button`text-white ${(p) =>
  p.$primary === "blue"
    ? "bg-primary"
    : p.$primary === "purple"
    ? "bg-mypurple"
    : p.$primary === "green"
    ? "bg-mygreen"
    : p.$primary === "pink"
    ? "bg-mypink"
    : p.$primary === "red"
    ? "bg-myred"
    : "bg-myyellow"} rounded p-2 flex justify-center items-center`;
const AboutMe = () => {
  const { theme, primaryColor } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "bg-light" : "bg-dark text-light"
      } flex p-3 justify-center gap-2 flex-col lg:flex-row items-center`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        // animate={"visible"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ImageContainer $theme={theme}>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </ImageContainer>
      </motion.div>
      <About>
        <motion.h2
          className="text-xl font-extrabold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <CardContainer>
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </CardContainer>
        <motion.div
          className="py-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          quisquam rerum aut fugit nihil, voluptatibus a numquam obcaecati
          molestiae illum modi debitis nemo iure dolorem sunt quibusdam dolorum.
          Voluptates voluptatibus nulla odit molestiae ab et eaque sequi
          doloribus numquam ullam quibusdam odio laboriosam, facilis eveniet.
        </motion.div>
        <Button $primary={primaryColor}>
          <span>Download CV</span>
          <FaDownload className="inline-block px-1 text-2xl" />
        </Button>
      </About>
    </div>
  );
};

export default AboutMe;
