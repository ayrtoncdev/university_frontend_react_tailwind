import React from 'react'
import burguerMenu from '../assets/icon/menu-hamburguesa.svg'

export const NavBar = () => {
  return (
    <>
      <ul className='
        bg-green-400 hidden
        sm:flex sm:w-[438px] sm:place-content-evenly sm:text-base sm:items-center
        md:w-[800px] md:text-lg 
        '>
        <li>Institucional</li>
        <li>Infraestructura</li>
        <li>Carreras</li>
        <li>Académica</li>
        <li>Estudiantes</li>
      </ul>
      <img className="w-10 h-8 sm:hidden" src={burguerMenu} alt="Menu Hamburguesa" />
    </>
  )
}
