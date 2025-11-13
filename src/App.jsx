import { useState } from 'react'

const BRAND = {
  primary: '#B77F8A', // Rose Mauve
  black: '#000000',
  white: '#FFFFFF',
}

function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    goal: 'Strength',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a full build, send to backend/CRM. For now, show a lightweight confirmation.
    setSubmitted(true)
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Pilates & Beyond, I'd like to book a trial session.\nName: ${form.name || '-'}\nPhone: ${form.phone || '-'}\nLocation: ${form.location || '-'}\nGoal: ${form.goal || '-'}\nHeard via: Landing Page`
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: BRAND.primary }}
              aria-hidden
            />
            <span className="font-semibold tracking-wide" style={{ letterSpacing: '0.04em' }}>
              Pilates & Beyond
            </span>
          </div>
          <a
            href="tel:+918712612653"
            className="text-sm font-medium hover:opacity-80"
            style={{ color: BRAND.primary }}
          >
            Call Us: +91 87126 12653
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute -top-24 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
            style={{ background: BRAND.primary }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black">
              Premium Reformer Pilates Studio in Hyderabad
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              India’s leading Pilates brand for strength, posture and safe training. Experience
              certified trainers, boutique ambience and results-driven reformer pilates classes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.primary }}></span> Reformer Pilates for strength + posture</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.primary }}></span> Certified trainers, safe progression</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.primary }}></span> Premium studio ambience</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND.primary }}></span> Tier-1 & Tier-2 expertise</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#trial"
                className="px-6 py-3 rounded-md text-white font-medium shadow-sm hover:opacity-95"
                style={{ backgroundColor: BRAND.primary }}
              >
                Book Your Trial Session
              </a>
              <a
                href="https://wa.me/918712612653?text=Hi%20Pilates%20%26%20Beyond%2C%20I%27d%20like%20to%20enquire%20about%20Reformer%20Pilates."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50"
              >
                WhatsApp to Enquire
              </a>
              <a href="tel:+918712612653" className="px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50">
                Call Us: +91 87126 12653
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Popular searches: reformer pilates, pilates studio, pilates classes near me, best pilates in Hyderabad
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1400&auto=format&fit=crop"
                alt="Reformer Pilates studio in Hyderabad"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges / highlights */}
      <section className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['Certified Trainers', 'Personalized attention'],
            ['Reformer Pilates', 'Strength + Posture'],
            ['Premium Ambience', 'Boutique experience'],
            ['Safe Progression', 'Ideal for all levels'],
          ].map(([title, sub]) => (
            <div key={title} className="">
              <div className="text-base font-semibold" style={{ color: BRAND.black }}>{title}</div>
              <div className="mt-1 text-sm text-gray-600">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs / Goals */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-serif text-black">Programs tailored to your goals</h2>
              <p className="mt-4 text-gray-600 max-w-prose">
                Whether you’re building strength, improving posture, or seeking safe rehab-focused training,
                our reformer pilates classes in Hyderabad are designed for measurable progress.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  ['Fat Loss', 'Elevate metabolism with controlled, full-body reformer work.'],
                  ['Strength', 'Build resilient core and functional strength with progressive resistance.'],
                  ['Flexibility', 'Improve mobility, balance and alignment with mindful sequencing.'],
                  ['Rehab', 'Safe, low-impact training guided by certified instructors.'],
                ].map(([t, d]) => (
                  <div key={t} className="p-5 rounded-lg border border-gray-200">
                    <div className="font-medium" style={{ color: BRAND.black }}>{t}</div>
                    <p className="mt-1 text-sm text-gray-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="trial" className="p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-serif text-black">Book Your Trial Session</h3>
              <p className="mt-2 text-sm text-gray-600">Fill in your details and our team will call you back shortly.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required pattern="[0-9+\-\s]{8,15}" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" placeholder="e.g. +91 98xxxxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input name="location" value={form.location} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0" placeholder="Area in Hyderabad" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Goal</label>
                  <select name="goal" value={form.goal} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-400 focus:ring-0">
                    <option>Fat Loss</option>
                    <option>Strength</option>
                    <option>Flexibility</option>
                    <option>Rehab</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-md text-white font-medium shadow-sm hover:opacity-95" style={{ backgroundColor: BRAND.primary }}>
                  Book My Trial Session
                </button>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="tel:+918712612653" className="text-center px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50">Call Us</a>
                  <a href={`https://wa.me/918712612653?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="text-center px-6 py-3 rounded-md font-medium border border-gray-300 hover:bg-gray-50">WhatsApp to Enquire</a>
                </div>
                {submitted && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 p-3 rounded-md">
                    Thank you! We have noted your interest. Our team will reach out shortly.
                  </p>
                )}
              </form>
              <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted by Pilates & Beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reformer Pilates */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif text-black">Why Reformer Pilates?</h2>
              <p className="mt-4 text-gray-600">
                Reformer pilates delivers controlled resistance for enhanced core strength, posture correction
                and flexibility. It’s low-impact and ideal for beginners to advanced clients seeking the best pilates in Hyderabad.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Core strength and spinal alignment</li>
                <li>• Joint-friendly, low-impact training</li>
                <li>• Progressions tailored to your body</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1585515320310-259814833e4e?q=80&w=1400&auto=format&fit=crop"
                  alt="Pilates reformer session for posture and strength"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-serif text-black text-center">Member Stories</h2>
          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
            Real results from clients who chose reformer pilates for strength, posture and mobility.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ['“Noticed better posture within weeks.”', 'Strength + Posture'],
              ['“The ambience feels premium and calming.”', 'Studio Experience'],
              ['“Safe on my knees yet super effective.”', 'Rehab-friendly'],
            ].map(([quote, tag]) => (
              <div key={quote} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <p className="text-gray-800">{quote}</p>
                <div className="mt-4 text-xs font-medium inline-block px-2 py-1 rounded-full" style={{ backgroundColor: '#F4E9EC', color: BRAND.black }}>
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-serif text-black text-center">FAQs</h2>
          <div className="mt-10 space-y-6">
            {[
              [
                'What is reformer pilates?',
                'Reformer pilates uses a specialized machine with springs and pulleys to deliver controlled resistance. It helps build strength, improve posture and flexibility while being low-impact.'
              ],
              [
                'Is reformer pilates good for strength and posture?',
                'Yes. It is designed to strengthen the core and stabilizers which directly supports posture and overall strength.'
              ],
              [
                'How many classes per week should I attend?',
                'We recommend 2–3 sessions weekly for noticeable results. Your coach will guide the ideal frequency.'
              ],
              [
                'Is this suitable for beginners or rehab?',
                'Absolutely. Our certified trainers personalize sessions for beginners and provide safe progressions for rehab.'
              ],
            ].map(([q, a]) => (
              <details key={q} className="group border border-gray-200 bg-white rounded-lg p-5">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <span className="font-medium text-black">{q}</span>
                  <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: BRAND.primary }} aria-hidden />
            <div>
              <div className="font-semibold">Pilates & Beyond</div>
              <p className="text-xs text-gray-500">Reformer Pilates studio · Hyderabad</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/918712612653?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Pilates%20%26%20Beyond%20Hyderabad." target="_blank" rel="noreferrer" className="px-5 py-2 rounded-md text-white font-medium" style={{ backgroundColor: BRAND.primary }}>
              WhatsApp to Enquire
            </a>
            <a href="#trial" className="px-5 py-2 rounded-md font-medium border border-gray-300 hover:bg-gray-50">
              Book Your Trial Session
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">
          © {new Date().getFullYear()} Pilates & Beyond. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
