import React from 'react';

interface PatchModalButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PatchModalButton({ text, onClick }: PatchModalButtonProps) {
  return (
    <button type="button" className="mt-4 w-28 h-8 text-sm text-white bg-black font-bold ml-auto" onClick={onClick}>
      {text}
    </button>
  );
}
