import tw from "tailwind-styled-components";
import { useTheme } from "../context/ThemeContext";

const Container = tw.div`p-3  rounded-md cursor-pointer ${(p) =>
  p.$theme === "light" ? "bg-mywhite" : "bg-myblack "}`;
// const Button = tw.button`w-full py-2  ${(p) =>
//   p.$primary
//     ? "bg-primary text-white"
//     : `bg-light ${
//         p.$theme === "light" ? "" : "text-myblack"
//       }`}  border-primary  rounded  `;
const ImageContainer = tw.div`h-48 flex justify-center items-center ${(p) =>
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
    : "bg-myyellow"} rounded-md`;
const Button = tw.div`w-full py-2 ${(p) =>
  p.$theme === "light"
    ? "bg-dark text-light"
    : "bg-mywhite text-myblack"} rounded text-center`;
const ActiveButton = tw.button`w-full py-2 ${(p) =>
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
    : "bg-myyellow border-myyellow"} rounded text-light`;
const PortfolioCard = () => {
  const { theme, primaryColor } = useTheme();
  return (
    <Container $theme={theme}>
      <ImageContainer $primary={primaryColor}>
        <div className="">Image</div>
      </ImageContainer>
      <div className={`py-2 ${theme === "light" ? "" : "text-mywhite"}`}>
        <h3 className="font-bold">Project Title</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui in,
          debitis ipsa numquam fugiat quidem nostrum tempora accusamus
          repellendus molestiae. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptatem numquam rem unde.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button $theme={theme} $primary={primaryColor}>
            View Project
          </Button>
          <ActiveButton $primary={primaryColor}>Github</ActiveButton>
        </div>
      </div>
    </Container>
  );
};

export default PortfolioCard;
