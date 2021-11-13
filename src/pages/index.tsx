import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import getUser from '../actions/dispatch/getUser';
import { IUserState } from '../types/user';

import Signup from '../components/Signup';
import SignupLabel from '../components/Signup/SignupLabel';
import SignupButton from '../components/Signup/SignupButton';

export default function Home() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleClick = useCallback(
    (name: IUserState) => {
      dispatch(getUser(name));
    },
    [dispatch],
  );

  return (
    <Signup>
      <SignupLabel
        label="Please enter your username"
        username={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <SignupButton
        username={username}
        onClick={() =>
          handleClick({
            username,
          })
        }
        text="ENTER"
      />
    </Signup>
  );
}
