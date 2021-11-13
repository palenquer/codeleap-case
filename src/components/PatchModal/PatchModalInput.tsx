import React from 'react';

interface PatchModalInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PatchModalInput({ label, value, onChange }: PatchModalInputProps) {
  return (
    <label htmlFor="title" className="flex flex-col">
      {label}
      <input
        id="title"
        type="text"
        value={value}
        className="py-1 px-4 rounded-md border-2 border-gray-500"
        placeholder="Hello World"
        onChange={onChange}
      />
    </label>
  );
}
