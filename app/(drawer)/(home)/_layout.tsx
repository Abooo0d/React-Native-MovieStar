import React from 'react';
import { Stack } from 'expo-router';
import { colorTokens } from '@tamagui/themes';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useTheme } from 'tamagui';
const Layout = () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.purple8.get(),
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'MovieStar',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen
        name="Movie/[id]"
        options={{
          title: 'Movie',
        }}
      />
    </Stack>
  );
};

export default Layout;
