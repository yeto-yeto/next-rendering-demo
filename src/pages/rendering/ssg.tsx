import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'
import { day } from 'src/lib/day'

export const getStaticProps: GetStaticProps<{ date: string }> = async () => {
  return {
    props: {
      date: day().format('YYYY/MM/DD HH:mm:ss'),
    },
  }
}

type SsgProps = InferGetStaticPropsType<typeof getStaticProps>

const Ssg = (props: SsgProps) => {
  return (
    <>
      <Head>
        <title>SSG Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster color="#F0B775" />
        <RenderedAt time={props.date} render="ssg" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Ssg
