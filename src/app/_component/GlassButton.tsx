

export default function GlassButton({name}:{name: string}) {
  return <div className="cursor-default bg-transparent text-black text-sm py-2 px-4 rounded-lg glass" aria-label="glass buttons" >{name}</div>
}
