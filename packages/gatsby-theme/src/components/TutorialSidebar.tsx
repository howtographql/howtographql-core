import React from 'react';
import { Card, Image, Heading, Flex } from './shared/base';
import { authors } from '../utils/sampleData';
import AuthorList from './AuthorList';
import CustomButton from './CustomButton';

type SidebarProps = {
  tutorialTitle: string;
  chapters: string[];
};

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  tutorialTitle,
  chapters,
}) => {
  return (
    <div>
      <Card p={3} m={2}>
        <Flex flexDirection="column">
          <Heading> {tutorialTitle} </Heading>
        </Flex>
      </Card>
      <ul>
        {chapters.map(chapter => (
          <li key={chapter}>{chapter}</li>
        ))}
      </ul>
      <AuthorList authors={authors} />
      <CustomButton type="spectrum"> Get help on Spectrum </CustomButton>
    </div>
  );
};

export const TabletSidebar: React.FunctionComponent<SidebarProps> = ({
  tutorialTitle,
  chapters,
}) => {
  console.log(tutorialTitle);
  console.log(chapters);
  return (
    <div>
      <Image
        width={0.5}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
      />
    </div>
  );
};
