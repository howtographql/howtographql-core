import * as React from 'react';
import { Text } from '../shared/base';
import { percent } from '../../utils/helpers';

const ProgressBanner = ({ tutorial }) => {
  let currentChapter = tutorial.viewerUserTutorial.currentChapter;
  let numberofChapters = tutorial.numberofChapters;
  let percentage = currentChapter
    ? percent(numberofChapters, currentChapter)
    : 0;
  return (
    <div>
      {percentage ? <Text>{percentage}%</Text> : <Text> No Progress </Text>}
    </div>
  );
};

export default ProgressBanner;
