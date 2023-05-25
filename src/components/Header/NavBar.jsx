import React from 'react'
import './header.css'

const NavBar = ({navtabs}) => {
   
    return (
        <nav>
            <ul className='flex flex-row space-x-6'>
                {/* Active */}

                {
                    navtabs.map(
                        (val) => {
                           
                            return (
                                <li className='text-[18px] font-semibold hover:text-[#c39a58] hover:border-b-[2px] hover:border-[#c39a58] navLi'>
                                    <a href="#">{val}</a>
                                </li>
                            )
                        }
                    )
                }



            </ul>
        </nav>
    )
}

export default NavBar
