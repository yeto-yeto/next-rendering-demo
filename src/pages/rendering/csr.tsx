import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Container } from 'src/components/Container'
import { RenderedAt } from 'src/components/RenderedAt'
import { RenderMonster } from 'src/components/RenderMonster'
import { RenderNav } from 'src/components/RenderNav'
import { day } from 'src/lib/day'

const Csr = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const randomTime = ~~(Math.random() * (1001 - 100)) + 100
    setTimeout(() => {
      setTime(day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'))
    }, randomTime)
  }, [])

  return (
    <>
      <Head>
        <title>CSR Rendering Demo</title>
      </Head>
      <Container>
        <RenderMonster color="#2E94B9" />
        <RenderedAt time={time} render="csr" />
        <RenderNav />
      </Container>
    </>
  )
}

export default Csr
