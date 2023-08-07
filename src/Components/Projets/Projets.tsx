import Card from "../Cards/Card";
import Image from "next/image";
import Kasa from "../../images/projets/Kasa.jpg"



const Projets = () => {
  return (
    <>
    <h2 className="h2"> PortFolio</h2>
    <div className="ProjetsContainer">
    
    <Card
    title= {'Kasa'}
    content= {<>
          <Image
          src={Kasa}
          alt={"Kasa img"}
          className="ProjetIMG"
        />
    </>}
    />
    <Card
    title= {'Kasa'}
    content= {<>
          <Image
          src={Kasa}
          alt={"Kasa img"}
          className="ProjetIMG"
        />
    </>}
    />
    <Card
    title= {'Kasa'}
    content= {<>
          <Image
          src={Kasa}
          alt={"Kasa img"}
          className="ProjetIMG"
        />
    </>}
    />
    <Card
    title= {'Kasa'}
    content= {<>
          <Image
          src={Kasa}
          alt={"Kasa img"}
          className="ProjetIMG"
        />
    </>}
    />
    </div>
    </>
  );
};

export default Projets;