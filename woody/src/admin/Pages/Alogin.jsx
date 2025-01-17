import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import AHeader from '../Comon_cpomnent/AHeader';
import AFooter from '../Comon_cpomnent/AFooter';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Alogin() {
    const redirect = useNavigate();

    useEffect(()=>{

        const  res = localStorage.getItem("adminid")
        if(res ==null)
            {
                redirect('/alogin')
            }
            else{
                redirect('/Dashboard')
            }
    },[])

    const [fromvalue, setfromvalue] = useState({
        email: "",
        password: "",
    })

    const getFrom = (e) => {
        setfromvalue({ ...fromvalue, [e.target.name]: e.target.value });
        console.log(fromvalue)
    }

    const submithandle = async(e)=>{
        e.preventDefault();

        // descturing
        const {email,password} = fromvalue;

        if(!email.trim() || !password.trim()){
            toast.error("email and password are required")
            console.error('email and password are required');
            return false;
        }

        // match process
        try {
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
                if(res.data.length === 0)
                {
                    toast.error("Email does not Exits")
                    console.error("Email does not Exits");
                    return false
                }

                const user = res.data[0];
                if(user.password !== password)
                    {
                        toast.error("incorrect Password")
                        console.error("incorrect Password")
                        return false
                    }

                // session created 
                localStorage.setItem('adminid',user.id);
                localStorage.setItem('aname',user.name);
                toast.success("login succssfull")
                console.log("login succssfull")
                setfromvalue({
                    email:"",
                    password:""
                })
                redirect("/Dashboard")
        } catch (error) {
            console.error("Error during login:",error)
        }
    }

    return (
        <>
            {/* <AHeader /> */}
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <form onSubmit={submithandle}>
                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>

                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <MDBInput name='email' value={fromvalue.email} onChange={getFrom} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput name='password' value={fromvalue.password} onChange={getFrom} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn as={<Link/>} className="mb-0 px-5" size='lg'>Login</MDBBtn>

                            </div>
                        </MDBCol>

                    </MDBRow>
                </form>

            </MDBContainer>
            <AFooter />
        </>
    );
}

export default Alogin;