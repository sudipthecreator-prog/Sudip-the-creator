/*
  Sudip Ghosh — Premium One-file React Portfolio (Tailwind)

  Instructions:
  1. Save this file as `SudipPortfolio.jsx` inside `src/components` of a React app configured with TailwindCSS.
  2. Import and render in `App.jsx` or `App.js`: `import SudipPortfolio from './components/SudipPortfolio'` then use `<SudipPortfolio />`.
  3. Replace `data.contact` and `data.photo` placeholders as needed. For reliability, use an external image URL or Base64.

  Features in this professional version:
  - Clean premium beige background with subtle texture
  - Glass-card left panel and crisp content cards on right
  - Clear typography, gold accent, and responsive layout
  - Contact CTA, Download PDF (print-friendly), and copy-to-clipboard
  - Accessible semantic HTML and small utility functions
*/

import React from 'react'

export default function SudipPortfolio(){
  const data = {
    name: 'SUDIP GHOSH',
    title: 'MIS & Accounts Professional',
    address: 'H.N Colony, Barmasia, Dhanbad, Jharkhand – 826001',
    languages: ['Hindi','Bengali','English'],
    dob: '13 July 1994',
    contact: 'sudipghosh8797@gmail.com',
    phone: '', // add if you want
    photo: '', // add a URL or Base64 string
    summary: `Result-oriented MIS & Accounts professional with extensive experience in reporting, automation, cash handling and team coordination. Skilled at turning raw data into actionable insights to improve operations and collections.`,
    experience: [
      { company:'Neyah Wellness', role:'MIS Executive', period:'2024 – Present', points:[ 'Maintaining daily MIS dashboards and KPI reports','Automated reporting with Google Sheets and Excel','Sales & collection analysis for management'] },
      { company:'Shankar Mall', role:'Department Incharge / Accounts Executive / Cashier', period:'2015 – 2024', points:[ 'Managed cash operations, billing & reconciliations','Prepared daily sales & inventory reports','Led store staff and improved process efficiency'] },
      { company:'Bridge & Roof Co. (India) Ltd.', role:'Site Supervisor', period:'2012 – 2014', points:[ 'Supervised site activities and manpower','Coordinated material movement and daily progress reports'] }
    ],
    education: [
      { degree:'Matric (10th)', school:'Pranjivan Academy, JAC Board', year:'2010' },
      { degree:'Intermediate (12th)', school:'RSP College', year:'2012' },
      { degree:'Tally Certification', school:'Chaya Computer, Jharkhand', year:'2012' }
    ],
    skills: ['MIS Reporting','Excel (VLOOKUP, Pivot, Dashboards)','Google Sheets Automation','Tally ERP','Billing & Cash Handling','Team Coordination'],
    tools: ['Excel','Google Sheets','Tally ERP','PowerPoint','Basic SQL'],
    declaration: 'I hereby declare that the above information is true to the best of my knowledge.',
    place: 'Dhanbad'
  }

  // downloadTextResume removed

  const copyEmail = async () => {
    try{ await navigator.clipboard.writeText(data.contact); alert('Email copied to clipboard') }catch(e){ alert('Copy failed') }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5e6d3] via-[#f7ecdf] to-[#fcf7f1] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">{data.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{data.title} • {data.address}</p>
          </div>
          <div className="flex gap-3 items-center">
            {/* Download TXT removed */}
            <button onClick={copyEmail} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-md text-sm border">Copy Email</button>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* left card */}
          <aside className="md:col-span-1 bg-white/60 backdrop-blur-sm border border-white/60 p-6 rounded-2xl shadow">
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center ring-2 ring-amber-200">
                {data.photo ? (
                  <img src={data.photo} alt="profile" className="w-full h-full object-cover" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5c1.657 0 3 1.343 3 3S13.657 10.5 12 10.5 9 9.157 9 7.5s1.343-3 3-3zM6 20.25a6 6 0 0112 0" />
                  </svg>
                )}

                </div>

              <h2 className="mt-4 text-lg font-semibold text-gray-800">{data.name}</h2>
              <p className="text-sm text-gray-600">{data.title}</p>

              <div className="w-full mt-4 space-y-2 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Contact</p>
                  <p className="truncate">{data.contact}</p>
                  {data.phone && <p>{data.phone}</p>}
                </div>

                <div>
                  <p className="font-semibold mt-2">Languages</p>
                  <p>{data.languages.join(', ')}</p>
                </div>

                <div>
                  <p className="font-semibold mt-2">DOB</p>
                  <p>{data.dob}</p>
                </div>

                <div className="mt-4">
                  <a href={`mailto:${data.contact}`} className="text-sm px-3 py-2 bg-amber-50 text-amber-800 rounded-md inline-block">Email</a>
                </div>
              </div>

            </div>
          </aside>

          {/* right content */}
          <main className="md:col-span-2 space-y-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800">Professional Summary</h3>
              <p className="mt-2 text-gray-700">{data.summary}</p>
            </section>

            <section className="grid gap-4">
              <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
              <div className="space-y-4">
                {data.experience.map((exp, idx)=> (
                  <article key={idx} className="p-4 rounded-lg border bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">{exp.company}</h4>
                        <p className="text-sm text-gray-600">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-gray-700">
                      {exp.points.map((p,i)=>(<li key={i}>{p}</li>))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border">
                <h3 className="font-semibold text-gray-800">Education</h3>
                <ul className="mt-3 list-disc pl-5 text-gray-700">
                  {data.education.map((ed,i)=>(<li key={i}>{ed.degree} — {ed.school} ({ed.year})</li>))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border">
                <h3 className="font-semibold text-gray-800">Skills & Tools</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.skills.map((s,i)=>(<span key={i} className="text-sm px-3 py-1 bg-gray-100 rounded-full">{s}</span>))}
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-semibold">Tools</p>
                  <p>{data.tools.join(', ')}</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold text-gray-800">Declaration</h3>
              <p className="mt-2 text-gray-700">{data.declaration}</p>
              <p className="mt-2 text-gray-700"><strong>Place:</strong> {data.place} <span className="ml-4"> <strong>Date:</strong> {new Date().toLocaleDateString()}</span></p>
            </section>

          </main>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-600">Designed & generated — Professional portfolio for recruiters • Replace contact/photo before publishing.</footer>
      </div>
    </div>
  )
}
