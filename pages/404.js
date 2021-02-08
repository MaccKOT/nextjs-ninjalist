import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Ooooops...</h1>
      <h2>Page not found.</h2>
      <p>
        &larr;{' '}
        <Link href='/'>
          <a>Go back to the Main page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
