import type { FC } from 'react'
import Image from 'next/image'
import { useMetamask } from '@thirdweb-dev/react'

const Login: FC = () => {
    const connectWithMetamask = useMetamask();

    return (
        <div className='bg-slate-900 min-h-screen flex flex-col items-center justify-center text-center p-5'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <Image className='rounded-full mb-10' height="224px" width="224px" src='/images/crypto_lottery.png' alt="Crypto Lottery" />
                <h1 className='text-6xl text-white font-bold mb-4'>Crypto Lottery</h1>
                <h2 className='text-white'>Get Started by logging in with your Metamask</h2>
            </div>

            <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold hover:bg-slate-600 hover:text-white'>
                Login with Metamask
            </button>
        </div>
    )
}

export default Login