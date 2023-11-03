import Image from 'next/image';
import Link from 'next/link';

const AnimeCard = ({ title, id, image }) => {
  return (
    <Link
      href={`/anime/${id}`}
      className="text-center cursor-pointer shadow-md hover:text-color-secondary rounded-md"
      key={id}
    >
      <Image
        src={image}
        alt=""
        width={300}
        height={300}
        className="w-full h-auto max-h-48 object-cover rounded-md"
      />
      <h3 className="font-semibold p-2">{title}</h3>
    </Link>
  );
};

export default AnimeCard;
