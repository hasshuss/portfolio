import mongo from '../../images/icones/mongodb.png';
import SkillNameAndIcone from './SkillNameAndIcone';

const SkillNameAndIconeMongo = () => {
  return (
    <SkillNameAndIcone
      src={mongo}
      alt={'MongoDB skill icone'}
      name={'MongoDB'}
      size={20}
    />
  );
};

export default SkillNameAndIconeMongo;