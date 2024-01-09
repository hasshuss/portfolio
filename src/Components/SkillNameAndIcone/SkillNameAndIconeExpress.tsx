import express from '../../images/icones/express.png';
import SkillNameAndIcone from './SkillNameAndIcone';

const SkillNameAndIconeExpress = () => {
  return (
    <SkillNameAndIcone
      src={express}
      alt={'Express JS skill icone'}
      name={'Express JS'}
      size={20}
    />
  );
};

export default SkillNameAndIconeExpress;