'use client';
import { Welcome } from '../components/Sections/Welcome';
import { About } from '../components/Sections/About';
import { Experience } from '../components/Sections/Experience';
import { Projects } from '@/components/Sections/Projects';
import { AppFooter } from '@/components/AppFooter/AppFooter';
import { AppHeader } from '@/components/AppHeader/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader />
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <AppFooter />
    </>
  );
}
