import { useEffect, useState } from 'react'
import { content, type Lang } from './i18n/content'
import { useReveal } from './hooks/useReveal'

const LANG_KEY = 'pstd-lang'

function initialLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY)
  if (saved === 'he' || saved === 'en') return saved
  const nav = navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('he') ? 'he' : 'he'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    localStorage.setItem(LANG_KEY, lang)
    document.title =
      lang === 'he'
        ? 'PSTD · המטה לנפגעי פוסט-טראומה'
        : 'PSTD · The Post-Traumatic Support Center'
  }, [lang, t.dir])

  useReveal(lang)

  const toggleLang = () => setLang((l) => (l === 'he' ? 'en' : 'he'))

  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand-lockup" href="#top" aria-label={t.org}>
            <img src="/images/pstd-logo.png" alt="PSTD" width={154} height={40} />
            <span className="brand-text">
              <small>{t.tagline}</small>
              <strong>{t.org}</strong>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#reality">{t.nav.reality}</a>
            <a href="#facts">{t.nav.facts}</a>
            <a href="#model">{t.nav.model}</a>
            <a href="#place">{t.nav.place}</a>
            <a href="#outdoor">{t.nav.outdoor}</a>
            <a href="#invest">{t.nav.invest}</a>
          </nav>

          <div className="header-actions">
            <button type="button" className="lang-toggle" onClick={toggleLang}>
              {t.langLabel}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-label="Hero">
          <div className="hero-media" aria-hidden="true">
            <img
              src="/images/hero-veteran.jpg"
              alt=""
              width={1440}
              height={1260}
              fetchPriority="high"
            />
          </div>
          <div className="hero-inner">
            <div className="hero-brand">
              <img
                src="/images/pstd-logo.png"
                alt="PSTD"
                width={1534}
                height={401}
                decoding="async"
              />
              <div className="org">{t.org}</div>
            </div>
            <h1>{t.hero.headline}</h1>
            <p className="support">{t.hero.support}</p>
            <p className="partnership">{t.hero.partnership}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#invest">
                {t.hero.ctaHelp}
              </a>
              <a className="btn btn-ghost" href="#invest">
                {t.hero.ctaPartner}
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="reality">
          <div className="shell">
            <p className="section-kicker reveal">{t.reality.kicker}</p>
            <h2 className="reveal">{t.reality.headline}</h2>
            <hr className="rule reveal" />
            <p className="lead reveal">{t.reality.lead}</p>
            <p className="body reveal">{t.reality.body}</p>

            <div className="reality-grid reveal">
              <div className="points">
                {t.reality.points.map((p) => (
                  <div className="point" key={p}>
                    {p}
                  </div>
                ))}
              </div>
              <aside className="promise">
                <p className="label">{t.reality.promiseTitle}</p>
                <p>{t.reality.promise}</p>
                <p className="more">{t.reality.promiseBody}</p>
              </aside>
            </div>

            <figure className="media-band reveal">
              <img
                src="/images/reality-boots.jpg"
                alt=""
                width={1280}
                height={720}
                loading="lazy"
              />
              <figcaption>{t.reality.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section facts" id="facts">
          <div className="shell">
            <p className="section-kicker reveal">{t.facts.kicker}</p>
            <h2 className="reveal">{t.facts.headline}</h2>
            <p className="lead reveal">{t.facts.lead}</p>
            <div className="fact-list">
              {t.facts.items.map((item) => (
                <article className="fact reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <p className="closer reveal">{t.facts.closer}</p>
          </div>
        </section>

        <section className="section" id="model">
          <div className="shell">
            <p className="section-kicker reveal">{t.model.kicker}</p>
            <h2 className="reveal">{t.model.headline}</h2>
            <p className="lead reveal">{t.model.lead}</p>
            <div className="pillars">
              {t.model.pillars.map((pillar) => (
                <article className="pillar reveal" key={pillar.title}>
                  <div className="pillar-media">
                    <img src={pillar.image} alt="" width={640} height={400} loading="lazy" />
                  </div>
                  <div>
                    <div className="num">{pillar.num}</div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="model-footer reveal">
              <strong>{t.model.footer}</strong>
              <span>{t.model.values}</span>
            </div>
          </div>
        </section>

        <section className="section place" id="place">
          <div className="shell">
            <p className="section-kicker reveal">{t.place.kicker}</p>
            <h2 className="reveal">{t.place.headline}</h2>
            <p className="lead reveal">{t.place.lead}</p>
            <p className="body reveal">{t.place.body}</p>

            <div className="contrast reveal">
              <div className="contrast-box is">
                <p className="label">{t.place.isTitle}</p>
                <p>{t.place.is}</p>
              </div>
              <div className="contrast-box not">
                <p className="label">{t.place.isNotTitle}</p>
                <p>{t.place.isNot}</p>
              </div>
            </div>

            <figure className="campus reveal">
              <img
                src="/images/campus-vision.jpg"
                alt={lang === 'he' ? 'הדמיית כפר הריפוי' : 'Healing village campus visualization'}
                width={1024}
                height={558}
                loading="lazy"
              />
            </figure>

            <div className="spaces">
              <p className="section-kicker reveal">{t.place.spacesKicker}</p>
              <h2 className="reveal">{t.place.spacesHeadline}</h2>
              <p className="lead reveal">{t.place.spacesLead}</p>
              <div className="space-grid">
                {t.place.spaces.map((space) => (
                  <article className="space reveal" key={space.title}>
                    <div className="space-media">
                      <img src={space.image} alt="" width={640} height={440} loading="lazy" />
                    </div>
                    <h3>{space.title}</h3>
                    <p>{space.body}</p>
                  </article>
                ))}
              </div>
              <p className="body reveal" style={{ marginTop: '1.6rem', fontWeight: 650 }}>
                {t.place.caption}
              </p>
            </div>
          </div>
        </section>

        <section className="section outdoor" id="outdoor">
          <div className="shell">
            <p className="section-kicker reveal">{t.outdoor.kicker}</p>
            <h2 className="reveal">{t.outdoor.headline}</h2>
            <p className="lead reveal">{t.outdoor.lead}</p>
            <p className="body reveal">{t.outdoor.body}</p>
            <div className="program-grid">
              {t.outdoor.programs.map((program) => (
                <article className="program reveal" key={program.title}>
                  <div className="program-media">
                    <img src={program.image} alt="" width={640} height={440} loading="lazy" />
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.body}</p>
                </article>
              ))}
            </div>
            <div className="traits reveal">
              {t.outdoor.traits.map((trait) => (
                <span className="trait" key={trait}>
                  {trait}
                </span>
              ))}
            </div>
            <p className="outdoor-footer reveal">{t.outdoor.footer}</p>
          </div>
        </section>

        <section className="section invest" id="invest">
          <div className="shell">
            <p className="section-kicker reveal">{t.invest.kicker}</p>
            <h2 className="reveal">{t.invest.headline}</h2>
            <p className="lead reveal">{t.invest.lead}</p>
            <p className="body reveal">{t.invest.body}</p>
            <p className="plea reveal">{t.invest.plea}</p>
            <div className="outcomes reveal">
              {t.invest.outcomes.map((o) => (
                <div className="outcome" key={o}>
                  {o}
                </div>
              ))}
            </div>

            <div className="cta-panels">
              <div className="panel reveal">
                <h3>{t.invest.helpTitle}</h3>
                <span className="placeholder">{t.invest.helpPhone}</span>
                <span className="placeholder">{t.invest.helpEmail}</span>
                <p className="hint">
                  {lang === 'he'
                    ? 'מציין מקום עד שיפורסמו פרטי הקשר הרשמיים.'
                    : 'Placeholder until official contact channels are published.'}
                </p>
              </div>
              <div className="panel reveal">
                <h3>{t.invest.partnerTitle}</h3>
                <span className="placeholder">{t.invest.partnerUrl}</span>
                <div className="cta-row" style={{ marginTop: '1rem' }}>
                  <a className="btn btn-solid" href="#invest">
                    {t.hero.ctaPartner}
                  </a>
                  <a className="btn btn-outline" href="#top">
                    {t.brand}
                  </a>
                </div>
                <p className="hint">
                  {lang === 'he'
                    ? 'מציין מקום לקישור תרומה / שותפות אסטרטגית.'
                    : 'Placeholder for donate / strategic partnership URL.'}
                </p>
              </div>
            </div>
            <p className="trust reveal">{t.invest.trust}</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <img src="/images/pstd-logo.png" alt="PSTD" width={112} height={30} />
            <strong>{t.footer.rights}</strong>
          </div>
          <div>{t.footer.note}</div>
        </div>
      </footer>
    </>
  )
}
