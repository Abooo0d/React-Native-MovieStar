import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log('🚀 ~ file: [id].tsx:7 ~ Page ~ id:', id);
  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
