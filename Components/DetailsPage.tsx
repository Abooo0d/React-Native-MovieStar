import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { MediaType } from '@/Interfaces/apiresults';
import { useQuery } from '@tanstack/react-query';
import { GetMovieDetails } from '@/Services/api';
import { Main } from '@/tamagui.config';
import { H1, Paragraph, ScrollView, YStack } from 'tamagui';
import { themes } from '@tamagui/themes';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
type DetailsPros = {
  id: string;
  mediaType: MediaType;
};
const DetailsPage = ({ id, mediaType }: DetailsPros) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => GetMovieDetails(+id, mediaType),
  });
  return (
    <Main>
      <ScrollView>
        <ImageBackground
          style={{ height: 300, width: '100%' }}
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}`,
          }}></ImageBackground>
        <YStack animation={'lazy'} enterStyle={{ opacity: 0, y: 20 }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              flexDirection: 'row',
              marginTop: -220,
              // backgroundColor: 'red',
            }}>
            <Animated.Image
              source={{ uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}` }}
              style={{
                width: 200,
                height: 300,
                borderRadius: 10,
                borderWidth: 3,
                borderColor: '#fff',
              }}
            />
            <View style={{ paddingVertical: 20, marginLeft: -10 }}>
              <Text style={{ fontSize: 16, color: '#aaa' }}>
                Rating:{'   '}
                <Text style={{ color: themes.dark.orange9 }}>
                  <Ionicons name="ios-star" size={20} color={themes.dark.yellow9} />{' '}
                  {Math.round(movieQuery.data?.vote_average)}
                </Text>
                /10
              </Text>
              <Text style={{ fontSize: 16, color: '#aaa' }}>
                Release:{'   '}
                <Text style={{ color: themes.dark.orange9 }}> {movieQuery.data?.release_date}</Text>
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <H1 color={themes.dark.orange9} fontSize={40}>
              {movieQuery.data?.title || movieQuery.data?.name}
            </H1>
            <Paragraph theme={'alt2'} fontSize={18}>
              {movieQuery.data?.tagline}
            </Paragraph>
            <Text style={{ color: themes.dark.orange4, fontSize: 16 }}>
              {movieQuery.data?.overview}
            </Text>
          </View>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
