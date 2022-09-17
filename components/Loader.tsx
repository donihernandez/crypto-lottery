import Image from 'next/image';
import type { FC } from 'react';
import { PropagateLoader } from 'react-spinners';

const Loader: FC = () => {
    return (
        <div
            className="bg-slate-900 h-screen flex 
        flex-col items-center justify-center"
        >
            <div className="flex items-center space-x-2 mb-10">
                <Image
                    alt="Crypto Lottery"
                    className="rounded-full mb-10"
                    height="80px"
                    src="/images/crypto_lottery.png"
                    width="80px"
                />
                <h1 className="text-lg text-white font-bold">
                    Loading Crypto Lottery
                </h1>
            </div>
            <PropagateLoader color="white" size={30} />
        </div>
    );
};

export default Loader;
