import Link from 'next/link';
import Image from 'next/image'; //special next component with automatic lazy loading of images

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <div className='logo'>
          {/* <h1>Ninja List</h1> */}
          {/* All files in 'public' folder can be accessed directly without folder name */}
          <Image src='/logo.png' alt='NinjaList logo' width={128} height={77} />
        </div>
      </Link>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
