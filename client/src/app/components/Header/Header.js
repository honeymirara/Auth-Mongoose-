import Link from "next/link"


export default function Header() {
    return (
        <div>
            <p><Link href="/reg">go to registration page</Link></p>
            <p><Link href="/auth">go to authorization page</Link></p>
            <p><Link href="/">go to main page</Link></p>
        </div>
    )
}
