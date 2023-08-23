import { useState } from 'react';
import { useThemeStore } from '../../../../store/themeStorage';
import { DarkButton, DimButton, LightButton } from '../ButtonsStyledComponents/Button';
import { ButtonsDiv } from '../ButtonsStyledComponents/ButtonDiv';
import { BiCircle } from 'react-icons/bi';
import { P } from '../../../Nav&Trendnig/Nav/DisplayNav/NavStyledComponents/P';
const ThemesButton = () => {
  const changeTheme = useThemeStore((state) => state.changeTheme);
  const Theme = useThemeStore((state) => state.theme);

  const [activeButton, setActiveButton] = useState(Theme);

  const handleButtonClick = (theme) => {
    changeTheme(theme);
    setActiveButton(theme);
  };
  return (
    <>
      <P>Background</P>
      <ButtonsDiv>
        <LightButton
          onClick={() => handleButtonClick('Light')}
          active={activeButton === 'Light'}
        >
          <BiCircle size={15} />
          Light
        </LightButton>
        <DimButton
          onClick={() => handleButtonClick('Dim')}
          active={activeButton === 'Dim'}
        >
          <BiCircle size={15} />
          Dim
        </DimButton>
        <DarkButton
          onClick={() => handleButtonClick('Dark')}
          active={activeButton === 'Dark'}
        >
          <BiCircle size={15} />
          Dark
        </DarkButton>
      </ButtonsDiv>
    </>
  );
};
export default ThemesButton;
