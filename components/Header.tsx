import { Navbar } from '@nextui-org/react';
import Style from '../styles/Header.module.css'
export default function Header() {
  return (
    <Navbar variant='sticky' className={Style['nav-container']}>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
    </Navbar>

  )
}