import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

const volume = volumes.find(({ slug }) => slug === "the-two-towers");
//* deconstruction volume object
const { title, description, books, cover } = volume;

// console.log("volume", volume);

export default function TheTwoTowers() {
  return (
    <>
      {/* <h2>TheFellowshipOfTheRing</h2> */}
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(
          //* deconstrcting book object
          ({ title, ordinal }) => (
            <li key={title}>
              {ordinal}: {title}
            </li>
          )
        )}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
    </>
  );
}
