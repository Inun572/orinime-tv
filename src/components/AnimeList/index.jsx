import Header from './Header';
import AnimeCard from './AnimeCard';

const AnimeList = ({ api, title, linkTitle, linkHref }) => {
  return (
    <section className="text-color-primary p-4">
      <Header title={title} linkTitle={linkTitle} linkHref={linkHref} />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 py-2">
        {api.data?.map((anime) => {
          return (
            <AnimeCard
              title={anime.title}
              id={anime.mal_id}
              image={anime.images.webp.image_url}
              key={anime.mal_id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AnimeList;
