import * as React from 'react';
import { optionalChaining } from '../../utils/helpers';
import { Text } from './base';

const Percentage = ({ tutorial }) => {
  let progress = optionalChaining(
    () => tutorial.viewerUserTutorial.currentChapter,
  );
  let percentage = progress
    ? Math.floor((progress / tutorial.numberofChapters) * 100)
    : 0;
  return (
    <div>
      {percentage ? <Text>{percentage}%</Text> : <Text> No Progress </Text>}
    </div>
  );
};

export default Percentage;
