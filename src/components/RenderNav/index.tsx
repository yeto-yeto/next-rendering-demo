import type { LinkButtonProps } from 'src/components/RenderNav/LinkButton'
import { LinkButton } from 'src/components/RenderNav/LinkButton'

const renderLinks: LinkButtonProps[] = [
  { text: 'csr', href: '/rendering/csr' },
  { text: 'ssr', href: '/rendering/ssr' },
  { text: 'ssg', href: '/rendering/ssg' },
  { text: 'isr', href: '/rendering/isr' },
]

export const RenderNav = () => {
  return (
    <nav className="grid grid-cols-4 gap-4 w-full max-w-7xl p-4 bg-gray-100 rounded-md">
      {renderLinks.map((link) => {
        return <LinkButton key={link.text} {...link} />
      })}
    </nav>
  )
}