import { useOutletContext } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import '../styles/home.css'

const Home = () => {
    const { data } = useOutletContext();
    const navigate = useNavigate();
    return(
        <div className="home">
            <h1 className="table-title">Users Details</h1>
            <div className="table-data">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>College Name</th>
                            <th>More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((users) => {
                        return(
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.age}</td>
                            <td>{users.email}</td>
                            <td>{users.password}</td>
                            <td>{users.college}</td>
                            <td><button onClick={() => navigate(`/users/${users.id}`)} className="btn-view">View More</button></td>
                        </tr>
                        )})}
                        <tr className="Add-User">
                            <td  colspan="6"><button onClick={() => navigate(`/register`)} className="btn-view">Add User +</button></td>
                        </tr>
                    </tbody>
            </table>  
                
            </div>
        </div>
    )
}

export default Home;