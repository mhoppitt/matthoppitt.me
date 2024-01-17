'use client';
import { Welcome } from '../components/MainSections/Welcome';
import { About } from '../components/MainSections/About';
import { Projects } from '@/components/MainSections/Projects';

export default function App() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
    </>
  );
}
