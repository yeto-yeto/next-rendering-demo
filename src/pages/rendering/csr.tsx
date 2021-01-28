import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

const Csr = () => {
  return (
    <>
      <Head>
        <title>CSR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster render="csr" />
        <RenderedAt time="csr" render="csr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Csr
