import Link from 'next/link';

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex justify-between items-center">
      {title ? <h3 className="text-xl font-bold">{title}</h3> : null}
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="hover:text-color-secondary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
