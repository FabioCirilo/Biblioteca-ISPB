export default function AboutUs() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Biblioteca Digital do ISPB
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Servindo a comunidade académica do Instituto Superior Politécnico do
            Bié
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Nossa Missão
          </h2>
          <p className="text-gray-700">
            A Biblioteca Digital do ISPB tem como objetivo principal apoiar o
            ensino, aprendizagem e investigação científica, fornecendo recursos
            informacionais de qualidade à comunidade académica do Instituto
            Superior Politécnico do Bié.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              História Institucional
            </h2>
            <p className="text-gray-600 mb-4">
              A Biblioteca Digital do ISPB foi criada em 2020 como parte da
              estratégia de modernização e expansão dos serviços bibliotecários
              da instituição, visando responder aos desafios do ensino superior
              no século XXI.
            </p>
            <p className="text-gray-600">
              Integrada no Instituto Superior Politécnico do Bié, nossa
              biblioteca digital reflete o compromisso da instituição com a
              excelência académica e a inovação tecnológica.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Em Números
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <p className="text-3xl font-bold text-blue-600">10K+</p>
                <p className="text-gray-600">Recursos digitais</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <p className="text-3xl font-bold text-blue-600">5K+</p>
                <p className="text-gray-600">Utilizadores registados</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <p className="text-3xl font-bold text-blue-600">20+</p>
                <p className="text-gray-600">Cursos atendidos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600">Acesso remoto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Serviços Oferecidos
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Acesso a bases de dados académicas",
              "Catálogo online integrado",
              "Empréstimo de e-books",
              "Referência virtual",
              "Apoio à investigação científica",
              "Formação de utilizadores",
              "Repositório institucional",
              "Acesso a revistas científicas",
            ].map((service, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Equipa da Biblioteca
          </h2>
          <p className="text-gray-600 mb-6">
            Nossa equipa é composta por profissionais qualificados em ciência da
            informação comprometidos com o sucesso académico dos estudantes e
            docentes do ISPB.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sabino Pacheco",
                role: "Director da Biblioteca",
                bio: "Doutorado em Ciência da Informação com especialização em recursos digitais.",
              },
              {
                name: "Dra. Maria Chissende",
                role: "Bibliotecária Referencista",
                bio: "Responsável pelo serviço de referência e formação de utilizadores.",
              },
              {
                name: "Eng. Domingos Ildefonso",
                role: "Técnico de Sistemas",
                bio: "Especialista em gestão de plataformas digitais para bibliotecas.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-gray-600 text-xl font-bold mb-4">
                  {member.name.split(" ")[1].charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Horário de Funcionamento
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Biblioteca Física
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>09:00 - 13:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Biblioteca Digital
              </h3>
              <p className="text-gray-600">
                Acesso online disponível 24 horas por dia, 7 dias por semana
                para todos os estudantes e docentes do ISPB.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Contactos da Biblioteca
          </h2>
          <p className="text-gray-700 mb-4">
            Instituto Superior Politécnico do Bié
            <br />
            Bairro Santo António, Cuito, Bié
            <br />
            Angola
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:biblioteca@ispb.ed.ao"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              biblioteca@ispb.ed.ao
            </a>
            <a
              href="tel:+244123456789"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +244 123 456 789
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
