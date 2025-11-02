import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PRODUCTS,
  type CategoryKey,
  findByCategoryAndSlug,
} from "../../lib/products";
import ProductHero from "../../components/product/ProductHero";
import { ProductFeatures } from "../../components/product/ProductFeatures";
import { InTheBox } from "../../components/product/InTheBox";
import { ProductGallery } from "../../components/product/ProductGallery";
import AboutSection from "@/app/components/home/AboutSection";
import CategoryGrid from "@/app/components/home/CategoryGrid";
import AlsoLike from "@/app/components/product/AlsoLike";
import Navbar from "@/app/components/Navbar";

type Params = { category: CategoryKey; slug: string };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;

  const product = findByCategoryAndSlug(category, slug);
  if (!product) return {};
  return {
    title: `${product.name} | Audiophile`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const product = findByCategoryAndSlug(category, slug);
  if (!product) return notFound();

  return (
    <main className='pb-20 sm:pb-28'>
      <div className='bg-black text-white'>
        <Navbar />
      </div>
      <div className='container px-6 lg:px-8 pt-6'>
        <Link
          href={`/${category}`}
          className='text-black/60 hover:text-primary text-sm'
        >
          Go Back
        </Link>
      </div>

      <ProductHero
        product={{
          slug: product.slug,
          category: product.category,
          name: product.name,
          new: product.new,
          description: product.description,
          price: product.price,
          hero: product.hero,
        }}
      />

      <section className='container px-6 lg:px-8 pt-20'>
        <div className='grid gap-16 lg:grid-cols-[2fr_1fr]'>
          <ProductFeatures text={product.features} />
          <InTheBox items={product.inBox} />
        </div>
      </section>

      <ProductGallery imgs={product.gallery} />

      <AlsoLike items={product.alsoLike} />

      <CategoryGrid />
      <AboutSection />
    </main>
  );
}
