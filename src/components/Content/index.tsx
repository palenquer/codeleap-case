import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <main className="flex flex-col justify-between p-8 w-full md:max-w-4xl bg-white">{children}</main>;
}
