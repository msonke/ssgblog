import Link from 'next/link'

export default function Header() {
    return (
        <header>
        <div className="container">
            <Link href='/' legacyBehavior>
                <h2>Dev Blog</h2>
            </Link>
        </div>
        </header>
    );
}