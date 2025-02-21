import { Title, Text, Image, Container, Center, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MANTINE_BREAKPOINT_SM } from '../../constants/constants';

export function Welcome() {
  const isMobile = useMediaQuery(`(max-width: ${MANTINE_BREAKPOINT_SM})`);
  return (
    <section id="welcome-section">
      <Container size="100%">
        <Container style={{ marginTop: "10vh", marginBottom: "5vh" }} pb={40}>
          <Flex justify="center" align="center" direction="column">
            <Title order={1} size="400%" ta="center">Hey, I'm Matt Hoppitt</Title>
            <Text size="140%" my={30} ta="center">I build high-quality software</Text>
            <Image
              w={isMobile ? "50%" : "25%"}
              my={"2vh"}
              src="/avatar.png"
            />
          </Flex>
          {!isMobile &&
            <Center>
              <Image
                src="/mouse-scroll.gif"
                alt="mouse-scroll-gif"
                w="10vh"
                pt="5vh"
              />
            </Center>
          }
        </Container>
      </Container>
    </section>
  );
}
