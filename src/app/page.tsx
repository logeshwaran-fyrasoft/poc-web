import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductGridSection from "@/components/ProductGridSection";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import LiveClock from "@/components/LiveClock";
import { formatIST } from "@/lib/formatDate";

const HOMEPAGE_QUERY = `
  query {
    homepage {
      hero { image subtitle title }
      bestSellers { id image title price mrp discountPercent rating reviewCount deliveryDate }
      poojaEssentials { id image title price mrp discountPercent rating reviewCount deliveryDate }
      promoBanner { title subtitle }
      lastUpdated
    }
  }
`;

// FETCH #1 — Hero + Best Sellers: TIME-BASED ISR (revalidate: 30)
async function getHeroAndBestSellers() {
  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: HOMEPAGE_QUERY }),
    next: { revalidate: 30 },
  });
  const json = await res.json();
  return json.data.homepage;
}

// FETCH #2 — Pooja Essentials: ON-DEMAND ISR (tag-based, no timer)
async function getPoojaEssentials() {
  const res = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: HOMEPAGE_QUERY }),
    next: { tags: ["pooja-essentials"] },
  });
  const json = await res.json();
  return json.data.homepage;
}

export default async function HomePage() {
  const [timedData, onDemandData] = await Promise.all([
    getHeroAndBestSellers(),
    getPoojaEssentials(),
  ]);

  return (
    <>
      <Header />
      <HeroBanner hero={timedData.hero} />
      <ProductGridSection title="Best Sellers" products={timedData.bestSellers} />
      <PromoBanner promoBanner={timedData.promoBanner} />
      <ProductGridSection title="Pooja Essentials" products={onDemandData.poojaEssentials} />

      <div style={{ textAlign: "center", padding: "4px", fontSize: 12, color: "#999" }}>
        Hero/Best Sellers (time-based, revalidate 30s) last updated: {formatIST(timedData.lastUpdated)}
      </div>
      <div style={{ textAlign: "center", padding: "4px", fontSize: 12, color: "#999" }}>
       Pooja Essentials (on-demand only) last updated: {formatIST(onDemandData.lastUpdated)}
      </div>
      <LiveClock />
      <Footer />
    </>
  );
}