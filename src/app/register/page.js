'use client';
import { useState } from "react";
import Image from "next/image";

function RegisterPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(e){
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body:JSON.stringify({email, password}),
            headers: {'Content-Type':'application/json'}
        })
    }
    return (
        <section className="text-center max-w-80 mx-auto">
            <h1 className="my-4 text-4xl text-primary font-semibold">Register</h1>
            <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
                <input type="email" name="email" id="email" placeholder="your email" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" id="password" placeholder="your passeord" className="form-control" value={password} onChange={ e => setPassword(e.target.value)}/>
                <button className="primary-btn">Register</button>
                <div className="my-4 text-gray-500">
                    Or login with Social
                </div>
                <button className="flex items-center gap-2">
                    <Image src={'/images/google.png'} alt="google" width="24" height="24"/>
                    Login with google</button>
            </form>
        </section>
    );
}

export default RegisterPage;