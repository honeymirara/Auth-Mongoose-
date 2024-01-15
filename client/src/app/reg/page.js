'use client'

import { useState } from "react"
import Header from "../components/Header/Header"
import style from './style.module.scss'
import axios from 'axios';


export default function Reg() {
    const [inp, setInp] = useState({ name: '', lastname: '', age: '', email: '', password: '' })


    function changeInput(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    async function sendData() {
        console.log(inp);
        const data = await axios.post('http://localhost:3000/user', inp, {
            withCredentials: true
        });
        console.log(data)
    }



    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.form}> 
                    <h1>Registration</h1>
                    <input onChange={changeInput} placeholder="name" name="name"></input>
                    <input onChange={changeInput} placeholder="lastname" name="lastname"></input>
                    <input onChange={changeInput} placeholder="age" name="age"></input>
                    <input onChange={changeInput} placeholder="email" name="email"></input>
                    <input onChange={changeInput} placeholder="password" name="password"></input>
                    <button onClick={sendData}>Sign Up</button>
                </div> 
            </div>
        </>
    )
}
