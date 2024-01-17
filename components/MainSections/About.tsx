import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AboutMe } from '../AboutMe/AboutMe';
import { mantineBreakpointMD } from '../../constants/mantineBreakpointConstants';
import { WorkExperienceWrapper } from '../WorkExperience/WorkExperienceWrapper';

export function About() {
  const isMediumBreakpoint = useMediaQuery(`(max-width: ${mantineBreakpointMD})`);
  return (
    <section id="personal-section">
      <Container maw={1400} py={40}>
        <Grid columns={20} align="center">
          <Grid.Col span={isMediumBreakpoint ? 20 : 8}>
            <AboutMe />
          </Grid.Col>
          <Grid.Col span={isMediumBreakpoint ? 20 : 12}>
            <WorkExperienceWrapper />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
