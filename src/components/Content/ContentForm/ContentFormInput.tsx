import React from 'react';

interface ContentFormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContentFormInput({ label, value, onChange }: ContentFormInputProps) {
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
