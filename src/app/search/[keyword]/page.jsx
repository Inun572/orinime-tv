import AnimeList from '@/components/AnimeList';
import { getFetchHandler } from '@/libs/anime-api';

const Page = async ({ params }) => {
  const keyword = decodeURI(params.keyword);
  const search = await getFetchHandler('anime', `q=${keyword}`);
  return (
    <section>
      <AnimeList api={search} title={`pencarian untuk ${keyword}...`} />
    </section>
  );
};

export default Page;
