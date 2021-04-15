import { useQuery } from '@apollo/client';
import React from 'react';
import './App.scss';
import { Avatar, ListItem, TopBar } from './components';
import { getUsers } from './queries';

function App() {

  const {data} = useQuery(getUsers)

  console.log(data)

  return (
    <div className="kliqr-app">
      <TopBar/>
      <main>
        {/* <List />
        <Detail /> */}
        main
      </main>
    </div>
  );
}

export default App;
