import Image from 'next/image'

type RenderMonsterProps = {
  render?: 'csr' | 'ssr' | 'ssg' | 'isr'
}

export const RenderMonster = (props: RenderMonsterProps) => {
  const src = `/svg/monster_${props.render ?? 'home'}.svg`

  return <Image src={src} alt="render monster" width={300} height={300} />
}
