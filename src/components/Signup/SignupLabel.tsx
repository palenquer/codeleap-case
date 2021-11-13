import React from 'react';

interface SignupLabelProps {
  label: string;
  username: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupLabel({ label, username, onChange }: SignupLabelProps) {
  return (
    <label htmlFor="username" className="flex flex-col gap-2">
      {label}
      <input
        id="username"
        type="text"
        value={username}
        className="py-1 px-4 rounded-md border-2 border-gray-500"
        placeholder="John doe"
        onChange={onChange}
      />
    </label>
  );
}
