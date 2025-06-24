import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-col-4 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mt-4">
            <div className="">
              <Link href="/">
                <h2 className="font-semibold mb-4">Biblioteca ISPB</h2>
              </Link>
            </div>
            <p className="text-sm pb-2">
              A Biblioteca ISPB é uma plataforma digital que oferece acesso a
              uma vasta coleção de livros e recursos educacionais, promovendo a
              leitura e o aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 md:contents p-2">
            <div className="md:col-span-1 mt-4">
              <h2 className="font-semibold mb-4">Explorar</h2>
              <ul className="space-y-2 text-sm ">
                <li>
                  <Link href="#">Livros</Link>
                </li>
                <li>
                  <Link href="#">Reservas de Livros</Link>
                </li>
                <li>
                  <Link href="#">Livros em uso</Link>
                </li>
                <li>
                  <Link href="#">Livros disponiveis</Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1 mt-4">
              <h2 className="font-semibold mb-4">Suporte</h2>
              <ul className="space-y-2 text-sm ">
                <li>
                  <Link href="#">Contacto</Link>
                </li>
                <li>
                  <Link href="#">Sobre nós</Link>
                </li>
                <li>
                  <Link href="#">Central de Ajuda</Link>
                </li>
                <li>
                  <Link href="#">Politicas e Privacidades</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold mb-4">Informações</h2>
            <p className="text-sm pb-2">
              A Biblioteca ISPB é uma iniciativa do Instituto Superior
              Politécnico de Bié, com o objetivo de promover a educação e o
              acesso à cultura por meio da leitura. Nossa missão é facilitar o
              acesso a livros e recursos educacionais para todos.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Biblioteca ISPB. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
