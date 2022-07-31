import ActiveLink from "./ActiveLink";
import styles from './Navbar.module.css'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export default function Navbar() {

    return (
        <nav className={styles['container-menu']}>
            {menuItems.map((item) => (<ActiveLink key={item.href} root={item.href} text={item.text} />))}
        </nav>
    )
}