import DetailsPage from '@/Components/DetailsPage';
import { MediaType } from '@/Interfaces/apiresults';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <DetailsPage id={id} mediaType={MediaType.Tv} />;
};

export default Page;
