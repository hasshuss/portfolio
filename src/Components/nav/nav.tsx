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

  console.log(activeItem);

  return (
    <nav id="nav">
      <ul className="NavContainer">
        <Link  href="/" className={`NavElementContainer ${activeItem === '' ? 'active' : ''}` }>
        
          <li className="NavElement" >
            Home
          </li>
        </Link>
        <Link href="/services" className={`NavElementContainer ${activeItem === 'services' ? 'active' : ''}`}>
          <li className="NavElement" >
            Services
          </li>
        </Link>
        <Link href="/skillsPage" className={`NavElementContainer ${activeItem === 'skillsPage' ? 'active' : ''}`}>
          <li className="NavElement" >
            Compétences
          </li>
        </Link>
        <Link href="/projects" className={`NavElementContainer ${activeItem === 'projects' ? 'active' : ''}`}>
          <li className="NavElement" >
            Portfolio
          </li>
        </Link>
        <Link href="/contact" className={`NavElementContainer ${activeItem === 'contact' ? 'active' : ''}`}>
          <li className="NavElement" >
            Contact
          </li>
        </Link>
      </ul>
      <div className='EmptyElement'></div>
    </nav>
  );
}