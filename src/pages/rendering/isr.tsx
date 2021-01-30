import dayjs from 'dayjs'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'

export const getStaticProps: GetStaticProps<{ date: string }> = async () => {
  return {
    props: {
      date: dayjs().format('YYYY/MM/DD HH:mm:ss'),
    },
    revalidate: 1,
  }
}

type IsrProps = InferGetStaticPropsType<typeof getStaticProps>

const Isr = (props: IsrProps) => {
  return (
    <>
      <Head>
        <title>ISR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster color="#D25565" />
        <RenderedAt time={props.date} render="isr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Isr
