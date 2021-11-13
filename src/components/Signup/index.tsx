import React from 'react';

interface SignupProps {
  children: React.ReactNode;
}

export default function Signup({ children }: SignupProps) {
  return (
    <main className="flex flex-col justify-between p-6 w-full max-w-lg h-auto bg-white">
      <h1 className="mb-4">Welcome to CodeLeap Network!</h1>

      <div className="flex flex-col"> {children}</div>
    </main>
  );
}
