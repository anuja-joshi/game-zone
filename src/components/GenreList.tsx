import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button
              fontSize="large"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
