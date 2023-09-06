import tw from "tailwind-styled-components";
import { FaCookieBite } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Container = tw.header`flex py-2 px-5 ${(p) =>
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
    : "bg-myyellow"} justify-between items-center text-mywhite fixed w-full z-10`;
const Logo = tw.div`capitalize text-xl p-2 relative font-bold cursor-pointer `;
const Border = tw.div`w-3 h-3  absolute ${(p) =>
  p.$position === "up"
    ? "top-0 right-0 border-r-2 border-t-2 border-white"
    : "left-0 bottom-0 border-b-2 border-l-2 border-white"}`;
const List = tw.li`cursor-pointer lg:hover:underline decoration-2 decoration-white`;
const Drawer = tw.div`fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center px-3 ${(
  p
) => (p.$isOpen ? "" : "hidden")}`;
const PrimaryColorButton = tw.button`w-7 h-7 rounded-full ${(p) =>
  p.$bgcolor === "blue"
    ? "bg-primary"
    : p.$bgcolor === "purple"
    ? "bg-mypurple"
    : p.$bgcolor === "green"
    ? "bg-mygreen"
    : p.$bgcolor === "pink"
    ? "bg-mypink"
    : p.$bgcolor === "red"
    ? "bg-myred"
    : "bg-myyellow"}`;
const saveTheme = (color) => {
  localStorage.setItem("color", `${color}`);
};
const saveLightOrDark = (bg) => {
  localStorage.setItem("background", `${bg}`);
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, primaryColor, setPrimaryColor } = useTheme();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // console.log(primaryColor);
  }, [isOpen]);
  return (
    <Container $primary={primaryColor}>
      <Drawer $isOpen={isOpen}>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[80%] max-w-lg min-h-[150px] bg-mywhite py-4 px-2 rounded-lg ">
          <div className="font-extrabold text-center text-myblack">
            Customize Your Theme
          </div>
          <div className="py-1 text-center text-myblack">
            change the primary color and background color of your UI
          </div>
          <div>
            <div className="font-extrabold text-center text-myblack">
              Primary Color
            </div>
            <div className="flex justify-center items-center gap-3 py-3">
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("purple");
                  saveTheme("purple");
                }}
                $bgcolor={"purple"}
              ></PrimaryColorButton>
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("green");
                  saveTheme("green");
                }}
                $bgcolor={"green"}
              ></PrimaryColorButton>
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("blue");
                  saveTheme("blue");
                }}
                $bgcolor={"blue"}
              ></PrimaryColorButton>
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("pink");
                  saveTheme("pink");
                }}
                $bgcolor={"pink"}
              ></PrimaryColorButton>
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("red");
                  saveTheme("red");
                }}
                $bgcolor={"red"}
              ></PrimaryColorButton>
              <PrimaryColorButton
                onClick={() => {
                  setPrimaryColor("yellow");
                  saveTheme("yellow");
                }}
                $bgcolor={"yellow"}
              ></PrimaryColorButton>
            </div>
          </div>
          <div>
            <div className="font-extrabold text-center text-myblack">
              Background Color
            </div>
            <div className="mx-auto  max-w-sm  grid grid-cols-2 p-3 gap-4">
              <button
                onClick={() => {
                  setTheme("light");
                  saveLightOrDark("light");
                }}
                className="w-full  bg-mywhite border-2 border-myblack rounded min-h-[40px]"
              ></button>
              <button
                onClick={() => {
                  setTheme("dark");
                  saveLightOrDark("dark");
                }}
                className="w-full  bg-myblack rounded min-h-[40px] border-2 border-mywhite"
              ></button>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="block max-w-xs mx-auto w-[80%] min-h-[40px] my-2 bg-dark  rounded"
            >
              Done
            </button>
          </div>
        </div>
      </Drawer>
      <Logo>
        GZA
        <Border $position={`up`}></Border>
        <Border></Border>
      </Logo>
      <ul className="lg:flex gap-2 justify-center items-center hidden ">
        <List>Home</List>
        <List>About</List>
        <List>Portfolio</List>
        <List>Contact Me</List>
        <List>Services</List>
      </ul>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="text-2xl"
      >
        <FaCookieBite />
      </button>
    </Container>
  );
};

export default Header;
