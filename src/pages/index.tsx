import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster color="#ffffff" />
        <RenderedAt />
        <RenderNav />
      </Container>
    </>
  )
}

export default Home
