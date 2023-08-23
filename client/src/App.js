import './App.css';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pageTheme } from './components/styledComponentsTest.js/Themes/themes';
import Button from './components/ThemeButtons/BackGroundTheme/Buttons/ThemeButton';
import { useThemeStore } from './store/themeStorage';
import { Container } from '@mui/material';
import { DivMain } from './components/styledComponentsTest.js/components.js/DivMain/DivMain';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Tweet from './components/Tweet/HomePage/HomePage';
import LeftNavLayout from './components/Nav&Trendnig/NavLayout/LeftNavLayout';
import HomePage from './components/Tweet/HomePage/HomePage';
import Notfication from './components/Notifications/Notfication/Notfication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    element: <LeftNavLayout />,
    children: [
      {
        index: true,
        path: '/Home',
        element: <HomePage />,
      },
      {
        path: '/Notification',
        element: <Notfication />,
      },
    ],
  },
]);

function App() {
  const theme = useThemeStore((state) => state.theme);
  const buttonTheme = useThemeStore((state) => state.buttonTheme);

  const mainTheme = {
    theme: pageTheme[theme],
    buttonTheme: pageTheme[buttonTheme],
  };

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <DivMain>
          <Container>
            {/* <Button /> */}
            <RouterProvider router={router} />
          </Container>
        </DivMain>
      </ThemeProvider>
    </>
  );
}

export default App;
