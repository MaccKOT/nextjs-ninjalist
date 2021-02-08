//index.js for root path '/'

// import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        alias dolore ipsa earum perspiciatis explicabo, quaerat similique
        corporis rerum voluptas nisi hic esse reprehenderit, quo est quas
        dolorum praesentium et.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        alias dolore ipsa earum perspiciatis explicabo, quaerat similique
        corporis rerum voluptas nisi hic esse reprehenderit, quo est quas
        dolorum praesentium et.
      </p>

      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
