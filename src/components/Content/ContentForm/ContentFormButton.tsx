import React from 'react';

interface ContentFormButtonProps {
  title: string;
  content: string;
  text: string;
}

export default function ContentFormButton({ title, content, text }: ContentFormButtonProps) {
  return (
    <button
      type="submit"
      className="mt-4 w-28 h-8 text-sm text-white bg-black font-bold ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={title.length === 0 || content.length === 0}
    >
      {text}
    </button>
  );
}
