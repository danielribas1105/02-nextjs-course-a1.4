import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  return (
    <div>
      Página do post: {router.query.slug}
      <ul>
        <li>
          <Link href={`${router.query.slug}/comentarios`}>
            <a>Voltar para a Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}