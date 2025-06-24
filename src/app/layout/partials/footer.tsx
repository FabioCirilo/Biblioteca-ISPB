export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Biblioteca ISPB. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-sm hover:underline">
              Política de Privacidade
            </a>
            <a href="/terms" className="text-sm hover:underline">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
