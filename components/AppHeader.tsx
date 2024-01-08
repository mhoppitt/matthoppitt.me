import { useState } from 'react';
import { Container, Group, Burger, Image, Button, Flex, Stack, Menu, em } from '@mantine/core';
import { useMediaQuery, useClickOutside } from '@mantine/hooks';

const links = [
  { url: '/', label: 'HOME' },
  { url: '#about', label: 'ABOUT' },
  { url: '#projects', label: 'PROJECTS' },
];

export function AppHeader() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
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

  const burgerItems = links.map((link) => (
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
    <header>
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
                {burgerItems}
              </Stack>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Container>
    </header>
  );
}