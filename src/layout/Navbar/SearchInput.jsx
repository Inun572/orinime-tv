'use client';

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';

import { useRef } from 'react';

const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == '') return;

    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="cari anime.."
        className="rounded-md leading-8 pl-3 pr-8 w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1 right-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default SearchInput;
