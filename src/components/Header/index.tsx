import React from 'react';

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <header className="p-8 w-full md:max-w-4xl text-white bg-black ">
      <h1>{text}</h1>
    </header>
  );
}
