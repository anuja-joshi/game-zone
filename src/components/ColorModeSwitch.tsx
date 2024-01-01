import { useColorMode, Switch, HStack, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>{colorMode} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
