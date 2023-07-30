import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = router.pathname.substring(1);
    setActiveItem(currentPath);
  }, [router.pathname]);

  return (
    <nav id="nav">
      <ul className="NavContainer">
        <li className={`NavElementContainer ${activeItem === '' ? 'active' : ''}`}>
        
          <Link className="NavElement" href="/">
            Home
          </Link>
        </li>
        <li className={`NavElementContainer ${activeItem === 'services' ? 'active' : ''}`}>
          <Link className="NavElement" href="/services">
            Services
          </Link>
        </li>
        <li className={`NavElementContainer ${activeItem === 'skillsPage' ? 'active' : ''}`}>
          <Link className="NavElement" href="/skillsPage">
            Compétences
          </Link>
        </li>
        <li className={`NavElementContainer ${activeItem === 'projects' ? 'active' : ''}`}>
          <Link className="NavElement" href="/projects">
            Projects
          </Link>
        </li>
        <li className={`NavElementContainer ${activeItem === 'contact' ? 'active' : ''}`}>
          <Link className="NavElement" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className='EmptyElement'></div>
    </nav>
  );
}