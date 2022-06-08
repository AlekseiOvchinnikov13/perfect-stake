import LogoSvg from './images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href="/#home">
    <a className="logo" style={{fontSize: '.05em'}}>
      <Image src={LogoSvg} alt="logo"/>
    </a>
  </Link>
);


export default Logo;