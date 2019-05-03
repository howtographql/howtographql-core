import React from "react";
import {
  Flex,
  Box,
  Image,
  Link as BaseLink,
  Text,
  Button
} from "./shared/base";
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
  switch (props.type) {
    case "tutorial":
      return (
        <BaseIconButton
          text={props.children}
          icon="https://i.ibb.co/MBKTQ9b/Icon.png"
          link={props.link}
          bgColor="primary"
        />
      );
    case "github":
      return (
        <BaseIconButton
          text={props.children}
          icon="https://i.ibb.co/ftWB3Y1/Github.png"
          link={props.link}
          bgColor="grey"
        />
      );
    case "spectrum":
      return (
        <BaseIconButton
          text={props.children}
          icon="https://i.ibb.co/gmtgnsP/Spectrum.png"
          link={props.link}
          bgColor="green"
        />
      );
    default:
      return <Button>{props.children}</Button>;
  }
};

export default IconButton;
