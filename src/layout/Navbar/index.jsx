import Link from 'next/link';
import SearchInput from './SearchInput';
import UserActionButton from './UserActionButton';

const Navbar = () => {
  return (
    <header className="bg-color-secondary max-w-full py-4 px-4 flex flex-col sm:flex-row gap-y-2 justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-bold text-color-base">
        OrinimeTV
      </Link>
      <SearchInput />
      <UserActionButton />
    </header>
  );
};

export default Navbar;
