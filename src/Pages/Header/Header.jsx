import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    
    <header>

        <nav className='flex justify-around pt-4'>

            <div> <NavLink to={'/'}>
                <h4 className='font-bold text-orange-500'> Huls.online </h4>
            </NavLink> </div>

            <div>

                <li className='list-none flex space-x-3'>
                    <NavLink to={'/Contact'}>
                        <ul className='hover-nav'> contact </ul>
                    </NavLink>
                    <NavLink to={'/About'}>
                        <ul className='hover-nav'> about </ul>
                    </NavLink>
                    <NavLink to={'/Learning'}>
                        <ul className='hover-nav'> learning </ul>
                    </NavLink>
                </li>

            </div>

        </nav>

    </header>
    
  )
}
