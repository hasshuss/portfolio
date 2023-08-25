import Image from 'next/image';
import vector from '../../../images/Vectorlight.png'

interface TextFunctionProps {
functionOnClick: () => JSX.Element;
  content: string;
}

const TextFunction: React.FC<TextFunctionProps> = ({ functionOnClick , content }) => {


  return (
    <div className='LinkContainer' onClick={functionOnClick}>
        <div className='TextLink'>{content}</div>
        
      <Image
        src={vector}
        alt={''}
        className={"vector"}
        width={10}
        height={16}
      />
      
    </div>
    
  );
};

export default TextFunction;