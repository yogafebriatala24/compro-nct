import Image from "next/image";
import Link from "next/link";

interface ArticleThumbnailProps {
  src: string;
  alt: string;
  title: string;
  date: string;
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  src,
  alt,
  title,
  date,
}) => (
  <div className="flex flex-col md:flex-row gap-4 items-center mb-0">
    <div className="w-40 h-28 relative flex-shrink-0">
      <Image src={src} alt={alt} layout="fill" className="rounded" />
    </div>
    <div>
      <Link href={""}>
        <h3 className="text-black font-semibold text-lg underline">{title}</h3>
      </Link>
      <p className="text-secondary text-xs font-light pt-2">{date}</p>
    </div>
  </div>
);

export default function News() {
  return (
    <div className="mt-20">
      <h2 className="font-semibold text-3xl text-hijau">New Article</h2>
      <Image
        src={"/icon/line.svg"}
        alt="line"
        width={100}
        height={10}
        className="pt-3 mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ArticleThumbnail
          src="/icon/lar.jpg"
          alt="laravel"
          title="Laravel 11 is out! Here are every new big changes and features."
          date="3 April 2024"
        />
        <ArticleThumbnail
          src="/icon/py.webp"
          alt="laravel"
          title="Creating a Scalping Strategy in Python with a 74% Win Rate"
          date="3 April 2024"
        />
        <ArticleThumbnail
          src="/icon/rus.webp"
          alt="laravel"
          title="How to build an API server with Rust"
          date="3 April 2024"
        />
        <ArticleThumbnail
          src="/icon/hack.webp"
          alt="laravel"
          title="The $10 Million Cyber Bounty and Linux Hacking Chaos, Cyber News Beat"
          date="3 April 2024"
        />
        <ArticleThumbnail
          src="/icon/hack.webp"
          alt="laravel"
          title="Creating a Scalping Strategy in Python with a 74% Win Rate"
          date="3 April 2024"
        />
        <ArticleThumbnail
          src="/icon/hack.webp"
          alt="laravel"
          title="How to build an API server with Rust"
          date="3 April 2024"
        />
      </div>
    </div>
  );
}
