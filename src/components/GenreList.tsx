import {
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenre();

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
