import React from "react";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";

const HtmlGlobalStyled = createGlobalStyle`
 body{
 background:${({ theme }) => (theme === "light" ? "#f1f1f1" : " #0a192f")};
}
`;

const GlobalStyle = () => {
  const theme = useSelector((state) => state.theme.theme);
  return <HtmlGlobalStyled theme={theme} />;
};

export default GlobalStyle;
