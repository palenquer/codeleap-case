import React from 'react';
import { Link } from 'react-router-dom';

interface SignupButtonProps {
  username: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export default function SignupButton({ username, onClick, text }: SignupButtonProps) {
  return (
    <Link className="ml-auto" to="/main">
      <button
        type="button"
        className="mt-4 w-28 h-8 text-sm text-white bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={username.length === 0}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
}
