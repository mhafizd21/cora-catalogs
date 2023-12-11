import { Container } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="homepage">
          <p className="homepage__title">
            Cora Catalogs
          </p>
          <p className="homepage__desc">
            Welcome to Cora Catalogs, your premier destination for a diverse and curated collection of catalogs that cater to all your interests and needs. Explore a vast array of meticulously compiled catalogs spanning fashion, home decor, technology, lifestyle, and much more.
          </p>
          <Link href="/products" className="homepage__button">
            Explore Our Products
          </Link>
        </div>
      </Container>
    </main>
  )
}
