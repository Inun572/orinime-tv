import AnimeList from '@/components/AnimeList';
import {
  getFetchHandler,
  getPropertyResponseHandler,
  reproduce,
} from '@/libs/anime-api';

const Home = async () => {
  const topAnime = await getFetchHandler('top/anime', 'limit=10&sfw=true');
  const onGoingAnime = await getFetchHandler(
    'seasons/now',
    'limit=10&sfw=true'
  );

  let recommend = await getPropertyResponseHandler(
    'recommendations/anime?sfw=true',
    'entry'
  );
  recommend = reproduce(recommend, 10);
  return (
    <>
      <AnimeList
        api={topAnime}
        title="Anime Terpopuler"
        linkTitle="Lihat semua..."
        linkHref="/populer"
      />
      <AnimeList
        api={onGoingAnime}
        title="Anime On Going"
        linkTitle="Lihat semua..."
        linkHref="/ongoing"
      />
      <AnimeList api={recommend} title="Rekomendasi Anime" />
    </>
  );
};

export default Home;
