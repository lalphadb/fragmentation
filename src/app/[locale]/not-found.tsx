import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <div className="text-8xl font-black text-orange-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-navy-950 mb-4">Page introuvable / Page not found</h1>
        <p className="text-navy-600 mb-8">La page que vous cherchez n&apos;existe pas. / The page you are looking for does not exist.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-chevron-orange">Accueil / Home</Link>
          <Link href="/contact" className="btn-chevron-dark">Contact</Link>
        </div>
      </div>
    </section>
  );
}
