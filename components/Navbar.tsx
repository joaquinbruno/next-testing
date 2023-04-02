import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css"

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

export const Navbar = () => {
  return (
    <nav className={styles['menu']}>

    {
      menuItems.map( ({text, href}) => (
        <ActiveLink key={text} text={text} href={href}/>
      ))
    }

        {/* <ActiveLink text="Home" href="/">Home</ActiveLink>
        <ActiveLink text="About" href="/about">About</ActiveLink>
        <ActiveLink text="Contact" href="/contact">Contact</ActiveLink>
        <ActiveLink text="Pricing" href="/pricing">Pricing</ActiveLink> */}
    </nav>
    )
}

export default Navbar