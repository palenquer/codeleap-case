import React from 'react';

interface DeleteModalButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DeleteModalButton({ text, onClick }: DeleteModalButtonProps) {
  return (
    <button
      type="button"
      className="w-28 h-8 text-sm font-bold border border-black hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
