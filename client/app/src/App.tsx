import React from "react";
import { ButtonStyled } from "./features/global/styles/components/ButtonStyled";
import { useTheme } from "./features/global/styles/theme/ThemeProvider";

function App() {
  const { mode, toggleTheme, setMode } = useTheme();

  return (
    <div style={{ backgroundColor: mode === "dark" ? "black" : "white" }}>
      <ButtonStyled
        variant="outline"
        disabled
        style={{ marginInlineStart: 12 }}
      >
        outline
      </ButtonStyled>
      <ButtonStyled variant="outline" style={{ margin: 12 }}>
        outline
      </ButtonStyled>
      <ButtonStyled>plane</ButtonStyled>
      <ButtonStyled onClick={toggleTheme}>
        {mode === "light" ? "light" : "dark"}
      </ButtonStyled>
    </div>
  );
}

export default App;
