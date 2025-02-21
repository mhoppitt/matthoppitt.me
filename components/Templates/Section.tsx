import { Container, Text, Title } from '@mantine/core';

export function Section({id, title, children}: {id: string, title: string, children: JSX.Element}) {
  return (
    <section id={id}>
      <Container maw={1300} pt={40} pb={80}>
        <Title order={2} pt={40}>
          <Text size="100%" ta="center" pb={20}>{title}</Text>
        </Title>
        {children}
      </Container>
    </section>
  );
}
