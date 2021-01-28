import { Footer } from 'src/layouts/footer'
import { Header } from 'src/layouts/header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
