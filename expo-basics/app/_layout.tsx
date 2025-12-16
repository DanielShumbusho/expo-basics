//Highest level of your app, used to configure the root navigator
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
//Entire app is wrapped in stack navigator
//Each screen in the app is a child of this layout
//You can configure screen options for the entire app here
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};{/*This tells Expo Router:
    “Start the app at (tabs)*/}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    {/*
    Syncs React Navigation with your color scheme
    Affects headers, transitions, navigation UI*/}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/*(tabs) is a child route group
        It becomes one screen in the root stack
        Header is hidden because tabs manage their own UI*/}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
