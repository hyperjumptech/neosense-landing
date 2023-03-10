import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-green-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        style={{ filter: 'hue-rotate(-80deg)' }}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Don&lsquo;t let issues with your systems and applications slow you
            down. See the difference it can make for your business.
          </p>
          <Button
            href="https://neosense.bgnlab.id/register"
            color="white"
            className="mt-10"
          >
            Get it free
          </Button>
        </div>
      </Container>
    </section>
  )
}
