import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font';

import config from '../tamagui.config';
import { Provider } from 'react-redux';
import store from '~/context/store';

import Splash from './Splash';
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Arial: require('../assets/Fonts/Arial-Regular.ttf'),
    ArialB: require('../assets/Fonts/Arial-Bold.ttf'),
    ArialL: require('../assets/Fonts/Arial-Light.ttf'),
  });

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
