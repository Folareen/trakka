import { useFonts } from 'expo-font';
import React from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Navigation from './src/navigation';
import * as SplashScreen from 'expo-splash-screen'
import { RootSiblingParent } from 'react-native-root-siblings';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [isLoaded] = useFonts({
    '300': require('./src/assets/fonts/Inter-Light.ttf'),
    '400': require('./src/assets/fonts/Inter-Regular.ttf'),
    '500': require('./src/assets/fonts/Inter-Medium.ttf'),
    '600': require('./src/assets/fonts/Inter-SemiBold.ttf'),
    '700': require('./src/assets/fonts/Inter-Bold.ttf'),
    '800': require('./src/assets/fonts/Inter-ExtraBold.ttf'),
  })

  const handleOnLayout = async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync()
    }
  }

  if (!isLoaded) return null

  return (
    <RootSiblingParent>
      <View style={{ flex: 1 }} onLayout={handleOnLayout}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </View>
    </RootSiblingParent>
  );
}