import logo from '../assets/icon/logo-uplab.ico'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='bg-red-500'>
        <img src={logo} alt="Logo" />
        <NavBar/>
    </header>
  )
}
