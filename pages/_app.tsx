import { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const desiredChainId = ChainId.Mainnet;
    return (
        <ThirdwebProvider desiredChainId={desiredChainId}>
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
