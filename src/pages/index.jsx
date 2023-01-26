import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
// import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Website Uptime Monitoring Service & Free Status Pages - Neo Sense
        </title>
        <meta
          name="description"
          content="Get website downtime alerts by WhatsApp, Teams, Slack, Telegram, email, and more. Free uptime monitoring tool, SSL alerts, and beautiful status pages with incidents notifications."
        />
        <meta name="keywords" content="synthetic monitoring, web monitoring" />
        <link rel="canonical" href="https://neosense.hyperjump.tech/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Website Uptime Monitoring Service & Free Status Pages - Neosense"
        />
        <meta
          property="og:description"
          content="Get website downtime alerts by WhatsApp, Teams, Slack, Telegram, email, and more. Free uptime monitoring tool, SSL alerts, and beautiful status pages with incidents notifications."
        />
        <meta property="og:url" content="https://neosense.hyperjump.tech/" />
        <meta property="og:site_name" content="Neo Sense" />

        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
