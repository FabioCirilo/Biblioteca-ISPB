export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-600 sm:text-5xl">
            Contacte a Biblioteca do ISPB
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Estamos aqui para ajudar a comunidade académica
          </p>
        </div>

        {/* Grid de Contactos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contacto Físico */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Visite-nos</h2>
            </div>
            <p className="text-gray-600">
              Instituto Superior Politécnico do Bié
              <br />
              Bairro Santo António
              <br />
              Cuito, Bié
              <br />
              Angola
            </p>
          </div>

          {/* Contacto Telefónico */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg
                  className="h-6 w-6"
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
              </div>
              <h2 className="text-xl font-bold text-gray-800">Telefone</h2>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Biblioteca Central:</strong>
              <br />
              +244 123 456 789
            </p>
            <p className="text-gray-600">
              <strong>Apoio Técnico:</strong>
              <br />
              +244 987 654 321
            </p>
          </div>

          {/* Contacto Eletrónico */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <svg
                  className="h-6 w-6"
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
              </div>
              <h2 className="text-xl font-bold text-gray-800">Email</h2>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Informações Gerais:</strong>
              <br />
              biblioteca@ispb.ed.ao
            </p>
            <p className="text-gray-600">
              <strong>Apoio Técnico:</strong>
              <br />
              suporte.biblioteca@ispb.ed.ao
            </p>
          </div>
        </div>

        {/* Horário */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Horário de Funcionamento
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Biblioteca Física
              </h3>
              <ul className="space-y-2">
                {[
                  { day: "Segunda - Sexta", time: "08:00 - 18:00" },
                  { day: "Sábado", time: "09:00 - 13:00" },
                  { day: "Domingo", time: "Fechado" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between py-2 border-b border-gray-100"
                  >
                    <span className="text-gray-600">{item.day}</span>
                    <span className="text-gray-800 font-medium">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Biblioteca Digital
              </h3>
              <p className="text-gray-600 mb-4">
                Acesso disponível 24 horas por dia, 7 dias por semana para todos
                os estudantes e docentes do ISPB.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Atenção:</strong> Alguns recursos digitais podem ter
                  restrições de acesso fora do campus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Contacto */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Formulário de Contacto
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="assunto"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida sobre serviços</option>
                <option value="emprestimo">Problemas com empréstimo</option>
                <option value="tecnico">Apoio técnico</option>
                <option value="sugestao">Sugestão de aquisição</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        {/* Mapa */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Localização no Campus
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            {/* Espaço reservado para o mapa - substitua por um componente de mapa real */}
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 text-gray-400">
              Mapa do Campus do ISPB com a localização da Biblioteca
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            A Biblioteca Central está localizada no Edifício A, Piso 1, do
            Campus Principal do ISPB.
          </p>
        </div>
      </div>
    </div>
  );
}
