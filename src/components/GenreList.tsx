import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="7px">
          <HStack>
            <Image
              src={getCroppedUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
