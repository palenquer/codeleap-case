import React from 'react';

interface DeleteModalProps {
  label: string;
  children: React.ReactNode;
}

export default function DeleteModal({ label, children }: DeleteModalProps) {
  return (
    <>
      <span>{label}</span>
      <div className="flex gap-4 mt-4 justify-end">{children}</div>
    </>
  );
}
