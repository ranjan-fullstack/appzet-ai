export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent text-white">A</span>
      <span className={light ? 'text-white' : 'text-brand-900'}>
        Appzet<span className={light ? 'text-brand-200' : 'text-brand-500'}>Ai</span>
      </span>
    </span>
  )
}
