import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';
import React from 'react';
const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: false,
        drawerActiveBackgroundColor: colorTokens.dark.purple.purple8,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
      }}>
      <Drawer.Screen
        name="(home)"
        options={{
          title: 'Movie Star',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(favorite)"
        options={{
          title: 'Favorite',
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default _layout;
