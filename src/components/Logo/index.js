import LogoSvg from './images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({className}) => (

  <Link  href="/">
    <a>
      <div className={className}>
        <Image
          src={LogoSvg}
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </a>
  </Link>
);


export default Logo;