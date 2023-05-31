import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function MonikaSection() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Open source powered
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            NEO Sense is powered by the free and open source synthetic monitoring command line tools called Monika by Hyperjump.
          </p>
          <Button
            href="https://monika.hyperjump.tech/"
            className="mt-10"
          >
            Check it out
          </Button>
        </div>
      </Container>
    </section>
  )
}
