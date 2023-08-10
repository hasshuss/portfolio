import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Nav() {
  const [activeLink, setActiveLink] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#Services', '#AncreSkills', '#Portfolio', '#Contact'];
      const links = sections.map((section) => document.querySelector(`[href="${section}"]`));

      let activeSection = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && isHTMLElement(section) && section.offsetTop <= window.scrollY + 100) {
          activeSection = sections[i];
          break;
        }
      }

      links.forEach((link) => {
        if (link && link.getAttribute('href') === activeSection) {
          link.parentElement?.classList.add('active');
        } else {
          link?.parentElement?.classList.remove('active');
        }
      });

      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Vérification de type personnalisée pour les éléments HTML
  const isHTMLElement = (element: Element | null): element is HTMLElement => {
    return element instanceof HTMLElement;
  };

  const isHomePage = router.pathname === '/';
  const homeActiveClass = isHomePage && !activeLink ? 'active' : '';

  return (
    <nav id="nav">
      <ul className="NavContainer">
        <li className={`NavElementContainer ${homeActiveClass}`}>
          <a className='NavElement' href="/">Home</a>
        </li>
        <li className={`NavElementContainer ${activeLink === '#Services' ? 'active' : ''}`}>
          <a className='NavElement' href="#Services">Services</a>
        </li>
        <li className={`NavElementContainer ${activeLink === '#AncreSkills' ? 'active' : ''}`}>
          <a className='NavElement' href="#AncreSkills">Compétences</a>
        </li>
        <li className={`NavElementContainer ${activeLink === '#Portfolio' ? 'active' : ''}`}>
          <a className='NavElement' href="#Portfolio">Portfolio</a>
        </li>
        <li className={`NavElementContainer ${activeLink === '#Contact' ? 'active' : ''}`}>
          <a className='NavElement' href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}