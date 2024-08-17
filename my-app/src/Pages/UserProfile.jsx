import React, { Fragment } from "react";
import User from "../Componants/User";
import HeaderUser from "../Componants/HeaderUser";

function UserProfile() {
  return (
    <Fragment>
      <HeaderUser/>
      <User />
    </Fragment>
  );
}

export default UserProfile;
