
import Image from 'next/image';
import Link from 'next/link';

type GameThumbnailProps = {
  title: string,
  src: string,
  id: string
}
const GameThumbnail = ({ title, src, id }: GameThumbnailProps) => {
  return (
    <Link href={`/${id}`} className=' rounded-lg'>
      <div className="flex flex-col lg:w-[19rem] lg:h-[12rem] 
        xl:w-auto xl:h-[16.5rem] h-[16.5rem] 
        items-center overflow-hidden mb-4 rounded-3xl">
        <Image src={src} alt="thumbnail" height={400} width={400} className=' hover:scale-105 duration-200 ease-in' />
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    </Link>
  );
};

export default GameThumbnail;
