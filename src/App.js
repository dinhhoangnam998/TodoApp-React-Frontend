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
    // eslint-disable-next-line
  }, [])
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
