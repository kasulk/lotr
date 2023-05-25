import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug:", slug);
  //
  const volume = volumes.find(({ slugFromData }) => slugFromData === slug);
  console.log("volume", volume);

  //* deconstructing volume object
  //   const { title, description, books, cover } = volume;

  return (
    <>
      <h1>{slug}</h1>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(
          //* deconstrcting book object
          ({ title, ordinal }) => (
            <li key={title}>
              {ordinal}: {title}
            </li>
          )
        )}
      </ul>
      <Image src={volume.cover} alt={volume.title} width={140} height={230} />
    </>
  );
}
