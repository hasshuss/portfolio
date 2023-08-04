import Image, { StaticImageData } from 'next/image';

interface SkillNameAndIconeProps {
  src: string | StaticImageData;
  alt: string;
  name: string;
  size: number;
}

const SkillNameAndIcone: React.FC<SkillNameAndIconeProps> = ({ src, alt, name, size }) => {
  return (
    <figure className='SkillNameContainer'>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
      <figcaption className='TechName'>{name}</figcaption>
    </figure>
  );
};

export default SkillNameAndIcone;