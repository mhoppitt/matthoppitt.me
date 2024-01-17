import { Group, Image, Stack, Text, ActionIcon, Badge, Flex, Accordion } from '@mantine/core';
import styled from 'styled-components';
import { projectList } from '@/constants/projectsConstants';

const StyledImage = styled(Image)<{src: string, alt: string, radius: string, w: string, h: number}>`
  &:hover {
    filter: invert(35%) sepia(99%) saturate(7499%) hue-rotate(222deg) brightness(103%) contrast(105%);
  }`;

export function ProjectAccordion() {
  return (
    <Accordion variant="filled" defaultValue={projectList[0].value} px={0}>
      {projectList.map(project => {
        return (
          <Accordion.Item value={project.value} key={project.value} py={10} px={0}>
            <Accordion.Control
              key={project.value}
              icon={
                <Image
                  src={project.icon}
                  w="auto"
                  h={45}
                />
              }
            >
              <Group gap={10}>
                <Text size="xl" fw={700}>{project.title}</Text>
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
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap={10} px={10}>
                <Text size="md">{project.description}</Text>
                <Flex align="center" justify="space-between" wrap="wrap" gap={10}>
                  {project.skills.map(skill => {
                    return <Badge key={skill} color="mainBlue.3">{skill}</Badge>
                  })}
                </Flex>
                <Flex align="center" justify="space-between" px={10}>
                  {project.techLogos.map(logoSrc => {
                    return (
                      <Image
                        key={logoSrc}
                        src={logoSrc}
                        w={60}
                        h="auto"
                      />
                    )
                  })}
                </Flex>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  );
}
