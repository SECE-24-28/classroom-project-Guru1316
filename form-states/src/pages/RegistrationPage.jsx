import { useForm } from 'react-hook-form';
import '../styles/register.css'
import { useOutletContext } from 'react-router-dom';

const Register = () => {
    const { data, setData } = useOutletContext();
     const { register, handleSubmit} = useForm({
        defaultValues:{
                "id" : 1,
                "name": "Aadithya A",
                "age": 18,
                "email": "aadithya.a2024cse@sece.ac.in",
                "password": "24CS001",
                "college": "Sri Eshwar College Of Engineering"
        }}
     );
     const onSubmitHandler = (fdata) => {
        console.log(fdata);
        fdata.id = data.length + 1;
        setData([...data, fdata]);
        alert("Users Added Successfully");
    }
    return(
        <>
        <div className='forms'>
            <h1 className='title'>User Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label>Name</label>
                <input {...register("name")} type="text" placeholder="Enter Name" required></input>
                <label>Age</label>
                <input {...register("age")} type="number" placeholder="Enter Age" required></input>
                <label>Email</label>
                <input {...register("email")} type="email" placeholder="Enter Email" required></input>
                <label>Password</label>
                <input {...register("password")} type="password" placeholder="Enter Password" required></input>
                <label>College Name</label>
                <input {...register("college")} type="text" placeholder="Enter College" required></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}
export default Register;