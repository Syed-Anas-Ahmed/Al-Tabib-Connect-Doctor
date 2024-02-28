import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

import React, { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

import config from '../tamagui.config';
import { Provider } from 'react-redux';
import store from '~/context/store';

SplashScreen.preventAutoHideAsync();
import * as expoSecure from 'expo-secure-store';

import { addToken } from '~/context/actions/tokenActions';
import Splash from './Splash';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [screen, setScreen] = React.useState('(drawer)');

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Arial: require('../assets/Fonts/Arial-Regular.ttf'),
    ArialB: require('../assets/Fonts/Arial-Bold.ttf'),
    ArialL: require('../assets/Fonts/Arial-Light.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      checkToken();
    }
  }, []);

  const checkToken = async () => {
    const token = expoSecure.getItemAsync('token');
  };

  if (!loaded) return <Splash />;
  else {
    return (
      <Provider store={store}>
        <TamaguiProvider config={config}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            </Stack>
          </GestureHandlerRootView>
        </TamaguiProvider>
      </Provider>
    );
  }
}
