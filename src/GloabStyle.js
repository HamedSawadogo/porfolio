import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
body{
   background:${({ color }) => (color == "dark" ? "rgb(16 23 31)" : "#F1F1F1")};
   transition:0.3s ease;
}
 `;
const GloabStyle = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return <GlobalStyled color={theme} />;
};

export default GloabStyle;
