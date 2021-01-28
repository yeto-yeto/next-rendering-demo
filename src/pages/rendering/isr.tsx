import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

const Isr = () => {
  return (
    <>
      <Head>
        <title>ISR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster render="isr" />
        <RenderedAt time="isr" render="isr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Isr
