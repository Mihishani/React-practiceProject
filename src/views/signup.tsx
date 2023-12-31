import React from 'react';
import { Link } from "react-router-dom";
import Input from "../input/input.tsx";

class Signup extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
            <section className={'flex justify-center items-center p-5'}>
                <div className={'w-fit p-10 border shadow-xl rounded-xl'}>

                    <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-24 m-auto'}/>

                    <div className={'text-2xl font-bold text-green-600 text-center mt-5'}>
                        Sign Up
                    </div>

                    <div className={'mt-5 min-w-[400px]'}>

                        <div className={'flex'}>
                            <Input type={'text'} name={'fname'} placeholder={'Frist Name'} label={'Frist name'} optional={true}/>

                            <Input type={'text'} name={'lname'} placeholder={'Last Name'} label={'Last name'} optional={true}/>

                        </div>

                        <Input type={'text'} name={'username'} placeholder={'Username'} label={'username'} optional={false}/>

                        <Input type={'email'} name={'email'} placeholder={'Email'} label={'email'} optional={false}/>

                        <Input type={'password'} name={'password'} placeholder={'Password'} label={'password'} optional={false}/>
                    </div>

                    <div className={'text-center mt-5'}>
                        <button className={'bg-green-600 text-white px-5 py-3 hover:bg-green-400'}>Sign Up</button>
                    </div>

                    <div className={'text-center mt-5'}>
                        Do have an account? <Link to={'/login'}><span className={'text-blue-600 underline'}>Sign in now</span></Link>
                    </div>

                </div>
            </section>
        );
    }
}

export default Signup;