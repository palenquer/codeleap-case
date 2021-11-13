import React from 'react';

interface PatchModalProps {
  label: string;
  children: React.ReactNode;
}

export default function PatchModal({ label, children }: PatchModalProps) {
  return (
    <>
      <span className="text-2xl font-bold">{label}</span>
      <div className="w-screen max-w-xl mt-4 flex flex-col gap-4">{children}</div>
    </>
  );
}
