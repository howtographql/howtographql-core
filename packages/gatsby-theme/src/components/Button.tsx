import React from 'react';
import { ButtonProps } from './shared/base.d';
import { Flex, Image, Text, Button } from './shared/base';

interface CustomButtonProps extends ButtonProps {
  type?: string;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
  const {type, children, ...(buttonProps as ButtonProps)} = props;
  if(!type) {
    return <Button {...props} />
  }
  const { icon, bg } =
    customButtonTypes[type] || customButtonTypes.default;

  const text = children;

  return (
    <Button
      {...buttonProps}
      bg={buttonProps.bg || bg}
    >
      <Flex alignItems="center" p={0} flexDirection="row">
        <Image src={icon} m={1} />
        {text}
      </Flex>
    </Button>
  );
};

const customButtonTypes = {
  tutorial: {
    icon: 'https://i.ibb.co/MBKTQ9b/Icon.png',
    bg: 'primary',
  },
  github: {
    icon: 'https://i.ibb.co/ftWB3Y1/Github.png',
    bg: 'grey',
  },
  spectrum: {
    icon: 'https://i.ibb.co/gmtgnsP/Spectrum.png',
    bg: 'grey',
  },
  default: {
    icon: '',
    bg: 'primary',
  },
};

export default CustomButton;
