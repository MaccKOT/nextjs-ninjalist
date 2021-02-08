//index.js for root path '/'

import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>

      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        alias dolore ipsa earum perspiciatis explicabo, quaerat similique
        corporis rerum voluptas nisi hic esse reprehenderit, quo est quas
        dolorum praesentium et.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        alias dolore ipsa earum perspiciatis explicabo, quaerat similique
        corporis rerum voluptas nisi hic esse reprehenderit, quo est quas
        dolorum praesentium et.
      </p>

      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
