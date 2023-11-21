import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className={"py-20 mx-auto text-center flex flex-col items-center max-w-3xl"}>
        <h1>
          Votre place de marché pour une qualité élevée{' '}
          <span>Actifs numériques</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  )
}
