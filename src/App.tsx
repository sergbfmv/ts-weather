import React from 'react';
import s from './App.module.scss'
import { Container } from './module/Container/Container';
import { Result } from './module/Result/Result';
import {Search} from './module/Search/Search'

function App() {
  return (
    <div className={s.app}>
      <Container>
        <Search />
        <Result />
      </Container>
    </div>
  );
}

export default App;
