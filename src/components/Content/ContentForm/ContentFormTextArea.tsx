import React from 'react';

interface ContentFormTextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function ContentFormTextArea({ label, value, onChange }: ContentFormTextAreaProps) {
  return (
    <label htmlFor="content" className="flex flex-col">
      {label}
      <textarea
        id="content"
        value={value}
        className="h-24 py-1 px-4 resize-none rounded-md border-2 border-gray-500"
        placeholder="Content here"
        onChange={onChange}
      />
    </label>
  );
}
