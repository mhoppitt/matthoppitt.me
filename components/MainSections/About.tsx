import { Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AboutMe } from '../AboutMe/AboutMe';
import { mantineBreakpointSM } from '../../helpers/constants';
import { WorkExperienceWrapper } from '../WorkExperience/WorkExperienceWrapper';

export function About() {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpointSM})`);
  return (
    <section id="personal-section">
      <Container size={isMobile ? "100%" : "90%"} py={20}>
        <Grid columns={20} align="center">
          <Grid.Col span={isMobile ? 20 : 8}>
            <AboutMe />
          </Grid.Col>
          <Grid.Col span={isMobile ? 20 : 12}>
            <WorkExperienceWrapper />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
