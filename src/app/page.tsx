import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    name: "Livraison Instantanée",
    icon: ArrowDownToLine,
    description: "Recevez vos ressources par e-mail en quelques secondes et téléchargez-les immédiatement.",
  },
  {
    name: "Qualité Garantie",
    icon: CheckCircle,
    description: "Toutes les ressources sur notre plateforme est vérifié par notre équipe pour assurer notre plus haut niveau de qualité. Vous n’êtes pas content ? Nous offrons une garantie de remboursement de 30 jours"
  },
  {
    name: "Pour la Planète", 
    icon: Leaf,
    description: "Nous nous sommes engagées à consacrer 1% de nos ventes à la préservation et à la restauration de l’environnement naturel",
  }
]

export default function Home() {

  return (
    <>
      <MaxWidthWrapper>
        <div className={"py-20 mx-auto text-center flex flex-col items-center max-w-3xl"}>
          <h1 className={"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"}>
            Votre place de marché pour une qualité élevée{' '}
            <span className='text-blue-600'>Actifs numériques</span>
            .
          </h1>
          <p className={"mt-6 text-lg max-w-prose text-muted-foreground"}>
            Bienvenue sur DigitalHippo. Chaque actif de notre plateforme est vérifié par notre équipe afin de garantir nos normes de qualité les plus élevées.
          </p>
          <div className={"flex flex-col sm:flex-row gap-4 mt-6"}>
            <Link
              href={"/products"}
              className={buttonVariants()}
            >
              Parcours des Tendences
            </Link>
            <Button
              variant={"ghost"}
            >
              Notre promesse de qualité &rarr;
            </Button>
          </div>
        </div>

        {/* To Do: list project */}
      </MaxWidthWrapper>

      <section className={"border-t bordertgray-200 bg-gray-50"}>
        <MaxWidthWrapper className={"py-20"}>
          <div className={"grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"}>
            {perks.map((perk) => (
              <div key={perk.name} className={"text-center md:flex md:items-start md:text-left lg:block lg:text-center"}>
                <div className={"md:flex-shrink-0 flex justify-center"}>
                  <div className={"h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900"}>
                    {<perk.icon className={"w-1/3 h-1/3"} />}
                  </div>
                </div>

                <div className={"mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6"}>
                  <h3 className={"text-base font-medium text-gray-600"}>
                    {perk.name}
                  </h3>
                  <p className={"mt-3 text-sm text-muted-foreground"}>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
