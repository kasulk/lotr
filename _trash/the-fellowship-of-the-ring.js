import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);
//* deconstruction volume object
const { title, description, books, cover } = volume;

// console.log("volume", volume);

export default function TheFellowshipOfTheRing() {
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
            //   return (
            //! return not necessary with parentheses instead of curly brackets
            <li key={title}>
              {ordinal}: {title}
            </li>
          )
          //   );
        )}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
    </>
  );
}
