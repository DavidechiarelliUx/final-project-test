import Head from 'next/head';
import Image from 'next/image';

// import components
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import CardList from '../components/cardList/CardList';
import Info from '@/components/information';
import Footer from '../components/footer/Footer';
import CardAdventure from '../components/CardAdventure';

import styles from '@/styles/Home.module.scss';



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <CardList/>
      <Info/>
      <CardAdventure/>
      <Footer/>
    </>
  )
}
