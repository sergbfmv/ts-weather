import React from 'react';
import s from './App.module.scss'
import { Container } from './module/Container/Container';

function App() {
  return (
    <div className={s.app}>
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit illo vitae quae facilis qui expedita iste doloremque modi sit soluta quod, accusantium iure eos. Nulla unde aperiam minima expedita nisi?
      </Container>
    </div>
  );
}

export default App;
