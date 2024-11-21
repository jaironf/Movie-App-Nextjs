import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from '@nextui-org/react';
import DarkMode from '../components/DarkMode';
import SearchMovie from './SearchMovie';




const Header = () => {

  return (
    <Navbar isBordered maxWidth='xl'>
    <NavbarContent justify='start'>
      <NavbarBrand className='mr-4'>
        <p className='hidden sm:block font-bold text-inherit'>FilmApp</p>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className='hidden sm:flex gap-3' justify='center'>
        <NavbarItem>
          <Link color='danger' href='/'>
            Main Page
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        </NavbarItem>
      </NavbarContent>

    <NavbarContent as='div' className='items-center' justify='center'>
      <SearchMovie />
    </NavbarContent> 
    <NavbarContent justify='end'>
        <DarkMode />
    </NavbarContent>
  </Navbar>
  )
}

export default Header