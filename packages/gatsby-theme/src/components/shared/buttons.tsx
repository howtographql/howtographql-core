import React from 'react';
import { ButtonProps } from './base';
import { Flex, Image, Button } from './base';

export const VoteButton: React.FunctionComponent<
  ButtonProps & {
    active?: Boolean;
  }
> = props =>
  props.active ? (
    <CustomButton {...props} type="voteActive" />
  ) : (
    <CustomButton {...props} type="vote" />
  );

export const BookmarkButton: React.FunctionComponent<
  ButtonProps & {
    active?: Boolean;
  }
> = props =>
  props.active ? (
    <CustomButton {...props} type="bookmarkActive" />
  ) : (
    <CustomButton {...props} type="bookmark" />
  );

export const GithubButton: React.FunctionComponent<ButtonProps> = props => (
  <CustomButton {...props} type="github" />
);

export const TutorialButton: React.FunctionComponent<ButtonProps> = props => (
  <CustomButton {...props} type="tutorial" />
);

export const SpectrumButton: React.FunctionComponent<ButtonProps> = props => (
  <CustomButton {...props} type="tutorial" />
);

export const CustomButton: React.FunctionComponent<
  ButtonProps & {
    type?:
      | 'github'
      | 'tutorial'
      | 'spectrum'
      | 'vote'
      | 'voteActive'
      | 'bookmark'
      | 'bookmarkActive'
      | 'default';
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
  voteActive: ButtonType;
  bookmark: ButtonType;
  bookmarkActive: ButtonType;
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
  voteActive: {
    icon: 'https://i.ibb.co/m41h9fC/Vote-filled.png',
    bg: 'white',
  },
  bookmark: {
    icon:
      'http://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png',
    bg: 'white',
  },
  bookmarkActive: {
    icon:
      'http://endlessicons.com/wp-content/uploads/2014/03/bookmark-icon-1-614x460.png',
    bg: 'blue',
  },
  default: {
    icon: '',
    bg: 'primary',
  },
};
