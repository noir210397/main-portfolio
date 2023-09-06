import tw from "tailwind-styled-components";
import PortfolioCard from "./PortfolioCard";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Container = tw.div`p-5  ${(p) =>
  p.$theme === "light" ? "bg-light" : "bg-dark text-light"}`;
const CardContainer = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 mt-5`;
const Portfolio = () => {
  const { theme } = useTheme();
  return (
    <Container $theme={theme}>
      <div className="max-w-4xl mx-auto">
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
          Projects
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
        <CardContainer>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </CardContainer>
      </div>
    </Container>
  );
};

export default Portfolio;
