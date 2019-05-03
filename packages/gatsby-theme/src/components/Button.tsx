import React from "react";
import {
  Flex,
  Box,
  Image,
  Link as BaseLink,
  Text,
  Button
} from "./shared/base";
import { defaultProps } from "prism-react-renderer";
interface ButtonProps {
  text: string;
  icon: string;
  link: string;
  bgColor: string;
  type: string;
}

const BaseIconButton: React.FunctionComponent<ButtonProps> = props => {
  return (
    <BaseLink href={props.link}>
      <Button bg={props.bgColor}>
        <Flex alignItems="center" p={1} flexDirection="row">
          <Image src={props.icon} margin="10px 10px 10px 10px" />
          <Text>{props.text}</Text>
        </Flex>
      </Button>
    </BaseLink>
  );
};

export const IconButton: React.FunctionComponent<ButtonProps> = props => {
  var icon = "";
  var color = "";
  switch (props.type) {
    case "tutorial":
      icon = "https://i.ibb.co/MBKTQ9b/Icon.png";
      color = "primary";
      break;
    case "github":
      icon = "https://i.ibb.co/ftWB3Y1/Github.png";
      color = "grey";
      break;
    case "spectrum":
      icon = "https://i.ibb.co/gmtgnsP/Spectrum.png";
      color = "grey";
      break;
    default:
      return <Button>{props.children}</Button>;
  }
  return (
    <BaseIconButton
      text={props.children}
      icon={icon}
      link={props.link}
      bgColor={props.bgColor || color}
    />
  );
};

export default IconButton;
