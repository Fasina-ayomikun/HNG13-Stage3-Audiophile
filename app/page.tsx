import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

const CATEGORIES = [
  {
    label: "HEADPHONES",
    slug: "/headphones",
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    label: "SPEAKERS",
    slug: "/speakers",
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    label: "EARPHONES",
    slug: "/earphones",
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

export default function Home() {
  return (
    <section>
      <Hero />
      <section className='container  px-6 lg:px-8 py-40'>
        <div className='grid gap-20 md:gap-6 md:grid-cols-3'>
          {CATEGORIES.map((c) => (
            <article
              key={c.label}
              className='rounded-md pt-16 pb-6 px-6 text-center bg-ink-100 h-[204px]'
            >
              <div className='-mt-30 mx-auto w-auto h-40 relative'>
                <Image
                  src={c.img}
                  alt={c.label}
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='heading-6 uppercase'>{c.label}</h3>
              <Link
                href={c.slug}
                className='inline-flex items-center gap-2 mt-3 text-black/50 text-subtitle tracking-[1px] uppercase font-semibold hover:text-primary'
              >
                <span>Shop</span>
                <Image
                  src='/assets/shared/desktop/icon-arrow-right.svg'
                  alt='Chevron Arrow right'
                  width={25}
                  height={25}
                  className='w-2 h-auto'
                />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className='container mx-auto px-6 lg:px-8 py-6'>
        <div className='relative overflow-hidden rounded-xl bg-primary text-white'>
          <Image
            src='/assets/home/desktop/pattern-circles.svg'
            alt='Chevron Arrow right'
            width={225}
            height={225}
            className='size-[944px]  absolute -top-5 -left-48 '
          />

          <div className='grid gap-10 lg:grid-cols-2 items-center px-8 pt-16'>
            <div className=' -mb-4 relative mx-auto h-80 w-[260px] md:h-[400px] md:w-[320px]'>
              <Image
                src='/assets/home/desktop/image-speaker-zx9.png'
                alt='ZX9 Speaker'
                fill
                className='object-contain drop-shadow-lg'
                priority
              />
            </div>

            <div className='max-w-md'>
              <h2 className='heading-2 text-white'>
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className='body text-white/85 mt-6 font-normal'>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href='/product/zx9-speaker'>
                <button className='btn btn-secondary mt-8'>See Product</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-8 py-6'>
        <div
          className="
          relative overflow-hidden rounded-xl
          bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]
          bg-cover bg-center md:bg-[center_right_10%]
          min-h-[320px]
          flex items-center
        "
        >
          {/* Overlay text content */}
          <div className='px-8 md:px-16 py-16'>
            <h3 className='heading-4 text-bold'>ZX7 SPEAKER</h3>
            <Link href='/product/zx7-speaker'>
              <button className='btn text-white bg-black mt-6'>
                See Product
              </button>
            </Link>
          </div>

          {/* Optional subtle overlay for contrast */}
          <div className='absolute inset-0 bg-black/5 rounded-xl pointer-events-none' />
        </div>
      </section>
      <section className='container mx-auto px-6 lg:px-8 py-6'>
        <div className='grid gap-6 md:grid-cols-2'>
          {/* image card */}
          <div className='relative h-[300px] rounded-xl overflow-hidden'>
            <Image
              src='/assets/home/desktop/image-earphones-yx1.jpg'
              alt='YX1 Earphones'
              fill
              className='object-cover'
            />
          </div>

          {/* light panel */}
          <div className='bg-ink-100 rounded-md flex items-center'>
            <div className='px-20 py-12'>
              <h3 className='heading-4'>YX1 EARPHONES</h3>
              <Link href='/product/yx1-earphones'>
                <button className='btn bg-black text-white mt-6'>
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-8 py-24'>
        <div className='grid gap-10 lg:grid-cols-2 items-center'>
          <div>
            <h2 className='heading-2'>
              BRINGING YOU THE <span className='text-primary'>BEST</span> AUDIO
              GEAR
            </h2>
            <p className='body mt-6 text-black/70'>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className='relative h-[588px] rounded-xl overflow-hidden'>
            <Image
              src='/assets/shared/desktop/image-best-gear.jpg'
              alt='Best audio gear'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <footer className='bg-ink-900 text-white mt-24'>
        <div className='container mx-auto px-6 lg:px-8 pt-12 pb-10'>
          <div className='flex flex-col gap-8'>
            {/* top border accent */}
            <div className='w-24 h-1 bg-primary' />

            {/* nav row */}
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
              <Link href='/' className='inline-block'>
                <Image
                  src='/assets/shared/desktop/logo.svg'
                  alt='Audiophile'
                  width={143}
                  height={25}
                />
              </Link>
              <ul className='flex gap-8 text-[13px] tracking-[2px] font-bold uppercase'>
                <li>
                  <Link href='/' className='hover:text-primary'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/headphones' className='hover:text-primary'>
                    Headphones
                  </Link>
                </li>
                <li>
                  <Link href='/speakers' className='hover:text-primary'>
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href='/earphones' className='hover:text-primary'>
                    Earphones
                  </Link>
                </li>
              </ul>
            </div>

            {/* description + socials */}
            <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end'>
              <p className='body text-white/70 max-w-3xl'>
                Audiophile is an all in one stop to fulfill your audio needs.
                We’re a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility – we’re open 7 days a week.
              </p>

              <div className='flex gap-4 justify-start lg:justify-end'>
                <Link
                  href='#'
                  aria-label='Facebook'
                  className='hover:text-primary'
                >
                  
                </Link>
                <Link
                  href='#'
                  aria-label='Twitter'
                  className='hover:text-primary'
                >
                  
                </Link>
                <Link
                  href='#'
                  aria-label='Instagram'
                  className='hover:text-primary'
                >
                  
                </Link>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 text-white/60 text-sm'>
              <p>Copyright 2021. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
