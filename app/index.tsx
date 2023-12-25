import { View, Text } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

const Page = () => {
  return <Redirect href={'/(drawer)/(home)/'} />;
};

export default Page;
