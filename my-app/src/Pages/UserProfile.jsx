import React, { Fragment } from "react";
import User from "../Componants/User";
import Header from "../Componants/Header";
import { useSelector } from 'react-redux';

function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header userName={user ? user.firstName : ''}/>
      <User />
    </Fragment>
  );
}

export default UserProfile;
