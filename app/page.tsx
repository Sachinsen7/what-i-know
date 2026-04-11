import { CategoryGrid } from "@/components/knowledge-map/CategoryGrid";

export default function Page() {
  return (
    <main className="portfolio-shell portfolio-shell--wide">
      <section className="portfolio-section portfolio-section--roomy">
        <CategoryGrid />
      </section>
    </main>
  );
}
