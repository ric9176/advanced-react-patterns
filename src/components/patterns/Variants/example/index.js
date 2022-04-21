import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { variant, space, color } from "styled-system";
import { layout } from 'styled-system'


const Box = styled.div`
  ${space}
  ${color}
  ${layout}
`

const buttonStyle = variant({
  key: "buttons",
});

const Button = styled("button")`
  background: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 800;
  padding: 16px;
  margin: 16px;
  transition: all 0.2s ease;
  ${buttonStyle};
  ${space};
`;

Button.defaultProps = {
  variant: "primary",
};

const Wrapper = styled("div")`
  padding: 40px;
  background: ${(props) => props.theme.colors.background};
`;

const VariantsExample = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Button margin={3}>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      {/* <Box width="2em" height="2em"  mb={4} bg="blue"></Box> */}
    </Wrapper>
  </ThemeProvider>
);

export default VariantsExample;
