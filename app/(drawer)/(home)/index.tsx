import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'tamagui';
import { Title } from 'tamagui.config';

const Page = () => {
  return (
    <View>
      <Title>Home</Title>
      <Link href={'/(drawer)/(home)/Movie/1'} asChild>
        <Text>Movie 1</Text>
      </Link>
      <Card>
        <Card.Header>
          <Text>Header</Text>
        </Card.Header>
        <Card.Footer />
        <Card.Background />
      </Card>
    </View>
  );
};

export default Page;
