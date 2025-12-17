import { Tabs } from 'expo-router';
{/*This means:
👉 All files in this folder are displayed as tabs.*/}
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      {/*Where is the bottom tab bar called?
        Created internally by React Navigation
        Triggered by <Tabs />
        Configured by you
        Rendered automatically*/}
        {/*This:
          Styles the tab bar
          Disables headers (root stack already handles headers)
          Adds haptic feedback on tab press*/}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      {/*<Tabs.Screen name="index" />
          Maps to:
          app/(tabs)/index.tsx
          Explicitly registers a tab
          Customizes title & icon*/}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
      name='profile'
      options = {{
        title: 'Profile',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />,
      }}/>
      <Tabs.Screen
      name='settings'
      options = {{
        title: 'Settings',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />,
      }}/>
    </Tabs>
  );
}
