import React from 'react';
import { Link } from 'react-router-dom';

interface SignupFailProps {
  text: string;
  buttonText: string;
}

export default function SignupFail({ text, buttonText }: SignupFailProps) {
  return (
    <main className="flex flex-col justify-between p-6 w-full max-w-lg h-auto bg-white">
      <h1>{text}</h1>
      <Link className="ml-auto" to="/">
        <button type="submit" className="mt-4 w-36 h-8 text-sm text-white bg-black">
          {buttonText}
        </button>
      </Link>
    </main>
  );
}
