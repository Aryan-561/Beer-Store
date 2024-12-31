import React from "react";
import useBeerInfo from "./hook/useBeerInfo";
import { useDispatch } from "react-redux";
import { getData } from "./store/beerSlice";
import { Header, CardContainer } from "./component";


function App() {
  const dispatch = useDispatch();
  const data = useBeerInfo();
  dispatch(getData(data));

  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
}

export default App;
