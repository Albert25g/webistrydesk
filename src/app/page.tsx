<<<<<<< HEAD
import Logo from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';
=======
import Hero from '@/components/Hero';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';
>>>>>>> dev-no-workflow

export default function Home() {
  return (
    <>
      <Hero
        images={['/images/hero-1.jpeg', '/images/hero-2.jpeg']}
        interval={6000}
        title={
          <>Beautifully crafted websites that convert visitors into customers</>
        }
      />

<<<<<<< HEAD
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 hero-silver">
                Beautifully crafted websites that convert visitors into
                customers
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-prose">
                We design fast, accessible, and SEO-friendly sites that focus on
                clarity and results — from discovery to launch and ongoing
                growth.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a Project
                </Link>
                <Link href="/portfolio" className="btn btn-outline">
                  See Portfolio
                </Link>
                <a
                  href="/downloads/design-checklist.html"
                  className="btn btn-ghost text-sm"
                >
                  Free design checklist
                </a>
              </div>
=======
      <main className="container-main">
        <section className="py-12">
          <div className="container-narrow">
            <div className="inline-flex items-center gap-4 mb-4">
              <Logo size="large" showText={true} variant="light" />
              <span className="inline-block rounded-full bg-brand-50 text-brand-600 px-3 py-1 text-sm font-medium">
                Trusted web partners
              </span>
>>>>>>> dev-no-workflow
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
              Beautifully crafted websites that convert visitors into customers
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-prose">
              We design fast, accessible, and SEO-friendly sites that focus on
              clarity and results — from discovery to launch and ongoing growth.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                See Portfolio
              </Link>
            </div>

            <section className="section-tight">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="card hover-lift overflow-hidden">
                  <div className="relative h-40 md:h-48 w-full">
                    <Image
                      src="/images/web-development.jpg"
                      alt="Professional websites"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-xl font-semibold mb-2">
                      Professional Websites
                    </h3>
                    <p className="text-slate-600">
                      Clean, fast, responsive sites tailored to your business.
                    </p>
                  </div>
                </article>

                <article className="card hover-lift overflow-hidden">
                  <div className="relative h-40 md:h-48 w-full">
                    <Image
                      src="/images/seo-marketing.jpg"
                      alt="Digital marketing services"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-xl font-semibold mb-2">
                      Digital Marketing
                    </h3>
                    <p className="text-slate-600">
                      SEO, content, and campaigns that grow traffic and leads.
                    </p>
                  </div>
                </article>

                <article className="card hover-lift overflow-hidden">
                  <div className="relative h-40 md:h-48 w-full">
                    <Image
                      src="/images/ecommerce.jpg"
                      alt="E-commerce solutions"
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                    <p className="text-slate-600">
                      Complete online store solutions with secure payments.
                    </p>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
