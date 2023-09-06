import { BsFillBrushFill } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";
import tw from "tailwind-styled-components";
import SkillsCard from "./SkillsCard";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Container = tw.div`p-5  ${(p) =>
  p.$theme === "light" ? "bg-mywhite" : "bg-myblack text-mywhite"}`;
const skills = [
  {
    title: `Responsive Web Design and Development & User Interface (UI) and User Experience (UX) Design`,
    icon: <BsFillBrushFill fontSize={`25px`} />,
  },
  {
    title: `Front-end Development with React & Custom Web Application Development`,
    icon: <BiLogoReact fontSize={`25px`} />,
  },

  {
    title: `Debugging and Optimization,Third-party API Integration and Performance Tuning & Cross-browser Compatibility`,
    icon: <VscDebugAlt fontSize={`25px`} />,
  },
  {
    title: `Proficient in Redux for state management in complex web applications.`,
    icon: <BiLogoRedux fontSize={`25px`} />,
  },
];
const Skills = () => {
  const { theme } = useTheme();
  return (
    <Container $theme={theme}>
      <div className="max-w-4xl mx-auto ">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-extrabold text-center"
        >
          Skills
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique
          maiores. Corrupti.
        </motion.p>
        <div className=" mt-5  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
            {skills.map((item) => (
              <SkillsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
