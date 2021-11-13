import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

interface PostDeleteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PostDeleteButton({ onClick }: PostDeleteButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <MdDeleteForever className="w-6 h-6" />
    </button>
  );
}
