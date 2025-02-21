import {
  Accordion,
  Anchor,
  Badge,
  Center,
  Flex,
  Group,
  Grid,
  Image,
  Stack,
  Text,
  ThemeIcon
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink, IconMapPinFilled } from '@tabler/icons-react';
import { WORK_EXPERIENCE_LIST, WorkExperience } from '@/constants/workExperienceConstants';
import { MANTINE_BREAKPOINT_MD } from '@/constants/constants'
import { Section } from '../Templates/Section';

function generateExperienceTitle(item: WorkExperience) {
  return item.jobTitle.concat(" @ ").concat(item.company);
}

function getLatestExperience(workExperienceList: WorkExperience[]) {
  return workExperienceList.reduce((last, current) => (current.id > last.id ? current : last), workExperienceList[0]);
}

export function Experience() {
  const isMobile = useMediaQuery(`(max-width: ${MANTINE_BREAKPOINT_MD})`);

  return (
    <Section id="experience-section" title="My professional experience">
      <Accordion
        variant="separated"
        radius="md"
        defaultValue={generateExperienceTitle(getLatestExperience(WORK_EXPERIENCE_LIST))}
      >
        {WORK_EXPERIENCE_LIST.map(item => {
          return (
            <Accordion.Item key={item.id} value={generateExperienceTitle(item)}>
              <Accordion.Control>
                <Group justify="space-between">
                  <Text fw={700} size="lg">{generateExperienceTitle(item)}</Text>
                  <Text pr={10}>{item.dateRange}</Text>
                </Group>
              </Accordion.Control>
              <Accordion.Panel>
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 10}>
                    <Stack gap="md">
                      <Flex justify="flex-start" align="center" wrap="wrap" gap={isMobile ? "xs" : "xl"}>
                        <Group gap="xs">
                          <ThemeIcon variant="white">
                            <IconMapPinFilled size={25} />
                          </ThemeIcon>
                          <Text>{item.location}</Text>
                        </Group>
                        <Anchor
                          component="a"
                          href={"https://".concat(item.website)}
                          target="_blank"
                          size="compact-md"
                          variant="transparent"
                          color="black"
                          style={{
                            textDecoration: 'none'
                          }}
                        >
                          <Group gap="xs">
                            <ThemeIcon variant="white">
                              <IconExternalLink size={25} />
                            </ThemeIcon>
                            <Text>{item.website}</Text>
                          </Group>
                        </Anchor>
                      </Flex>
                      <Text>{item.jobDescription}</Text>
                      <Flex justify="flex-start" align="flex-start" wrap="wrap" gap={10} py={5}>
                        {item.skills.map(skill => {
                          return <Badge key={skill} color="mainBlue.4">{skill}</Badge>
                        })}
                      </Flex>
                    </Stack>
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 2}>
                    <Center>
                      <Image
                        src={item.image}
                        alt={item.company}
                        w="20vh"
                      />
                    </Center>
                  </Grid.Col>
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </Section>
  );
}