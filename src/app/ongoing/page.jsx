'use client';

import { getFetchHandler } from '@/libs/anime-api';
import { useEffect, useState } from 'react';

import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/utils/HeaderMenu';
import Pagination from '@/utils/Pagination';

const Page = () => {
  const [page, setPage] = useState(1);
  const [onGoing, setOnGoing] = useState([]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const paginate = onGoing.pagination;

  const fetchData = async () => {
    const data = await getFetchHandler('seasons/now', `page=${page}`);
    setOnGoing(data);
  };

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const pageDown = () => {
    setPage((prevPage) => prevPage - 1);
    scrollTop();
  };

  const pageUp = () => {
    setPage((prevPage) => prevPage + 1);
    scrollTop();
  };
  return (
    <>
      <HeaderMenu title="Anime Season ini" />
      <AnimeList api={onGoing} />
      <Pagination paginate={paginate} pageDown={pageDown} pageUp={pageUp} />
    </>
  );
};

export default Page;
