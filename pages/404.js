import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // console.log('useEffect run');
    setTimeout(() => {
      // router.go(-1) - redirect user to prevoius page
      router.push('/');
    }, 3000);
  }, []);

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
