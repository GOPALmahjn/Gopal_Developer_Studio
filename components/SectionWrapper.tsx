import type { ReactNode } from 'react';
import SectionHeader from '@/components/SectionHeader';

type SectionWrapperProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function SectionWrapper({ id, title, description, children }: SectionWrapperProps) {
  return (
    <section id={id} className="px-6 pb-20 pt-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={title} description={description} />
        {children}
      </div>
    </section>
  );
}
