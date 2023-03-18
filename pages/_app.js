import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {

  return (<>
  <Head>
    <title>Campus Chronicles</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=DynaPuff&family=Oswald&display=swap" rel="stylesheet"/>
</Head>
  <Navbar/>
  {/* <Header/> */}
  <Component {...pageProps} />
  {/* <Footer/> */}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>  </>)
}

export default MyApp
