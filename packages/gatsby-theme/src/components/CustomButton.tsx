import React from 'react';
import { ButtonProps } from './shared/base.d';
import { Flex, Image, Button } from './shared/base';

export const CustomButton: React.FunctionComponent<
  ButtonProps & {
    type?: 'github' | 'tutorial' | 'spectrum' | 'vote' | 'default';
  }
> = ({ type = 'default', children, ...buttonProps }) => {
  const { icon, bg } = customButtonTypes[type];

  if (!type) {
    return <Button {...buttonProps}>{children}</Button>;
  }

  return (
    <Button {...buttonProps} bg={buttonProps.bg || bg}>
      <Flex alignItems="center" p={0} flexDirection="row">
        <Image src={icon} m={1} />
        {children}
      </Flex>
    </Button>
  );
};

interface ButtonType {
  icon: string;
  bg: string;
}

interface CustomButtonType {
  tutorial: ButtonType;
  github: ButtonType;
  spectrum: ButtonType;
  vote: ButtonType;
  default: ButtonType;
}

const customButtonTypes: CustomButtonType = {
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
  vote: {
    icon: 'https://i.ibb.co/b3FGXbD/Vote.png',
    bg: 'white',
  },
  default: {
    icon: '',
    bg: 'primary',
  },
};

export default CustomButton;
