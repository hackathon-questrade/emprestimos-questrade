import { Box, Flex, Text } from "@chakra-ui/react";
import HeroContent from "../Molecules/HeroContent";

const Hero = () => {
  return (
    <Flex
      position='relative'
      backgroundImage="url('/hero2.png')" // substitua pelo caminho da imagem de fundo desejada
      backgroundSize="cover"
      backgroundPosition="center"
      height="100%"
    >
      <HeroContent />
    </Flex>
  );
};

export default Hero;