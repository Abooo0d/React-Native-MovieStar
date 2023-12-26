import MovieCard from '@/Components/MovieCard';
import { getSearchResult, getTrending } from '@/Services/api';
import { Container, Title, Main, Subtitle } from '@/tamagui.config';
import useDebounce from '@/utils/useDebounce';
import { themes } from '@tamagui/themes';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Card, Input, ScrollView, Spinner, YStack } from 'tamagui';
const Page = () => {
  const [searchString, setSearchString] = useState('');
  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });
  const deBounceString = useDebounce(searchString, 500);
  const searchQuery = useQuery({
    queryKey: ['search', deBounceString],
    queryFn: () => getSearchResult(deBounceString),
    enabled: deBounceString.length > 0,
  });

  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: 'https://us.123rf.com/450wm/liudmilachernetska/liudmilachernetska2301/liudmilachernetska230137032/197754827-flat-lay-composition-with-clapperboard-and-cinema-tickets-on-orange-background-space-for-text.jpg?ver=6',
          }}
          style={{ width: '100%', height: 200 }}>
          <Container>
            <YStack>
              <Title
                color="#fff"
                fontSize={50}
                enterStyle={{
                  opacity: 0,
                  scale: 1.5,
                  y: -10,
                }}
                animation="quick">
                Trending
              </Title>
              <Input
                placeholder="Search For a Movie"
                placeholderTextColor={'#fff'}
                borderWidth={2}
                size={'$2'}
                px={10}
                value={searchString}
                onChangeText={(text) => setSearchString(text)}
              />
            </YStack>
          </Container>
        </ImageBackground>
        <Subtitle
          p={10}
          animation="lazy"
          fontSize={35}
          enterStyle={{ opacity: 0 }}
          color={themes.dark.orange9}>
          {searchQuery.data?.results ? 'Search Result' : 'Trending'}
        </Subtitle>
        {(trendingQuery.isLoading || searchQuery.isLoading) && (
          <Spinner size="large" color={'$orange9'} />
        )}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pb={40}
          contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}>
          {searchQuery.data?.results ? (
            <>{searchQuery.data?.results.map((item) => <MovieCard key={item.id} movie={item} />)}</>
          ) : (
            <>
              {trendingQuery.data?.results && (
                <>
                  {trendingQuery.data?.results.map((item) => (
                    <MovieCard key={item.id} movie={item} />
                  ))}
                </>
              )}
            </>
          )}
        </ScrollView>
      </ScrollView>
    </Main>
  );
};

export default Page;
