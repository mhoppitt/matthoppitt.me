import {
  ActionIcon,
  Badge,
  Card,
  Center,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styled from 'styled-components';
import { MANTINE_BREAKPOINT_MD } from '@/constants/constants';
import { PROJECT_LIST } from '@/constants/projectsConstants';
import { Section } from '../Templates/Section';

const StyledImage = styled(Image)<{src: string, alt: string, radius: string, w: string, h: number}>`
  &:hover {
    filter: invert(35%) sepia(99%) saturate(7499%) hue-rotate(222deg) brightness(103%) contrast(105%);
  }`;

export function Projects() {
  const isMobile = useMediaQuery(`(max-width: ${MANTINE_BREAKPOINT_MD})`);

  return (
    <Section id="projects-section" title="Some personal projects I've worked on">
        <Group grow={!isMobile} align="stretch">
          {PROJECT_LIST.map(project => {
            return (
              <Card shadow="sm" padding="lg" radius="md" key={project.key} withBorder>
                <Stack gap={10} h="100%">
                  <Card.Section>
                    <Center>
                      <Image
                        src={project.icon}
                        w="auto"
                        h={80}
                        alt={project.key}
                      />
                    </Center>
                  </Card.Section>
                  <Title order={3}>
                    <Group justify="center">
                      <Text size="100%" ta="center">{project.title}</Text>
                      <ActionIcon component="a" href={project.repo} target="_blank" variant="transparent">
                        <StyledImage
                          src="/github-icon.png"
                          alt="github-icon"
                          radius="xl"
                          w="auto"
                          h={30}
                        />
                      </ActionIcon>
                    </Group>
                  </Title>
                  <Flex wrap="wrap" style={{ flexGrow: 1 }}>
                    <Text>{project.description}</Text>
                  </Flex>
                  <Flex justify="center" align="center" wrap="wrap" gap={10} py={5}>
                    {project.skills.map(skill => {
                      return <Badge key={skill} color="mainBlue.4">{skill}</Badge>
                    })}
                  </Flex>
                </Stack>
              </Card>
            )
          })}
        </Group>
    </Section>
  );
}
