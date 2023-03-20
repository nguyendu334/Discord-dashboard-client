import '../utils/styles/globals.scss';
import { AppPropsWithLayout } from '@/utils/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return getLayout(<Component {...pageProps} />);
}
