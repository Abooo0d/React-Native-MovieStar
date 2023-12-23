import Drawer from 'expo-router/drawer';
import React from 'react';
const _layout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="home" options={{}} />
      <Drawer.Screen name="favorite" options={{}} />
    </Drawer>
  );
};

export default _layout;
