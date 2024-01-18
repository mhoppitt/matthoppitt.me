import { Title, Text, Image, Container, Flex, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AppHeader } from '../AppHeader/AppHeader';
import { mantineBreakpointXS } from '../../constants/mantineBreakpointConstants';

export function Welcome() {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpointXS})`);
  return (
    <section id="welcome-section">
      <Container size="100%">
        <Container style={{ marginTop: "10vh" }} pb={40}>
          <Flex justify="center" align="center" direction="column">
            <Title order={1} size="400%" ta="center">Hey, I'm Matt Hoppitt</Title>
            <Text size="140%" my={30} ta="center">I build high-quality software</Text>
            <Image
              w={isMobile ? "50%" : "25%"}
              my={"2vh"}
              src="/avatar.png"
            />
            <Image
              w="80vh"
              maw="100%"
              my="2vh"
              src="/coding-clipart.png"
            />
          </Flex>
        </Container>
      </Container>
    </section>
  );
}
