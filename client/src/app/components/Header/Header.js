import Link from "next/link"
import style from './style.module.scss'
import Button from '@mui/material/Button';


export default function Header() {
    return (
        <div>
            <>
                <div className={style.container}>
                    <nav>
                        <p>About us</p>
                        <p>Brands</p>
                        <p>Commissions</p>
                        <p>News</p>
                        <p>Contact us</p>
                        <p>Careers</p>
                        <p className={style.home}><Link href="/">Go to main page</Link></p>
                    </nav>

                    <div className={style.btnTag}>
                        <Button className={style.planet} variant="outlined">
                            <div className={style.img}>
                                En
                            </div>
                        </Button>
                        <Button variant="outlined"><Link href="/reg">Sign Up</Link></Button>
                        <Button variant="contained"><Link href="/auth">Log In</Link></Button>
                    </div>
                </div>
            </>

        </div>
    )
}
