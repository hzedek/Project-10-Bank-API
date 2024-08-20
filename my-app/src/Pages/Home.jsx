import React, { Fragment } from "react";
import HomeMain from "../Componants/Home";
import Header from "../Componants/Header";
import { useSelector } from 'react-redux';


function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header userName={user ? user.firstName : ''}/>
      <HomeMain />
    </Fragment>
  );
}

export default Home;
