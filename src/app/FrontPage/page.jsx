
import Image from 'next/image'
import aboutImgRow from "../../../public/assets/img/main/abouText_LightMode.png"
// import aboutImgRowDark from "../assets/images/main/abouText.png"
import Servicios from '../components/servicios';
import VideoAbout from '../components/videoAbout';
import Trabajos from '../components/Trabajos/trabajos';

const FrontPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  ">
      <div className="w-11/12 flex items-center justify-center min-h-screen ">
        <div className="w-3/4">
          <h3 className="">Tu proyecto digital hecho realidad.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti dolores nam aliquid, veritatis voluptate totam! Pariatur blanditiis tenetur maxime error quam neque nemo minima nihil beatae laborum! Libero, distinctio?</p>
          <button className="rounded-full bg-blue-500 py-4 px-6 text-white">Conoce nuestro Trabajo</button>
        </div>
        <div className="w-1/4">
          <span>esto es una imagen</span>
        </div>
      </div>
      <div className="w-full h-32">
        <Image
          src={aboutImgRow}
          width={260}
        />
      </div>

      <VideoAbout />
      <Servicios />

      <Trabajos/>
    </div>
  )

};

export default FrontPage;
