
import Index from './pages/index'
import Services from './pages/services'
import Contact from './pages/contact'
import SkillsPage from './pages/skillsPage'
import Projects from './pages/projects'


const routes = [
  { path: '/', component: Index },
  { path : '/contact', component: Contact},
  { path : '/skills', component: SkillsPage},
  { path : '/projects', component: Projects},
  { path : '/services', component: Services},
];

export default routes;

