type RenderedAtProps = {
  time?: string
  render?: 'csr' | 'ssr' | 'ssg' | 'isr'
}

const RenderingName = {
  csr: { abbr: 'CSR', name: 'Client Side Rendering' },
  ssr: { abbr: 'SSR', name: 'Server Side Rendering' },
  ssg: { abbr: 'SSG', name: 'Static Site Generation' },
  isr: { abbr: 'ISR', name: 'Incremental Static Regeneration' },
}

const Please = () => {
  return <p className="h-24 text-2xl font-black">Press the button</p>
}

export const RenderedAt = (props: RenderedAtProps) => {
  if (!props.render) {
    return <Please />
  }

  return (
    <div className="flex flex-col h-24 w-80">
      <h2 className="text-2xl font-black">{RenderingName[props.render].abbr}</h2>
      <p className="text-xl">{RenderingName[props.render].name}</p>
      <p className="text-md">
        Rendered at:&nbsp;
        <span className="text-xl font-black">{props.time}</span>
      </p>
    </div>
  )
}
