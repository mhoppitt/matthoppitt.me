import { useState } from 'react';
import {
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Menu,
  Stack,
} from '@mantine/core';
import { useClickOutside, useMediaQuery } from '@mantine/hooks';
import { PAGE_WIDTH } from '@/constants/constants';
import { MANTINE_BREAKPOINT_SM } from '@/constants/constants';

const navLinks = [
  { url: '/', label: 'HOME' },
  { url: '#about-section', label: 'ABOUT' },
  { url: '#experience-section', label: 'EXPERIENCE' },
  { url: '#projects-section', label: 'PROJECTS' },
];

export function AppHeader() {
  const isMobile = useMediaQuery(`(max-width: ${MANTINE_BREAKPOINT_SM})`);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const ref = useClickOutside(() => setIsBurgerMenuOpen(false));

  const navbarItems = navLinks.map((link) => (
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

  const burgerMenuItems = navLinks.map((link) => (
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
      <Container maw={PAGE_WIDTH} pl={0} pr={isMobile ? 20 : 0} pt={isMobile ? 10 : 20}>
        <Flex align="center" justify="space-between">
          <Button component="a" href="/" variant="transparent" h={50}>
            <Image
              radius="md"
              w="auto"
              h={50}
              fit="contain"
              src="/logo.png"
            />
          </Button>
          <Group gap={5} visibleFrom="sm">
            {navbarItems}
          </Group>
          <Menu width="100%">
            <Menu.Target>
              <Burger
                ref={ref}
                opened={isBurgerMenuOpen}
                onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
                hiddenFrom="sm"
                size="md"
              />
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