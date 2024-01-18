'use client';
import { Welcome } from '../components/MainSections/Welcome';
import { About } from '../components/MainSections/About';
import { Projects } from '@/components/MainSections/Projects';
import { AppFooter } from '@/components/AppFooter/AppFooter';
import { AppHeader } from '@/components/AppHeader/AppHeader';

export default function App() {
  return (
    <>
      <AppHeader />
      <Welcome />
      <About />
      <Projects />
      <AppFooter />
    </>
  );
}
