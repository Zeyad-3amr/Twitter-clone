import React from 'react';
import { useThemeStore } from '../../../../store/themeStorage';
import { useState } from 'react';
import {
  BlueButton,
  GreenButton,
  OrangeButton,
  PurpleButton,
  RedButton,
  YellowButton,
} from '../ColoredButtonsStyledComponents/ColoredButton';
import { ColoredButtonsDiv } from '../ColoredButtonsStyledComponents/ColoredButtonsDiv';
import { P } from '../../../Nav&Trendnig/Nav/DisplayNav/NavStyledComponents/P';
import { FiCheck } from 'react-icons/fi';

const ColoredButtons = () => {
  const changeButtonTheme = useThemeStore((state) => state.changeButtonTheme);
  const ButtonTheme = useThemeStore((state) => state.buttonTheme);

  const [isChecked, setIsChecked] = useState(ButtonTheme);

  const handleButtonClick = (theme) => {
    changeButtonTheme(theme);
    setIsChecked(theme);
  };

  return (
    <>
      <P>Buttons Color</P>
      <ColoredButtonsDiv>
        <BlueButton onClick={() => handleButtonClick('blue')}>
          {isChecked === 'blue' && <FiCheck size={30} />}
        </BlueButton>
        <YellowButton onClick={() => handleButtonClick('yellow')}>
          {isChecked === 'yellow' && <FiCheck size={30} />}
        </YellowButton>
        <RedButton onClick={() => handleButtonClick('red')}>
          {isChecked === 'red' && <FiCheck size={30} />}
        </RedButton>
        <PurpleButton onClick={() => handleButtonClick('purple')}>
          {isChecked === 'purple' && <FiCheck size={30} />}
        </PurpleButton>
        <OrangeButton onClick={() => handleButtonClick('orange')}>
          {isChecked === 'orange' && <FiCheck size={30} />}
        </OrangeButton>
        <GreenButton onClick={() => handleButtonClick('green')}>
          {isChecked === 'green' && <FiCheck size={30} />}
        </GreenButton>
      </ColoredButtonsDiv>
    </>
  );
};

export default ColoredButtons;
