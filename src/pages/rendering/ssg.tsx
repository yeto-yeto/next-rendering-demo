import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

const Ssg = () => {
  return (
    <>
      <Head>
        <title>SSG Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster render="ssg" />
        <RenderedAt time="ssg" render="ssg" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Ssg
