import Link from 'next/link';

function Sobre() {
  return (
    <div>
      Página sobre mim!
      <ul>
        <li>
          <Link href="/">
            <a>Voltar para Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sobre
