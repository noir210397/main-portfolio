import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import tw from "tailwind-styled-components";
import { useTheme } from "../context/ThemeContext";
import { motion, MotionConfig } from "framer-motion";

const Container = tw.div`min-h-screen  flex justify-center items-center flex-col relative  ${(
  p
) => (p.$theme === "light" ? "bg-mywhite" : "bg-myblack text-mywhite")}`;
const ActiveButton = tw.button`w-full py-2 px-4 border-2 bg-primary text-white   ${(
  p
) =>
  p.$primary === "blue"
    ? "bg-primary border-primary"
    : p.$primary === "purple"
    ? "bg-mypurple border-mypurple"
    : p.$primary === "green"
    ? "bg-mygreen border-mygreen"
    : p.$primary === "pink"
    ? "bg-mypink border-mypink"
    : p.$primary === "red"
    ? "bg-myred border-myred"
    : "bg-myyellow border-myyellow"}  rounded hover:translate-y-2 transition-all  `;
const Button = tw.button`w-full py-2 px-4 border-2   ${(p) =>
  p.$primary === "blue"
    ? "border-primary"
    : p.$primary === "purple"
    ? "border-mypurple"
    : p.$primary === "green"
    ? "border-mygreen"
    : p.$primary === "pink"
    ? "border-mypink"
    : p.$primary === "red"
    ? "border-myred"
    : "border-myyellow"}  rounded hover:translate-y-2 transition-all  `;

const HomeContainer = () => {
  const { theme, primaryColor } = useTheme();
  return (
    <Container id="home" $theme={theme}>
      <motion.div
        className="p-2 min-[330px]:text-xl min-[320px]:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Name is Kobe Bean Bryant
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.5, duration: 1 }}
        className=" font-extrabold min-[330px]:text-4xl min-[320px]:text-2xl"
      >
        I'm A Developer
      </motion.div>
      {/* <div className="flex gap-4 p-2 text-xl w-full max-w-xs justify-center">
        <div className="flex justify-center items-center "></div>
        <div>
          <BsWhatsapp />
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <AiFillLinkedin />
        </div>
      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className=" h-[256px] w-64 rounded-t-full rounded-b-xl overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover  rounded-b-xl "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl p-2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio
        voluptatum quisquam asperiores dolore quos exercitationem molestiae
        blanditiis nisi nesciunt.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid grid-cols-2 gap-2"
      >
        <ActiveButton $primary={primaryColor}>Lets Talk</ActiveButton>
        <Button $primary={primaryColor}> My Work</Button>
      </motion.div>
    </Container>
  );
};

export default HomeContainer;
