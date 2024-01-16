import { Stack, Text } from '@mantine/core';
import { WorkExperienceItem } from './WorkExperienceItem';
import { workExperienceList } from '@/constants/workExperienceConstants';

export function WorkExperienceWrapper() {
  return (
    <section id="work-experience">
     <Text fw={700} hiddenFrom="md">EXPERIENCE</Text>
        <Stack id="work-experience-list" gap={20}>
          {workExperienceList.map(item => {
            return <WorkExperienceItem key={item.jobTitle} workExperienceItem={item} />
          })}
      </Stack>
    </section>
  );
}
