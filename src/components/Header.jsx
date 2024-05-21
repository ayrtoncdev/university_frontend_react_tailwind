import logo from '../assets/icon/logo-uplab.ico'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='bg-red-500 h-20 flex place-content-between p-2 items-center'>
        <img className='h-20' src={logo} alt="Logo" />
        <NavBar/>
    </header>
  )
}
