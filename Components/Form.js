import React from "react";
import bgimg from '../assets/Group 2.png';
import{useForm} from 'react-hook-form';

export default function Form(){

    //react-hook-form -- Using Get Inputs and validations
    const{register,handleSubmit,watch,formState:{errors}} = useForm()

    //Display in the console......
    const onSubmit = data => console.log(data);
    return(

            <div className="register">
                <div className="col-1">
                    <div className="col-1num">
                <h2>Register...</h2>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <label form= "username" >Full Name:</label>
                    <input id= "username" type="text" {...register("username",{required:true,validate: (value) => {
                            return (
                                [/[a-z]/, /[A-Z]/].every((pattern) =>
                                    pattern.test(value)
                                )
                            );
                        },})} placeholder='Full Name'/>
                    <p className="v1">{errors.username?.type === "required" && "Full Name is required"}</p>
                   <p className="v1">{errors.username?.type === "validate" && "Cannot Special Chars, Only Lower, Upper"}</p>


                    <label form="employeeID" className="label">Employee ID:</label>
                    <input type= "text" id ="employeeID"{...register("Employee_ID",{required:true})} placeholder= 'Employee ID'/>

                    <p className="v1"> {errors.Employee_ID?.type === "required" && "Employee ID is required"} </p>


                    <label form="Pnumber" className="label">Mobile Number:</label>
                    <input type= "text" id="Pnumber" {...register("Pnumber",{required:true, maxLength:10})} placeholder= 'Phone Number'/>

                    <p className="v1">{errors.Pnumber?.type === "required" && "Mobile Number is required"}</p>
                   <p className="v1"> {errors.Pnumber?.type === "maxLength" && "MaxLength exceed"}</p>

                    <label form="Email" className="label">Email:</label>
                    <input type= "email" id="Email" {...register("Email",{required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} placeholder= 'Email'/>

                   <p className="v1"> {errors.Email?.type === "required" && "Email is required"}</p>
                    <p className="v1"> {errors.Email?.type === "pattern" && "Invalid email address"}</p>

                    <label form="Password" className="label">Password:</label>
                    <input type= "password" id="Password" {...register("Password",{required:true,maxLength:8}, )} placeholder= 'Password'/>

                    <p className="v1">{errors.Password?.type === "required" && "Password is required"}</p>
                    <p className="v1">{errors.Password?.type === "maxLength" && "MaxLength exceed"}</p>


                    <label form="CPassword" className="label">Confirm Password:</label>
                    <input type= "password"{...register("CPassword",{required:true,maxLength:8,validate: (val: string) => {
                            if (watch('Password') !== val) {
                                return "Passwords do no match";
                            }
                        },})} placeholder= 'Confirm Password'/>

                    <p className="v1"> {errors.CPassword?.type === "required" && "Confirm Password is required"}</p>
                    <p className="v1">{errors.CPassword?.type === "validate" && "Passwords do no Match"}</p>
                    <p className="v1">{errors.CPassword?.type === "maxLength" && "MaxLength exceed"}</p>


                    <div className="terms">
                    <p><span><input type="checkbox"></input></span> I agree to the Terms & Conditions.</p>
                    </div>
                    <button className='btn'>Register</button>
                    <p>Already have an Account? <a href="https://www.instagram.com">Login</a> </p>
                    <div className="para">

                    <p>Follow us on</p>

                    <div className="icons">
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                        <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                        <a href="#"><i className="ri-instagram-fill"></i></a>

                    </div>

                    </div>
                </form>
                    </div>
            </div>
            <div className="col-2">
                <img src={bgimg} alt=""/>

            </div>
        </div>


    )
}