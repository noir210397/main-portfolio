import { AiOutlineExperiment } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const AboutCard = () => {
  const { theme } = useTheme();

  return (
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
      className={`min-h-[100px]  rounded p-2 cursor-pointer  ${
        theme === "light" ? "bg-mywhite" : "bg-myblack text-mywhite"
      } flex justify-between items-center flex-col`}
    >
      <div>
        <AiOutlineExperiment />
      </div>
      <div className="font-bold">Experience</div>
      <div className="text-sm">lorem ipsum</div>
    </motion.div>
  );
};

export default AboutCard;
