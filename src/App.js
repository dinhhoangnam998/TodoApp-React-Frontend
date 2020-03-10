import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import { fetchingTodo } from "./redux/slice/exchangetodo"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingTodo())
  }, [])
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
