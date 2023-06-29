import Link from "next/link";

function NotFoundPage() {
  return (
    <section className="page404">
      <h1>404 - Page Not Found</h1>

      <Link href="/" className="center">&#8592; Back to Home</Link>
    </section>
  )
}

export default NotFoundPage;