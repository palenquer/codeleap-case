import React from 'react';
import { GetState } from '../../../../types/user';

interface PostContentProps {
  item: GetState;
}

export default function PostContent({ item }: PostContentProps) {
  return (
    <div className="border border-gray-500 px-8 py-4 flex flex-col gap-4">
      <div className="flex justify-between text-gray-500">
        <span className="font-bold">@{item.username}</span>

        <span>{item.created_datetime}</span>
      </div>

      <p>{item.content}</p>
    </div>
  );
}
