import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

const Ssr = () => {
  return (
    <>
      <Head>
        <title>SSR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster render="ssr" />
        <RenderedAt time="ssr" render="ssr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Ssr
