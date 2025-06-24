"use client";

import { useState } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  coverImage: string;
  available: boolean;
  rating: number;
  summary?: string;
}

export default function BookList() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const books: Book[] = [
    {
      id: "1",
      title: "Porque tarda o pleno Avivamento",
      author: "Leonard Ravenhill",
      year: "1959",
      coverImage: "/avivamento.webp",
      available: false,
      rating: 4,
      summary:
        "Um clássico sobre avivamento espiritual que examina as razões pelas quais muitos cristãos não experimentam um relacionamento profundo com Deus.",
    },
    {
      id: "2",
      title: "A sutil arte de ligar o f*da-se",
      author: "Mark Manson",
      year: "2017",
      coverImage: "/arte.webp",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "3",
      title: "pai rico pai pobre",
      author: "Robert Kiyosaki e Sharon L. Lechter",
      year: "1997",
      coverImage: "/pai.webp",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "4",
      title: "O padrão bitcoin",
      author: "Seifedean",
      year: "2018",
      coverImage: "/bitcoin.webp",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "5",
      title: "O Homem mais rico da babilônia",
      author: "George S. Clason",
      year: "1959",
      coverImage: "/babilonia.jpg",
      available: false,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "6",
      title: "A psicologia financeira",
      author: "Morgan House",
      year: "2021",
      coverImage: "/psicologia.png",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "7",
      title: "A riqueza da vida simples",
      author: "Gustavo Cerbasi",
      year: "2019",
      coverImage: "/riqueza.webp",
      available: false,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "8",
      title: "Comunicação Estratégica",
      author: "Burton Kaplan",
      year: "2004",
      coverImage: "/comunicacao.webp",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "9",
      title: "Opinião ou Ciência",
      author: "Alécio Vidor",
      year: "1959",
      coverImage: "/opiniao.webp",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "10",
      title: "A ciência do sucesso",
      author: "Napoleon Hill",
      year: "2024",
      coverImage: "/ciencia.webp",
      available: false,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "11",
      title: "Poder Sem Limites",
      author: "Anthony Robbins",
      year: "1986",
      coverImage: "/poder.png",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
    {
      id: "12",
      title: "Python Algoritmo e programação Web",
      author: "José Braga de Vasconcelos",
      year: "2015",
      coverImage: "/python.jpg",
      available: true,
      rating: 4,
      summary:
        "Um guia contraintuitivo para viver uma vida boa, mostrando como lidar com as adversidades e focar no que realmente importa.",
    },
  ];

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-6">
        Catálogo de Livros
      </h1>

      {books?.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum livro encontrado na biblioteca.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books?.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <div className="h-48 bg-white flex items-center justify-center mb-4">
                  {book.coverImage ? (
                    <img
                      src={book.coverImage}
                      alt={`Capa do livro ${book.title}`}
                      className="h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">Sem imagem</span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-1">Autor: {book.author}</p>
                <p className="text-gray-500 text-sm mb-2">Ano: {book.year}</p>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      book.available
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {book.available ? "Disponível" : "Emprestado"}
                  </span>
                  {book.rating && (
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-700">
                        {book.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => openModal(book)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Mais detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de detalhes */}
      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white shadow-md rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedBook.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src={selectedBook.coverImage}
                    alt={`Capa do livro ${selectedBook.title}`}
                    className="h-48 object-cover rounded"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Autor:</span>{" "}
                    {selectedBook.author}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Ano de publicação:</span>{" "}
                    {selectedBook.year}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Disponibilidade:</span>{" "}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        selectedBook.available
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {selectedBook.available ? "Disponível" : "Emprestado"}
                    </span>
                  </p>
                  {selectedBook.rating && (
                    <p className="text-gray-700 mb-4">
                      <span className="font-semibold">Avaliação:</span>{" "}
                      <span className="text-yellow-500">★</span>{" "}
                      {selectedBook.rating.toFixed(1)}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Resumo
                </h3>
                <p className="text-gray-700">
                  {selectedBook.summary ||
                    "Nenhum resumo disponível para este livro."}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
