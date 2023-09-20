import './App.css';
import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pageTheme } from './components/styledComponentsTest.js/Themes/themes';
import { useThemeStore } from './store/themeStorage';
import { CircularProgress, Container } from '@mui/material';
import { DivMain } from './components/styledComponentsTest.js/components.js/DivMain/DivMain';
import SignIn from './components/SignIn/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import LeftNavLayout from './components/Nav&Trendnig/NavLayout/LeftNavLayout';
import HomePage from './components/Tweet/HomePage/HomePage';
import Notfication from './components/Notifications/Notfication/Notfication';
import UserProfile from './components/UserProfile/Profile/UserProfile';
import { useEffect, useState } from 'react';
import instance from './axios';
import { useUserIdStore } from './store/userStorage';
import { ProfileLoadingDiv } from './components/UserProfile/ProfileStyledComponents/ProfileLoadingDiv';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useUserIdStore((state) => state.setUser);
  const userProfile = useUserIdStore((state) => state.userProfile);

  const theme = useThemeStore((state) => state.theme);
  const buttonTheme = useThemeStore((state) => state.buttonTheme);

  const storageData = useThemeStore((state) => state.getFromLocalStorage);

  const mainTheme = {
    theme: pageTheme[theme],
    buttonTheme: pageTheme[buttonTheme],
  };
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        setIsLoading(true);
        storageData();

        const res = await instance.get('user/getMe');
        const data = res.data.data;

        setUser(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchUserHandler();
  }, []);

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <DivMain>
          <Container>
            {isLoading ? (
              <ProfileLoadingDiv>
                <CircularProgress size={80} />
              </ProfileLoadingDiv>
            ) : (
              <Routes>
                {!userProfile.userName ? (
                  <>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                  </>
                ) : null}
                <Route
                  element={
                    <ProtectedRoute>
                      <LeftNavLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route
                    index={true}
                    path="/"
                    element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/Notification"
                    element={
                      <ProtectedRoute>
                        <Notfication />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/Profile/:username"
                    element={
                      <ProtectedRoute>
                        <UserProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Route>
              </Routes>
            )}
          </Container>
        </DivMain>
      </ThemeProvider>
    </>
  );
}

export default App;
