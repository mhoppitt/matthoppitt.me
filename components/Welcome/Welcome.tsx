import { Title, Text, Anchor, Image, Center, Button } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit c="mainBlue.7" component="span">
          matthoppitt.me
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={1000} mx="auto" mt="xl">
        Stay tuned for a comprehensive breakdown of all my personal projects. Please feel free to connect with me on{' '}
        <Anchor href="https://au.linkedin.com/in/matt-hoppitt" target="_blank" size="lg">
          LinkedIn
        </Anchor>
        .
      </Text>
      <Center mt="xl">
        <Image
          px={30}
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src="/logo.png"
        />
        <Image
          px={30}
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src="/avatar.png"
        />
      </Center>
    </>
  );
}
