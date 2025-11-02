import CategoryPage from "../components/category/CategoryPage";
import { CATEGORY_DATA, CategoryKey } from "../lib/catalog";

// Note: params is a Promise here
type Props = { params: Promise<{ category: CategoryKey }> };

export default async function CategoryRoute({ params }: Props) {
  const { category } = await params; // ✅ await before use
  return <CategoryPage category={category} />;
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_DATA).map((k) => ({
    category: k as CategoryKey,
  }));
}
