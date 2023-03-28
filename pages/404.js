import Link from "next/link";

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>

      <Link href="/" className="center">&#8592; Back to Home</Link>
    </div>
  )
}

export default NotFoundPage;