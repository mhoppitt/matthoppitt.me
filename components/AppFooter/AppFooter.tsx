import {
  ActionIcon,
  Container,
  Grid,
  Group,
  Image as MantineImage,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import styled from 'styled-components'
import { PAGE_WIDTH } from '@/constants/constants';
import { MANTINE_BREAKPOINT_SM } from '@/constants/constants';

const Image = styled(MantineImage)<{src: string, alt?: string, radius?: string, w: string | number, h?: number}>`
  & {
    filter: invert(1);
  }
  &:hover {
    filter: brightness(0);
  }`;

export function AppFooter() {
  const isMobile = useMediaQuery(`(max-width: ${MANTINE_BREAKPOINT_SM})`);

  return (
    <footer id="footer">
      <div style={{ background: "var(--mantine-color-mainBlue-6)" }}>
        <Container maw={PAGE_WIDTH} py={20}>
          <Grid align="center">
            <Grid.Col span={isMobile ? 12 : 6}>
              <Group gap={50} justify="center">
                <MantineImage
                  w={60}
                  src="/avatar-no-bg.png"
                />
                <Text c="white" ta="center">I build high-quality software</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={isMobile? 12 : 6}>
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
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </footer>
  );
}