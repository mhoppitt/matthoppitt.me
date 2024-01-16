import { Group, Text, ActionIcon, Image as MantineImage } from '@mantine/core';
import styled from 'styled-components'

const Image = styled(MantineImage)<{src: string, alt: string, radius: string, w: string, h: number}>`
  &:hover {
    filter: invert(35%) sepia(99%) saturate(7499%) hue-rotate(222deg) brightness(103%) contrast(105%);
  }`;

export function AboutMe() {
  return (
    <section id="about-me">
      <Text fw={700} hiddenFrom="md">ABOUT ME</Text>
      <Text style={{ paddingBottom: 10 }}>Back in 2014, I built my first HTML website and fell in love with the art of software engineering. Fast forward to
        today, equipped with a Bachelor of Information Systems and a fresh enthusiasm, I've now had the privilege of building
        software for one of Australia's largest insurers – and I'm just getting started.</Text>
      <Text style={{ paddingBottom: 10 }}>I truly believe software development is all about problem solving. I love identifying opportunities, creating software
        to solve them and overcoming the frustrations in between. My ambition is to become a highly adaptable engineer that can
        solve problems no matter the tech stack.</Text>
      <Text style={{ paddingBottom: 10 }}>With a background in Test Engineering, I have a unique eye for quality. I take pride in building robust solutions that
        cater for every need.</Text>
      <Group align="center" w="100%" justify="center" gap={30} py={10}>
        <ActionIcon component="a" href="https://github.com/mhoppitt" target="_blank" variant="transparent">
          <Image
            src="/github-icon.png"
            alt="github-icon"
            radius="xl"
            w="auto"
            h={35}
          />
        </ActionIcon>
        <ActionIcon component="a" href="https://au.linkedin.com/in/matt-hoppitt" target="_blank" variant="transparent">
          <Image
            src="/linkedin-icon.png"
            alt="linkedin-icon"
            radius="xl"
            w="auto"
            h={35}
          />
        </ActionIcon>
        <ActionIcon component="a" href="mailto:mhoppitt18@outlook.com" variant="transparent">
          <Image
            src="/email-icon.png"
            alt="email-icon"
            radius="xl"
            w="auto"
            h={35}
          />
        </ActionIcon>
      </Group>
    </section>
  );
}
