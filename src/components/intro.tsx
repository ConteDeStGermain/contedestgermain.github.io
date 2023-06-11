import Image from 'next/image'
import watchImage from '../../images/time.jpg';

export default function Intro() {
  return (
    <div>
      <div className="absolute inset-x-0 top-[33%] z-10 flex flex-col justify-center items-center">
        <div className='backdrop-blur-md flex flex-col items-center p-5 rounded-[20px]'>
          <h1 className="text-8xl font-bold text-[#F4F7F6]">TimeFix</h1>
          <h3 className="text-4xl font-light text-[#F4F7F6]">
            Réparez votre montre en un rien de temps.
          </h3>
        </div>
      </div>
      <Image
        alt="A closeup image of a watch"
        src={watchImage}
        className="z-0 h-[95vh] object-cover rounded-b-[50px] drop-shadow-xl"
      />
    </div>
  )
}
