import Image from 'next/image'
import type { FC } from 'react'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

import NavButton from './NavButton'

const Header: FC = () => {
    return (
        <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
            <div className="flex items-center space-x-2">
            <div>
                <Image
                    className='rounded h-20 w-20'
                    height="80px"
                    width="80px"
                    src="/images/crypto_lottery.png"/>
            </div>
            <div>
                <h1 className='text-lg text-white font-bold'>
                    Crypto Lottery
                </h1>
                <p className='text-xs text-blue-500'>
                    User...
                </p>
            </div>
            </div>
                
            <div className='bg-slate-800 hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
                <div className='p-4 space-x-2'>
                    <NavButton isActive title='Buy Tickets'/>
                    <NavButton title='Logout'/>
                </div>        
            </div>

            <div className='flex flex-col ml-auto text-right'>
                <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
                <span className='md:hidden'>
                    <NavButton title='Logout' />
                </span>
            </div>
           
        </header>
  )
}

export default Header