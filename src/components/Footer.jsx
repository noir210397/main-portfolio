import tw from "tailwind-styled-components";
import { useTheme } from "../context/ThemeContext";

const Container = tw.div`${(p) =>
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
    : "bg-myyellow"} min-h-[80px] flex justify-center items-center text-mywhite`;
const List = tw.li`cursor-pointer lg:hover:underline decoration-2 decoration-white lg:text-base md:text-sm text-xs`;

const Footer = () => {
  const { primaryColor } = useTheme();

  return (
    <Container $primary={primaryColor}>
      <ul className="flex gap-2 justify-center items-center">
        <List>Home</List>
        <List>About</List>
        <List>Portfolio</List>
        <List>Contact Me</List>
        <List>Services</List>
      </ul>
    </Container>
  );
};

export default Footer;
