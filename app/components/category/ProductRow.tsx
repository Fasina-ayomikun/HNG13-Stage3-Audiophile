import Image from "next/image";
import Link from "next/link";
import { ProductBrief } from "../../lib/catalog";

export default function ProductRow({ item }: { item: ProductBrief }) {
  return (
    <section className='container px-6 lg:px-8 py-10'>
      <div
        className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${item.reversed ? "lg:[&>div:first-child]:order-2" : ""}`}
      >
        <div className='relative rounded-xl overflow-hidden bg-ink-100 h-[300px] sm:h-[360px] lg:h-[480px]'>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className='object-contain p-6 sm:p-10'
          />
        </div>

        <div className='max-w-xl mx-auto lg:mx-0 text-center lg:text-left'>
          {item.overline ? <p className='overline'>{item.overline}</p> : null}
          <h2 className='heading-3 md:heading-2 mt-3'>{item.title}</h2>
          <p className='body text-black/70 mt-6'>{item.copy}</p>
          <Link href={item.slug}>
            <button className='btn btn-primary mt-8'>See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
