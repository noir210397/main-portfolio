import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import tw from "tailwind-styled-components";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Container = tw.div` min-h-[200px]  ${(p) =>
  p.$theme === "light"
    ? "bg-mywhite"
    : "bg-myblack text-mywhite"}  flex justify-center items-center`;
const Icons = tw.div`p-3 ${(p) =>
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
    : "bg-myyellow"} rounded text-white cursor-pointer`;
const ContactMe = () => {
  const { theme, primaryColor } = useTheme();
  return (
    <Container $theme={theme}>
      <motion.div
        className="max-w-4xl mx-auto"
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
        <h2 className="text-xl font-extrabold text-center">Get In Touch</h2>
        <p className=" text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique
          maiores.
        </p>
        <div className="text-xl flex justify-center items-center p-3 gap-3">
          <Icons $primary={primaryColor}>
            <BsWhatsapp />
          </Icons>
          <Icons $primary={primaryColor}>
            <FaGithub />
          </Icons>
          <Icons $primary={primaryColor}>
            <AiFillLinkedin />
          </Icons>
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactMe;
