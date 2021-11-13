import React from 'react';

interface ContentPostProps {
  children: React.ReactNode;
}

export default function ContentPost({ children }: ContentPostProps) {
  return <div className="gap-8 flex flex-col mt-8">{children}</div>;
}
