import Image, { StaticImageData } from 'next/image';
import vector from '../../../images/Vectorlight.png'

interface TextLinkProps {
  link: string ;
  content: string;
}

const TextLink: React.FC<TextLinkProps> = ({ link,content }) => {

  if (link == '') {
    return (<></>)
  }
  return (
    <div className='LinkContainer'>
        <a className='Link' href={link} target="_blank" rel="noopener noreferrer">
        <div className='TextLink'>{content}</div>
        
      <Image
        src={vector}
        alt={''}
        className={"vector"}
        width={10}
        height={16}
      />
      
      </a>
    </div>
    
  );
};

export default TextLink;