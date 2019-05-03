import { styled } from "../../styles";
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant
} from "styled-system";
import {
  BoxProps,
  FlexProps,
  TextProps,
  HeadingProps,
  LinkProps,
  ButtonProps,
  ImageProps,
  CardProps
} from "./base.d";

const themed = key => props => props.theme[key];

export const Box = styled("div")<BoxProps>(
  {
    boxSizing: "border-box"
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed("Box")
);

export const Flex = styled(Box)<FlexProps>(
  {
    display: "flex"
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed("Flex")
);

export const Text = styled(Box)<TextProps>(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed("Text")
);

export const Heading = styled(Text)<HeadingProps>(themed("Heading"));

Heading.defaultProps = {
  as: "h2",
  m: 0,
  fontSize: 4,
  fontWeight: 2
};

export const Link = styled(Box)<LinkProps>(themed("Link"));

Link.defaultProps = {
  as: "a"
};

export const Button = styled(Box)<ButtonProps>(
  {
    appearance: "none",
    display: "inline-block",
    textAlign: "center",
    lineHeight: "inherit",
    textDecoration: "none"
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed("Button")
);

Button.defaultProps = {
  as: "button",
  fontSize: "inherit",
  fontWeight: 2,
  m: 0,
  px: 3,
  py: 2,
  color: "white",
  bg: "primary",
  border: 0,
  borderRadius: 4
};

export const Image = styled(Box)<ImageProps>(
  {
    maxWidth: "100%",
    height: "auto"
  },
  height,
  borderRadius,
  themed("Image")
);

Image.defaultProps = {
  as: "img",
  m: 0
};

const cards = variant({ key: "cards" });

export const Card = styled(Box)<CardProps>(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed("Card")
);
