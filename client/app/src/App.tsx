// import { ButtonStyled } from "./features/global/styles/components/ButtonStyled";
// import { useTheme } from "./features/global/styles/theme/ThemeProvider";

import { Typography } from "./features/global/styles/components/TypographyStyled";

function App() {
  // const { mode, toggleTheme } = useTheme();

  return (
    // <div style={{ backgroundColor: mode === "dark" ? "black" : "white" }}>
    //   <ButtonStyled
    //     variant="outline"
    //     disabled
    //     style={{ marginInlineStart: 12 }}
    //   >
    //     outline
    //   </ButtonStyled>
    //   <ButtonStyled variant="outline" style={{ margin: 12 }}>
    //     outline
    //   </ButtonStyled>
    //   <ButtonStyled>plane</ButtonStyled>
    //   <ButtonStyled onClick={toggleTheme}>
    //     {mode === "light" ? "light" : "dark"}
    //   </ButtonStyled>
    // </div>
    <Typography>
      my typography:{" "}
      <Typography
        sx={{ fontWeight: "bolder", color: "green" }}
        component="span"
      >
        child
      </Typography>{" "}
      bla bla
    </Typography>
  );
}

export default App;
