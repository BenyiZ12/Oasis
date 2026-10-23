"use client";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="font-serif text-bosque text-h1 mb-6">404</h1>
      <p className="font-sans text-carbone/70 text-body max-w-lg mx-auto mb-10">
        La página que buscas no existe.
      </p>
      <a
        href="/es/"
        className="px-8 py-4 rounded-full text-sm font-semibold text-bosque border border-carbone/20 hover:bg-carbone/5 transition-colors"
      >
        Volver al inicio
      </a>
    </section>
  );
}
