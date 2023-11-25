'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';

const UserLoggedButton = ({ image }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="relative flex justify-between items-center gap-2 cursor-pointer p-2"
      onMouseEnter={() => setIsShow((prev) => !prev)}
      onMouseLeave={() => setIsShow((prev) => !prev)}
    >
      <Image
        src={image}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full w-8 border-2 border-solid border-color-primary"
      />
      <CaretDown
        size={16}
        className={`transition-all duration-300 ${isShow ? 'rotate-180' : ''}`}
      />
      <div
        className={`${
          isShow ? 'flex' : 'hidden'
        } flex-col gap-y-2 absolute right-0 top-12 bg-color-primary rounded-md shadow-md transition-all duration-500`}
      >
        <Link
          href="/user/dashboard"
          className="px-4 py-2 hover:bg-color-secondary rounded-md"
        >
          Dashboard
        </Link>
        <Link
          href="/api/auth/signout"
          className="px-4 py-2 hover:bg-color-secondary rounded-md"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default UserLoggedButton;
