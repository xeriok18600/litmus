import { useTheme } from '@material-ui/core/styles';
import { Line } from 'rc-progress';
import React from 'react';

interface LinearProgressBarProps {
  value: number;
  maxValue: number;
  isInTable: boolean;
}

const AnalyticsLinearProgressBar: React.FC<LinearProgressBarProps> = ({
  value,
  maxValue,
  isInTable,
}) => {
  const width: number = 2;
  const resultValue = ((value as number) / (maxValue as number)) * 100;

  const { palette } = useTheme();

  return (
    <Line
      percent={resultValue}
      strokeWidth={width}
      trailWidth={width}
      strokeColor={isInTable ? palette.success.main : palette.primary.main}
    />
  );
};

export default AnalyticsLinearProgressBar;
