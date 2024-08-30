import { Fragment } from "react"
import Error from "../Componants/Error"
import Header from "../Componants/Header";
import { useSelector } from 'react-redux';

function Error404() {
    const { user } = useSelector((state) => state.auth);

    return(
        <Fragment>
            <Header userName={user ? user.firstName : ''}/>
            <Error/>
        </Fragment>
    )
}
export default Error404