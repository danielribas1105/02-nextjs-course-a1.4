import Link from "next/link";
import { useRouter } from "next/router";

export default function Comentarios() {
  const router = useRouter();

  return (
    <div>
      comentários do post com slug: {router.query.slug}
      <br />
      <ul>
        <li>
          <Link href="/">
            <a>Ir para a home</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/${router.query.slug}`}>
            <a>Ir para o post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}