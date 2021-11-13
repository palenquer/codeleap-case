import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages';
import Main from './pages/main';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center px-4 md:px-0 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
