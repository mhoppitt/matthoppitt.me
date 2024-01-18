import { Group, Image, Stack, Tabs, Text, ActionIcon, Badge, Flex, ScrollArea } from '@mantine/core';
import styled from 'styled-components';
import { projectList } from '@/constants/projectsConstants';

const StyledImage = styled(Image)<{src: string, alt: string, radius: string, w: string, h: number}>`
  &:hover {
    filter: invert(35%) sepia(99%) saturate(7499%) hue-rotate(222deg) brightness(103%) contrast(105%);
  }`;

export function ProjectTabs() {
  return (
    <Tabs orientation="vertical" defaultValue={projectList[0].value}>
      <Tabs.List>
        {projectList.map(project => {
          return (
            <Tabs.Tab value={project.value} key={project.value} pl={10} leftSection={
              <Image
                src={project.icon}
                w="auto"
                h={60}
              />
            }>
              <Stack gap={10}>
                <Flex gap={10}>
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
                </Flex>
                <Flex justify="flex-start" align="flex-start" wrap="wrap" gap={10} py={5}>
                  {project.skills.map(skill => {
                    return <Badge key={skill} color="mainBlue.3">{skill}</Badge>
                  })}
                </Flex>
              </Stack>
              </Tabs.Tab>
          )
        })}
      </Tabs.List>
      {projectList.map(project => {
        return (
          <Tabs.Panel value={project.value} key={project.value} pl={20} style={{ width: 100 }}>
            <Text pb={10}>{project.description}</Text>
            <Flex align="center" justify="space-between" pb={10} px="20%">
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
            <ScrollArea scrollbars="x" offsetScrollbars>
              <Flex gap={20} wrap="nowrap" justify="center">
                {project.screenshots.map(screenshotSrc => {
                  return (
                    <Image
                      key={screenshotSrc}
                      src={screenshotSrc}
                      w="auto"
                      h={project.value == "matthoppitt-me" ? 300 : 420}
                    />
                  )
                })}
                {project.video && (
                  <video
                    width="auto"
                    height={420}
                    controls
                    controlsList="nodownload"
                  >
                    <source src={project.video}/>
                  </video>
                )}
              </Flex>
            </ScrollArea>
          </Tabs.Panel>
        )
      })}
    </Tabs>
  );
}
