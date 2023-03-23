
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Link from "next/link";



// const inter = Inter({
//   variable: '--inter-font',
// })
// MAIN HOMEPAGE

function HomePage() {

  
  return (
    <>
      <h1>Homepage</h1>
      <Link href="/countries" className="link">All Countries</Link>
    </>
  );
}

export default HomePage;
