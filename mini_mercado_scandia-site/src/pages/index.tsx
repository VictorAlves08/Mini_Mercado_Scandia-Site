import NextHead from '@/components/NextHead';

import Header from '../components/Header/index';
import Welcome from '../components/Welcome';

import GlobalStyles from '@/styles/GlobalStyles';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <NextHead />
      <Header />
      <Welcome />
    </>
  )
}
