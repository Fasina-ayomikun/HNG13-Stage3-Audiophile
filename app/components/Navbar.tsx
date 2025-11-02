"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartButton from "./cart/CartButton";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    if (open) style.overflow = "hidden";
    return () => {
      style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className='sticky top-0 z-60 bg-ink-900'
      style={
        {
          ["--nav-h" as any]: "72px",
        } as React.CSSProperties
      }
    >
      <div className='container px-6 lg:px-8'>
        <nav className='py-5 sm:py-6 border-white/10 border-b flex items-center justify-between gap-6'>
          <button
            className='lg:hidden inline-grid place-items-center size-8 -ml-1'
            aria-label='Open menu'
            onClick={() => setOpen((prev) => !prev)}
          >
            <Image
              src='/assets/hamburger.svg'
              alt=''
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </button>

          <Link href='/' className='md:flex-1 lg:flex-none inline-block'>
            <Image
              src='/assets/shared/desktop/logo.svg'
              alt='Audiophile Logo'
              width={143}
              height={25}
              className='w-[120px] sm:w-[143px] h-auto'
            />
          </Link>

          <ul className='hidden lg:flex items-center gap-8 text-subtitle tracking-[2px] font-bold uppercase'>
            <li>
              <Link href='/' className='hover:text-primary transition'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/headphones'
                className='hover:text-primary transition'
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link href='/speakers' className='hover:text-primary transition'>
                Speakers
              </Link>
            </li>
            <li>
              <Link href='/earphones' className='hover:text-primary transition'>
                Earphones
              </Link>
            </li>
          </ul>

          <CartButton />
        </nav>
      </div>

      {open && (
        <>
          <button
            aria-label='Close menu'
            onClick={() => setOpen(false)}
            className='fixed inset-x-0 bottom-0 top-(--nav-h) bg-black/50 z-40'
          />

          <div
            className='
            py-8
        fixed inset-x-0 top-(--nav-h) bottom-0
        z-50 bg-white rounded-b-2xl shadow-xl
        overflow-y-auto overscroll-contain
      '
            style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
          >
            <div className='container px-6 pt-8 pb-10'>
              <div className='grid gap-16 md:gap-6 sm:grid-cols-3'>
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.label}
                    href={c.slug}
                    onClick={() => setOpen(false)}
                    className='rounded-xl pt-16 pb-6 px-6 text-center bg-ink-100 h-[204px] hover:shadow-lg transition'
                  >
                    <div className='-mt-28 mx-auto w-auto h-40 relative'>
                      <Image
                        src={c.img}
                        alt={c.label}
                        fill
                        sizes='(max-width: 640px) 70vw, 33vw'
                        className='object-contain'
                      />
                    </div>
                    <h3 className='heading-6 uppercase text-black'>
                      {c.label}
                    </h3>
                    <span className='inline-flex items-center gap-2 mt-3 text-black/50 text-subtitle tracking-[1px] uppercase font-semibold hover:text-primary'>
                      Shop
                      <Image
                        src='/assets/shared/desktop/icon-arrow-right.svg'
                        alt=''
                        width={8}
                        height={8}
                        className='w-2 h-auto'
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
