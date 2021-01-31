import type { LinkButtonProps } from 'src/components/RenderNav/LinkButton'
import { LinkButton } from 'src/components/RenderNav/LinkButton'

const renderLinks: LinkButtonProps[] = [
  { text: 'CSR', href: '/rendering/csr', bgColor: 'bg-csr' },
  { text: 'SSR', href: '/rendering/ssr', bgColor: 'bg-ssr' },
  { text: 'SSG', href: '/rendering/ssg', bgColor: 'bg-ssg' },
  { text: 'ISR', href: '/rendering/isr', bgColor: 'bg-isr' },
]

export const RenderNav = () => {
  return (
    <nav className="grid grid-cols-1 gap-4 w-full max-w-7xl p-4 bg-gray-100 rounded-md sm:grid-cols-2 md:grid-cols-4">
      {renderLinks.map((link) => {
        return <LinkButton key={link.text} {...link} />
      })}
    </nav>
  )
}
