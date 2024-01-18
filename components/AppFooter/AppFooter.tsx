import { Container, Grid, Stack, Group, Image as MantineImage, Text, ActionIcon } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mantineBreakpointSM } from '../../constants/mantineBreakpointConstants';
import styled from 'styled-components'

const Image = styled(MantineImage)<{src: string, alt?: string, radius?: string, w: string | number, h?: number}>`
  & {
    filter: brightness(0) invert(1);
  }`;

export function AppFooter() {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpointSM})`);
  return (
    <header id="navigation-bar">
      <div style={{ background: "var(--mantine-color-mainBlue-7)" }}>
        <Container maw={1300} py={30}>
          <Grid align="center">
            <Grid.Col span={isMobile? 12 : 6}>
              <Stack justify="center" align="center" gap={15}>
                <MantineImage
                  w={80}
                  src="/avatar-no-bg.png"
                />
                <Text c="white" ta="center">I build high-quality software</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={isMobile? 12 : 6}>
              <Stack gap={10}>
                {!isMobile && (
                  <Text c="white" ta="center" fw={700} size="lg">SOCIALS</Text>
                )}
                <Group justify="center" align="center" gap={30}>
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
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </header>
  );
}