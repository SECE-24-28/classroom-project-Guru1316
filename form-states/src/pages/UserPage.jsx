import { useOutletContext, useParams } from "react-router-dom";
import '../styles/user.css'

const Users = () => {
    const { data } = useOutletContext();
    const { id } = useParams();

    let usersData = data.find((ele) => {
        return (ele.id === Number(id));
    })

    if(!usersData)
    {
        return(
            <>
            <h1>User Not Found</h1>
            </>
        )
    }

    return(
        <>
        <h1>User Details</h1>
        <div className="users">
            <div className="gridContainer">
                <div>
                    <h2>Name: {usersData.name}</h2>
                    <h2>Age: {usersData.age}</h2>
                    <h2>Email: {usersData.email}</h2>
                    <h2>Passowrd: {usersData.password}</h2>
                    <h2>College: {usersData.college}</h2>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Users;