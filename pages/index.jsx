import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Layout></Layout>
    </>
  );
}
