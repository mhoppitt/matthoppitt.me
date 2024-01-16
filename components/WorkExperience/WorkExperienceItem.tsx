import { Grid, Flex, Card, Text, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { mantineBreakpointSM } from '../../constants/mantineBreakpointConstants';
import { WorkExperience } from '../../constants/workExperienceConstants';

type WorkExperienceItemProps = {
  workExperienceItem : WorkExperience,
}

export function WorkExperienceItem({workExperienceItem} : WorkExperienceItemProps) {
  const isMobile = useMediaQuery(`(max-width: ${mantineBreakpointSM})`);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Grid align="flex-start">
        <Grid.Col span={isMobile ? 12 : "content"} py={5}>
          <Text c="dimmed" tt="uppercase" size="xs">{workExperienceItem.dateRange}</Text>
        </Grid.Col>
        <Grid.Col span="auto" py={0}>
          <Text fw={700}>{workExperienceItem.jobTitle}</Text>
          <Text>{workExperienceItem.company}</Text>
          <Text size="sm">{workExperienceItem.jobDescription}</Text>
          <Flex justify="flex-start" align="flex-start" wrap="wrap" gap={10} py={5}>
            {workExperienceItem.skills.map(skill => {
              return <Badge key={skill} color="mainBlue.3">{skill}</Badge>
            })}
          </Flex>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
