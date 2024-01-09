import node from '../../images/icones/nodejs.png';
import SkillNameAndIcone from './SkillNameAndIcone';

const SkillNameAndIconeNode = () => {
  return (
    <SkillNameAndIcone
      src={node}
      alt={'Node JS skill icone'}
      name={'Node JS'}
      size={20}
    />
  );
};

export default SkillNameAndIconeNode;