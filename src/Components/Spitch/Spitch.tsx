import React, { useState } from 'react';
import Image from 'next/image';
import photo from '@/images/ibrahim-cheikh-hussein.webp'

function Spitch() {
 
  return (
    <section className='SectionAppleStyle' id='Contact'>
      <div className='SpitchContainer'>
            <Image 
      src={photo}
      alt={"Photo d'Ibrahim Cheikh Hussein"}
      width={396}
      height={330}
      
      />
            <div className='spitch'>L'avocat en droit du travail est un expert spécialisé dans le dédale complexe des relations professionnelles et des obligations légales liées à l'emploi. Il négocie, rédige et interprète des contrats de travail, conseille les entreprises sur leurs droits et responsabilités envers leurs employés, et défend les droits des travailleurs confrontés à des injustices sur leur lieu de travail. Face aux litiges, qu'il s'agisse de licenciements, de harcèlements ou de conflits syndicaux, l'avocat en droit du travail est la clé de voûte pour assurer que justice soit faite en respectant scrupuleusement les lois en vigueur. En outre, avec une connaissance approfondie des réglementations changeantes, il est le guide inestimable pour aider les entreprises à se conformer aux normes, tout en promouvant des relations de travail équilibrées et harmonieuses.</div>
            </div>
    </section>

  );
}

export default Spitch;