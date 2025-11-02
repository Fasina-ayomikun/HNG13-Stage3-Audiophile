import ProductRow from "./ProductRow";
import { CATEGORY_DATA, CategoryKey } from "../../lib/catalog";
import CategoryGrid from "../home/CategoryGrid";
import AboutSection from "../home/AboutSection";
import { ProductBrief } from "@/app/lib/catalog";
import Navbar from "../Navbar";

export default function CategoryPage({ category }: { category: CategoryKey }) {
  const data = CATEGORY_DATA[category];

  return (
    <main className='pb-20 sm:pb-28'>
      <section className='bg-black text-white'>
        <Navbar />
        <div className='container px-6 lg:px-8 py-16 sm:py-24'>
          <h1 className='heading-2 text-center'>{data.hero}</h1>
        </div>
      </section>

      <div className='mt-20 sm:mt-24 space-y-20 sm:space-y-28 '>
        {data.products.map((p: ProductBrief) => (
          <ProductRow key={p.slug} item={p} />
        ))}
      </div>

      <section className='pt-24 sm:pt-28'>
        <CategoryGrid />
      </section>
      <AboutSection />
    </main>
  );
}
