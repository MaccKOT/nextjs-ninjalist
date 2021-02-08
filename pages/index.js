//index.js for root path '/'

// import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
