import Link from 'next/link';

export default function Nav() {
  return (
    <nav id="nav">
      <ul className="NavContainer">
        <li className="NavElementContainer">
          <Link className='NavElement' href="/">About</Link>
        </li>
        <li className="NavElementContainer">
          <Link className='NavElement' href="/services">Services</Link>
        </li>
        <li className="NavElementContainer">
          <Link className='NavElement' href="/skills">Skills</Link>
        </li>
        <li className="NavElementContainer">
          <Link className='NavElement' href="/projects">Projects</Link>
        </li>
        <li className="NavElementContainer">
          <Link className='NavElement' href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}