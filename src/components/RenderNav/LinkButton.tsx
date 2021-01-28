import Link from 'next/link'

export type LinkButtonProps = {
  text: string
  href: string
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link href={props.href}>
      <a
        className={`flex justify-center items-center h-10 rounded-md bg-${props.text} hover:opacity-90`}
      >
        <span className="text-xl font-semibold">{props.text.toUpperCase()}</span>
      </a>
    </Link>
  )
}
