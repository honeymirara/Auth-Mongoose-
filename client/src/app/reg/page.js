import Header from "../components/Header/Header"


export default function Reg() {
    return (<>
        <Header />
        <h1>Registration</h1>
        <input placeholder="name"></input>
        <input placeholder="lastname"></input>
        <input placeholder="age"></input>
        <input placeholder="email"></input>
        <input placeholder="password"></input>
        <button>Sign Up</button>
    </>
    )
}
