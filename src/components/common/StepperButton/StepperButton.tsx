import { ChangeEvent, useCallback } from 'react';

import { AddIcon, MinusIcon } from '../../../assets';
import { DEFAULT_MAX_COUNT, DEFAULT_MIN_COUNT } from '../../../constants';
import { isNumber } from '../../../utils/validator';
import * as S from './StepperButton.styles';

interface StepperButtonProps {
  count: number;
  minCount?: number;
  maxCount?: number;
  step?: number;
  handleDecreaseCount: () => void;
  handleIncreaseCount: () => void;
  handleCountChange: (count: number) => void;
}

const StepperButton = ({
  count,
  minCount = DEFAULT_MIN_COUNT,
  maxCount = DEFAULT_MAX_COUNT,
  handleDecreaseCount,
  handleIncreaseCount,
  handleCountChange,
}: StepperButtonProps) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!isNumber(event.target.value)) return;

      const currCount = Number(event.target.value);

      if (currCount < minCount || currCount > maxCount) return;

      handleCountChange(currCount);
    },
    [handleCountChange, minCount, maxCount]
  );

  return (
    <S.StepperContainer>
      <S.StepperButton
        type="button"
        aria-label="decrease"
        disabled={count === minCount}
        variant="textButton"
        size="small"
        onClick={handleDecreaseCount}
      >
        <MinusIcon />
      </S.StepperButton>
      <S.StepperInput
        name="count"
        value={count}
        aria-label="count input"
        onChange={onChange}
      ></S.StepperInput>
      <S.StepperButton
        type="button"
        aria-label="increase"
        disabled={count === maxCount}
        variant="textButton"
        size="small"
        onClick={handleIncreaseCount}
      >
        <AddIcon />
      </S.StepperButton>
    </S.StepperContainer>
  );
};

export default StepperButton;
