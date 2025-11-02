import Image from "next/image";
import Link from "next/link";

type AlsoLikeItem = {
  name: string;
  slug: string;
  image: string;
  category: string;
};

export default function AlsoLike({ items }: { items: AlsoLikeItem[] }) {
  return (
    <section className='container mx-auto px-6 lg:px-8 py-24'>
      <h3 className='heading-4 text-center mb-12'>YOU MAY ALSO LIKE</h3>

      <div className='grid gap-10 md:grid-cols-3'>
        {items.map((item) => (
          <article
            key={item.slug}
            className='overflow-hidden text-center flex flex-col justify-between'
          >
            <div className='relative h-72 rounded-xl overflow-hidden bg-ink-50'>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className='object-cover object-center'
              />
            </div>

            <div className='flex flex-col items-center mt-8'>
              <h4 className='heading-5 mb-6'>{item.name}</h4>

              <Link href={`/${item.category}/${item.slug}`}>
                <button className='btn btn-primary'>See Product</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
