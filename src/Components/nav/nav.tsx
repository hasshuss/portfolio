import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import background from "../../images/logohch.webp"


export default function Nav() {
  const [activeLink, setActiveLink] = useState<string>('');
  const router = useRouter();



  const isHomePage = router.pathname === '/';
  const homeActiveClass = isHomePage && !activeLink ? 'active' : '';

  return (
    <header>
      <nav id="nav">
        <div className='LogoHeader'>
          <a href='https://www.cheikh-hussein.com/'>
          <Image
            src={background}
            alt="Hassan Cheikh Hussein"
            width={40}
            height={40}
          />
          </a>
        </div>
        <ul className="NavContainer">
          <li className="NavElementContainer">
            <a className='NavElement' href="#AncreSkills">Compétences</a>
          </li>
          <li className="NavElementContainer">
            <a className='NavElement' href="#Portfolio">Portfolio</a>
          </li>
          <li className="NavElementContainer">
            <a className='NavElement' href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}