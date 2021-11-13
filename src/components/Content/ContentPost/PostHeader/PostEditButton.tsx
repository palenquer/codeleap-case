import React from 'react';
import { TiEdit } from 'react-icons/ti';

interface PostEditButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PostEditButton({ onClick }: PostEditButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <TiEdit className="w-6 h-6" />
    </button>
  );
}
