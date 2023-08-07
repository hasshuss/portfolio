import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {

  return (
    <nav id="nav">
      <ul className="NavContainer">
        <Link href="/" className={`NavElementContainer`}>

          <li className="NavElement" >
            Home
          </li>
        </Link>
        <Link href="" className={`NavElementContainer`}>
          <li className="NavElement" >
            Services
          </li>
        </Link>
        <Link href="#AncreSkills" className={`NavElementContainer`}>
          <li className="NavElement" >
            Compétences
          </li>
        </Link>
        <Link href="" className={`NavElementContainer`}>
          <li className="NavElement" >
            Portfolio
          </li>
        </Link>
        <Link href="" className={`NavElementContainer`}>
          <li className="NavElement" >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}