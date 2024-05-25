import Link from 'next/link';

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <img src="/images/danielribas.png"/>
      <ul>
        <li>
          <Link href="/sobre">
            <a>Ir para a Sobre mim</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
