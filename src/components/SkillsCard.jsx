import tw from "tailwind-styled-components";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const CardContainer = tw.div`   flex items-center min-h-[50px] p-2 rounded-md cursor-pointer font-semibold gap-2  ${(
  p
) => (p.$theme === "light" ? "bg-light" : "bg-dark text-light")}`;
const IconContainer = tw.div`w-10 flex justify-center  px-2 py-2 ${(p) =>
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
    : "bg-myyellow"} text-light rounded`;
const SkillsCard = ({ title, icon }) => {
  const { theme, primaryColor } = useTheme();

  return (
    <CardContainer $theme={theme}>
      <motion.div
        className=" "
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
        <IconContainer $primary={primaryColor}>{icon}</IconContainer>
      </motion.div>

      <motion.div
        className="flex-1 text-sm"
        variants={{
          hidden: { opacity: 0, y: 10, x: 5 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial={"hidden"}
        // animate={"visible"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.div>
    </CardContainer>
  );
};

export default SkillsCard;
