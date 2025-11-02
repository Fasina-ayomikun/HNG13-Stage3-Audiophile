export function InTheBox({
  items,
}: {
  items: { qty: number; label: string }[];
}) {
  return (
    <div>
      <h3 className='heading-4'>IN THE BOX</h3>
      <ul className='mt-6 space-y-2'>
        {items.map((it) => (
          <li key={it.label} className='flex gap-4'>
            <span className='text-primary font-bold'>{it.qty}x</span>
            <span className='text-black/70'>{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
