import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/styles.css';
import TopNav from '../components/TopNav';

export default function MyApp({ Component, pageProps}){
    return (
        <>
            <TopNav/>
            <Component {...pageProps} />
        </>
    )
}

