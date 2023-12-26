import { ResultItem } from '@/Interfaces/apiresults';
import { themes } from '@tamagui/themes';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Card, CardFooter, CardHeader, Image, Paragraph, Text, Theme, YStack } from 'tamagui';

type MovieCardProps = {
  movie: ResultItem;
};
const MovieCard = ({ movie }: MovieCardProps) => (
  //TODO Add The Tv Type
  <Link
    href={`/(drawer)/(home)/${movie.media_type === 'movie' ? 'Movie' : 'Tv'}/${movie.id}`}
    asChild>
    <Card
      elevate
      width={150}
      height={260}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.975 }}
      animation={'bouncy'}>
      <CardHeader p={0}>
        <Animated.Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
          alt={movie.title}
          style={{ width: 150, height: 200 }}
        />
      </CardHeader>
      <CardFooter p={8}>
        <YStack>
          <Text color={themes.light.orange5}>{movie.name || movie.title}</Text>
          <Paragraph theme={'alt2'}>
            {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
          </Paragraph>
        </YStack>
      </CardFooter>
    </Card>
  </Link>
);
export default MovieCard;
