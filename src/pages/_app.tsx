import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import routes from '../Router'; // Assure-toi que le chemin est correct
import '../styles/mixins.scss';
import '../styles/resetcss.scss';
import '../Components/nav/nav.scss';
import './index.scss';
import '../Components/Skills/Skills.scss';
import '../Components/Collapse/Collapse.scss';
import '../Components/Projets/Projets.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Recherche la route correspondante pour le chemin actuel
  const matchedRoute = routes.find((route) => route.path === router.asPath);

  // Rend le composant associé à la route ou le composant par défaut
  const RenderComponent = matchedRoute ? matchedRoute.component : Component;

  return <RenderComponent {...pageProps} />;
}
