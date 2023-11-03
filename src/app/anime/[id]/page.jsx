import { getFetchHandler } from '@/libs/anime-api';
import Image from 'next/image';

const Page = async ({ params }) => {
  const animeDetail = await getFetchHandler(`anime/${params.id}`);
  const anime = animeDetail.data;

  return (
    <div className="m-4 p-4 shadow-md rounded-md text-color-primary">
      <h3 className="font-bold text-lg">{anime.title}</h3>
      <div className="py-4 flex flex-col sm:flex-row justify-between gap-8">
        <div className="sm:w-1/3">
          <Image
            src={anime.images.webp.image_url}
            alt={anime.images.jpg.image_url}
            width={200}
            height={200}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
        <div className="sm:w-2/3">
          <p className="pb-4">Statistic</p>
          <h4>Synopsis</h4>
          <p className="py-2 text-justify">{anime.synopsis}</p>
        </div>
      </div>
      <div>Trailer video</div>
    </div>
  );
};

export default Page;
