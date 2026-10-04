import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLayers, FiMail } from 'react-icons/fi'
import {
  capabilities,
  focusAreas,
  navigation,
  profile,
  selectedProjects,
  supportingProjects,
} from './data/portfolioData'

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-8 md:mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-cyan-700 uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-slate-600">{description}</p> : null}
    </header>
  )
}

function AnimatedBlock({ children, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60" aria-hidden>
        <div className="absolute inset-x-0 top-[-140px] mx-auto h-[420px] w-[90%] max-w-5xl rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-120px] top-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
          >
            {profile.name}
          </a>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-end gap-2 sm:gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-2 py-1 text-sm text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <section id="top" className="border-b border-slate-200 py-16 md:py-24">
          <AnimatedBlock>
            <p className="text-xs font-semibold tracking-[0.2em] text-cyan-700 uppercase">Developer Portfolio</p>
            <h1 className="mt-4 max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {profile.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.github}
                {...externalLinkProps}
                className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                aria-label="Open Akash R GitHub profile"
              >
                <FiGithub aria-hidden />
                GitHub Profile
              </a>
              <a
                href={profile.portfolio}
                {...externalLinkProps}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                aria-label="Open current live portfolio deployment"
              >
                Live Portfolio
                <FiArrowUpRight aria-hidden />
              </a>
            </div>
          </AnimatedBlock>
        </section>

        <section id="projects" className="border-b border-slate-200 py-16 md:py-20">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects centered on applied AI, health-tech flows, and real-time interfaces"
            description="A focused selection from public repositories, with verified source and demo links."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {selectedProjects.map((project, index) => (
              <AnimatedBlock key={project.name} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.description}</p>
                  {project.disclaimer ? (
                    <p className="mt-3 rounded-md border border-amber-300/40 bg-amber-100 px-3 py-2 text-xs text-amber-900">
                      {project.disclaimer}
                    </p>
                  ) : null}
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                    {project.stack.map((tag) => (
                      <li key={tag} className="rounded-full border border-slate-300 px-2.5 py-1 text-xs text-slate-700">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.sourceUrl}
                      {...externalLinkProps}
                      className="inline-flex items-center gap-2 rounded-md text-sm text-cyan-700 underline-offset-3 transition hover:text-cyan-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                      aria-label={`Open ${project.name} source repository`}
                    >
                      Source
                      <FiArrowUpRight aria-hidden />
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        {...externalLinkProps}
                        className="inline-flex items-center gap-2 rounded-md text-sm text-indigo-700 underline-offset-3 transition hover:text-indigo-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                        aria-label={`Open ${project.name} live demo`}
                      >
                        Live Demo
                        <FiArrowUpRight aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </article>
              </AnimatedBlock>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-100/70 p-5">
            <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">Additional Projects</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {supportingProjects.map((project) => (
                <li key={project.name} className="rounded-lg border border-slate-200 bg-white p-3">
                  <a
                    href={project.sourceUrl}
                    {...externalLinkProps}
                    className="inline-flex items-center gap-1 text-sm font-medium text-cyan-700 hover:text-cyan-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
                    aria-label={`Open ${project.name} source repository`}
                  >
                    {project.name}
                    <FiArrowUpRight aria-hidden />
                  </a>
                  <p className="mt-1 text-xs text-slate-500">{project.stack.join(' • ')}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="capabilities" className="border-b border-slate-200 py-16 md:py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="From idea framing to shipped interfaces"
            description="A practical toolkit for building and iterating on modern web products."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <AnimatedBlock key={capability.title} delay={index * 0.05}>
                <article className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <FiLayers aria-hidden className="text-cyan-700" />
                    {capability.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {capability.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden className="mt-[0.4rem] h-1.5 w-1.5 rounded-full bg-cyan-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedBlock>
            ))}
          </div>

          <aside className="mt-10 rounded-xl border border-cyan-300/50 bg-cyan-50 p-5" aria-label="Current focus areas">
            <h3 className="text-sm font-semibold tracking-wide text-cyan-900 uppercase">Currently exploring</h3>
            <ul className="mt-3 space-y-2 text-sm text-cyan-800">
              {focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="about" className="border-b border-slate-200 py-16 md:py-20">
          <SectionHeading
            eyebrow="About"
            title="A builder's mindset shaped by rapid experimentation"
            description="I enjoy translating complex technical ideas into product experiences that feel clear, fast, and reliable."
          />
          <p className="max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Across AI-focused prototypes and real-time web products, my approach is to scope quickly, ship useful increments,
            and refine with strong UX fundamentals. I care about practical outcomes, responsible interfaces, and sustainable
            front-end architecture.
          </p>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s collaborate on thoughtful AI product experiences"
            description="The best way to reach me is through GitHub — follow activity, open an issue, or start a discussion on a relevant repository."
          />
          <a
            href={profile.github}
            {...externalLinkProps}
            className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            aria-label="Connect with Akash R on GitHub"
          >
            <FiMail aria-hidden />
            Connect on GitHub
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Built with React, Tailwind CSS, and Framer Motion. © {new Date().getFullYear()} {profile.name}.
      </footer>
    </div>
  )
}

export default App
