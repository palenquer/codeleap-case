import React from 'react';

interface ContentFormProps {
  text: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export default function ContentForm({ text, onSubmit, children }: ContentFormProps) {
  return (
    <div className="p-6 border-2 border-gray-500">
      <h1>{text}</h1>

      <form className="flex flex-col gap-4 mt-6" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}
