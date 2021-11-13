import React from 'react';
import { GetState, IUserState } from '../../../../types/user';

interface PostHeaderProps {
  item: GetState;
  stateStore: IUserState;
  children: React.ReactNode;
}

export default function PostHeader({ item, stateStore, children }: PostHeaderProps) {
  return (
    <div className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h2>{item.title}</h2>

      {item.username === stateStore.username && <div className="flex gap-4">{children}</div>}
    </div>
  );
}
