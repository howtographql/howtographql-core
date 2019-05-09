import * as React from 'react';
import { styled } from '../../styles';
import { Text } from '../shared/base';

interface ProgressBarProps extends FillerProps, ContainerProps {}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  percentage,
  width,
}) => {
  return (
    <Container width={width}>
      <Outside>
        <Filler percentage={percentage} />
      </Outside>
      <Text fontSize={1} textAlign="center" p={1}>
        {percentage}% complete
      </Text>
    </Container>
  );
};

interface ContainerProps {
  width: number;
}

const Container = styled.div<ContainerProps>`
  width: ${props => props.width || '100'}%;
`;

const Outside = styled.div`
  position: relative;
  height: 1em;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #333;
  border-color: ${props => props.theme.colors.primary};
`;

interface FillerProps {
  percentage: number;
}

const Filler = styled('div')<FillerProps>`
  background: ${props => props.theme.colors.primary};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${props => props.percentage || '0'}%;
`;

export default ProgressBar;
