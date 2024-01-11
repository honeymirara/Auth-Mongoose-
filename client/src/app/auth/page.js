'use client'
import Header from "../components/Header/Header"
import style from './style.module.scss'

export default function Auth() {
    return (
        <>
            <Header />
            <div className={style.container}>
                <div className={style.palms}></div>
                <form className={style.form}>
                    <h1>Authorization</h1>
                    <input placeholder="email"></input>
                    <input placeholder="password"></input>
                    <button className={style.button}>
                        Login
                    </button>
                </form>
            </div>
        </>)

}