import { useState } from 'react';
import { Container, Group, Burger, Image, Button, Flex, Stack, Menu, em } from '@mantine/core';
import { useMediaQuery, useClickOutside } from '@mantine/hooks';
import { mantineBreakpointXS } from '../../constants/mantineBreakpointConstants';

const links = [
  { url: '/', label: 'HOME' },
  { url: '#personal-section', label: 'ABOUT' },
  { url: '#projects-section', label: 'PROJECTS' },
];

export function AppHeader() {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpointXS})`);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useClickOutside(() => setIsBurgerMenuOpen(false));

  const navbarItems = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      href={link.url}
      variant="subtle"
      size="lg"
      color={"#052FF"}
    >
      {link.label}
    </Button>
  ));

  const burgerMenuItems = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      href={link.url}
      variant="transparent"
      size="md"
      color="black"
      miw="100%"
      justify="right"
      onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
    >
      {link.label}
    </Button>
  ));

  return (
    <header id="navigation-bar">
      <Container maw={1300} style={{ paddingTop: isMobile ? 10 : 20, paddingLeft: 0, paddingRight: 0 }}>
        <Flex align="center" justify="space-between">
          <Button component="a" href="/" variant="transparent" h={50}>
            <Image
              radius="md"
              w="auto"
              h={45}
              fit="contain"
              src="/logo.png"
            />
          </Button>
          <Group gap={5} visibleFrom="xs">
            {navbarItems}
          </Group>
          <Menu width="100%">
            <Menu.Target>
              <Burger ref={ref} opened={isBurgerMenuOpen} onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)} hiddenFrom="xs" size="md" />
            </Menu.Target>
            <Menu.Dropdown>
              <Stack align="flex-end">
                {burgerMenuItems}
              </Stack>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Container>
    </header>
  );
}