import React from 'react';

interface PatchModalTextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function PatchModalTextArea({ label, value, onChange }: PatchModalTextAreaProps) {
  return (
    <label htmlFor="content" className="flex flex-col">
      {label}
      <textarea
        id="content"
        className="h-24 py-1 px-4 resize-none rounded-md border-2 border-gray-500"
        value={value}
        placeholder="Content here"
        onChange={onChange}
      />
    </label>
  );
}
