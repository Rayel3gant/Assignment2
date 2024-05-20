import React from 'react'
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import route from "../assets/route.png"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

const Navbar = () => {
  return (
    <div className='w-full lg:mx-[44px] px-3 items-center flex justify-between py-3'>

        <div className='w-fit lg:w-[510px] flex items-center gap-x-1 place-content-start  '>
            <p className='lg:text-[16px] text-[#292355] font-semibold'>Track Your Order</p>
            <img className='w-[46.02px] h-[38.33px]' src={route} alt=''/>
        </div>


        <div>
            <img src={logo} alt='' className='w-[150px] md:w-[210px] h-[70px]'/>
        </div>


        <div className='hidden md:flex lg:w-[370px] items-center gap-x-5 font-semibold'>
            <p className='text-[#818181] text-[17.5px]'>Home</p>
            <p className='text-[#818181] text-[17.5px]'>Service</p>
            <p className='text-[#818181] text-[17.5px]'>About Us</p>
            <p className='text-[#818181] text-[17.5px]'>Login</p>
        </div>


        <div className=' visible md:hidden '>
            <Menu menuButton={<MenuButton><GiHamburgerMenu/></MenuButton>} transition>
                <MenuItem>Home</MenuItem>
                <MenuItem>Service</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Login</MenuItem>
            </Menu>
        </div>

        

    </div>
  )
}

export default Navbar