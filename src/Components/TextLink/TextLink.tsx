import Image, { StaticImageData } from 'next/image';
import vector from '../../images/Vectorlight.png'

interface TextLinkProps {
  link: string;
  content: string;
}

const TextLink: React.FC<TextLinkProps> = ({ link,content }) => {
  return (
    <div className='LinkContainer'>
        <a className='Link' href={link} target="_blank" rel="noopener noreferrer">
        {content}
        </a>
      <Image
        src={vector}
        alt={''}
        className={"vector"}
        width={10}
        height={10}
      />
    </div>
  );
};

export default TextLink;