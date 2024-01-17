import { Container, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mantineBreakpointMD } from '../../constants/mantineBreakpointConstants';
import { ProjectTabs } from '../Projects/ProjectTabs';
import { ProjectAccordion } from '../Projects/ProjectAccordion';

export function Projects() {
  const isMediumBreakpoint = useMediaQuery(`(max-width: ${mantineBreakpointMD})`);
  return (
    <section id="projects-section">
      <Container maw={1400} py={40}>
        <Text size="160%" ta="center" pb={20}>Here are some personal projects I've worked on</Text>
        {isMediumBreakpoint
          ? <ProjectAccordion />
          : <ProjectTabs />
        }
      </Container>
    </section>
  );
}
