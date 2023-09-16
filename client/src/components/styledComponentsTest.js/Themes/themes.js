import styled from 'styled-components';

export const P = styled.p`
  padding: 2em;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const pageTheme = {
  // LIGHT MODE
  Light: {
    PbackgroundColor: '#F7F7F7', // Primary Background Color
    SbackgroundColor: 'rgb(228 228 228)', //Seocndary Background Color
    textColor: '#2C2D34',
    trendsColor: '#8e8e8e', // side text colors
    placeholder: '#393E46',
    borderColor: 'rgb(228 228 228)',
    trendHover: 'rgb(240, 240, 240, 0.7)',
    trendBorderColor: '#cecece',
  },

  // DIM MODE
  Dim: {
    PbackgroundColor: '#0c2335', // Primary Background Color
    SbackgroundColor: '#193448', //Seocndary Background Color
    textColor: '#F7F7F7',
    trendsColor: '#878a99', // side text colors
    placeholder: '#b4b4b4',
    borderColor: '#2f3a47',
    trendHover: 'rgb(100, 150, 150, 0.15)',
    trendBorderColor: '#39495b',
  },

  // DARK MODE
  Dark: {
    PbackgroundColor: '#100F0F', // Primary Background Color
    SbackgroundColor: '#272829', //Seocndary Background Color
    textColor: '#F7F7F7',
    trendsColor: '#7c7c7c', // side text colors
    placeholder: '#6d6d6d',
    borderColor: 'rgb(200 200 200 / 20%)',
    trendHover: 'rgb(0, 0, 0,0.3)',

    trendBorderColor: 'rgb(200 200 200 / 20%)',
  },

  red: {
    color: '#E0144C',
    hover: 'rgba(224, 20, 76, 0.1)',
  },
  orange: {
    color: '#F86F03',
    hover: 'rgb(244, 93, 34,0.1)',
  },
  blue: {
    color: '#1DA1F2',
    hover: 'rgba(29, 161,242, 0.1)',
  },
  yellow: {
    color: '#FFAC33',
    hover: 'rgb(255, 172, 51,0.1)',
  },
  purple: {
    color: '#794BC4',
    hover: 'rgba(121, 75, 196, 0.1)',
  },
  green: {
    color: '#17BF63',
    hover: 'rgb(23, 191, 99,0.1)',
  },
};
