import Card from "../Cards/Card";
import Image from "next/image";
import Kasa from "../../images/projets/Kasa.jpg"
import poktools from "../../images/projets/poktools.png"



const Projets = () => {
  return (
    <>
      <h2 id="Portfolio" className="h2"> PortFolio</h2>
      <div className="ProjetsContainer">

        <Card
          title={'PokTools'}
          content={<>
            <div className="ProjetImgContainer">
              <Image
                src={poktools}
                alt={"Projet Poktools"}
                className="ProjetIMG"
              />
            </div>
          </>}
        />
        <Card
          title={'Kasa'}
          content={<>
            <div className="ProjetImgContainer">
              <Image
                src={Kasa}
                alt={"Projet06 Kasa parcours developpeur web OpenClassRoom"}
                className="ProjetIMG"
              />
            </div>

          </>}
        />
        
      </div>
    </>
  );
};

export default Projets;