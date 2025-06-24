import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 py-54 px-6 bg-[url('/joinUs.jpg')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Biblioteca Virtual do ISPB
          </h1>
          <p className="mt-4 text-lg text-white sm:text-xl md:text-2xl">
            Uma biblioteca virtual reúne os acervos em plataformas
            digitalizadas, que facilitam o acesso e incentivam a leitura. A
            biblioteca virtual transpõe o conteúdo analógico para plataformas
            digitais.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
