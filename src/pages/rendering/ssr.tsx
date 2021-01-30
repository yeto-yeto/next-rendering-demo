import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'
import { day } from 'src/lib/day'

export const getServerSideProps: GetServerSideProps<{ date: string }> = async () => {
  return {
    props: {
      date: day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'),
    },
  }
}

type SsrProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Ssr = (props: SsrProps) => {
  return (
    <>
      <Head>
        <title>SSR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster color="#FFFDC0" />
        <RenderedAt time={props.date} render="ssr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Ssr
