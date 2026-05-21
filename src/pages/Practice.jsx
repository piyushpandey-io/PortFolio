import React, { useState, useEffect, useRef } from 'react'
import { instaLogo, gitLogo, xLogo, inLogo, css, js, html, rea, tail } from '../assets'
import Card from '../components/Card.jsx'

const socialLinks = [
  { href: '#', src: instaLogo, alt: 'Insta' },
  { href: '#', src: gitLogo, alt: 'Git' },
  { href: '#', src: xLogo, alt: 'X' },
  { href: '#', src: inLogo, alt: 'LinkedIn' },
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

const skills = [
  { logo: html, label: 'HTML' },
  { logo: css, label: 'CSS' },
  { logo: js, label: 'Javascript' },
  { logo: rea, label: 'React' },
  { logo: tail, label: 'Tailwind' },
]
function Practice() {
    const [isActive , setActive]= useState("")

    const Handle=(id)=>{
        console.log("clicked")
        const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth' })
   setTimeout(() => setActive(id), 2000);
    }
return (
    // Main Container: Flexbox for side-by-side layout
    <div className="mt-7 flex h-screen bg-blue-950 overscroll-none overflow-hidden">
      
      {/* Left Container (Sidebar) */}
      <div className="w-1/3 p-12 flex flex-col justify-between bg-blue-950">
        
        {/* Upper part */}
        <div>
          <h1 className="text-4xl font-bold text-amber-50">Piyush Pandey</h1>
          <h2 className="mt-2 text-xl font-bold text-amber-50" >Frontend Devloper</h2>
          <p className="mt-3 text-slate-600">Always searching for new skills to learn</p>
          
          <nav className="mt-16 w-max">
            <ul className="flex flex-col gap-y-4">
                {navItems.map(({ id, label }) => (
                    <li key={id} >
                        <a href={`\ #${id}`} onClick={Handle} className="group flex items-center gap-2 cursor-pointer">
                        <span className='nav-indicator mr-4 h-px w-8 transition-all bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'></span>
                        <span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-100'>{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
          </nav>
        </div>

        {/* Lower part (Socials) */}
        <div className="flex gap-4 p-6">
          {socialLinks.map(({ href, src, alt }) => (
            <a key={alt} href={href} className="hover:opacity-75 transition-opacity">
              <img src={src} alt={alt} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Container (Main Content) */}
      <div className="w-2/3 p-12 flex-1 sticky top-0 overscroll-none overflow-y-auto scrollbar-hide bg-blue-950">
        <section id="about">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-gray-500">
            I am a front-end developer heavily focused on building clean, highly interactive, and responsive user interfaces. Lately, I’ve been working deeply with JavaScript, React, and Vite to create seamless web applications that genuinely feel smooth to navigate. My approach to code is pretty straightforward: I care a lot about clean folder structures, writing reusable components, and ensuring the UI doesn't just look good, but actually performs well under the hood. Beyond just writing code, I love the absolute puzzle of debugging and actively enjoy translating a design concept into a fully functional, living product. I’m constantly looking for sharper ways to optimize state management and streamline my development workflow.
          </p>
        </section>

        <section id="skills" className="mt-15 pt-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-5 pt-6 grid grid-cols-2 gap-2">
            {skills.map(({ logo, label }) => (
              <Card key={label} Logo={logo} Lang={label} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-5 pt-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-4 text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem enim voluptate alias commodi impedit quam qui, cupiditate voluptatum, laboriosam dolorum perspiciatis corrupti veritatis! Possimus eum dicta quisquam? Voluptatum non ut omnis esse et, suscipit qui earum! Eum impedit delectus, dolorem ullam enim vel suscipit numquam minima consectetur porro labore sint amet sequi ratione quo et aperiam est vero beatae ipsam. Enim eaque est odit fugit magni quos doloremque exercitationem nisi ipsa, necessitatibus saepe cum, accusamus explicabo illo adipisci natus maxime quam vero? Libero sunt veritatis quia! Maxime, nulla dolor numquam provident libero harum culpa qui. Corporis vel ad corrupti beatae officia fugiat deserunt, inventore suscipit? Eum animi sint iste, deleniti quia sunt praesentium adipisci quibusdam blanditiis aliquid quae voluptate optio, sit tempore quo amet cupiditate, maxime tempora perspiciatis. Labore doloribus cum, consectetur impedit inventore, veniam non rem quam laboriosam a numquam, deserunt nulla!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque animi, illo saepe itaque excepturi hic, soluta cumque deserunt error corrupti quidem at quos veniam tempora delectus ad doloribus. Sunt delectus magnam numquam! Fugit expedita consequuntur id! Dolorem quo in ex cum ea dignissimos dolore, dolor eius! Suscipit, nulla similique? Modi quod magni eveniet, odit iure officia corporis repudiandae ipsum sed tempore. Itaque cupiditate ducimus mollitia possimus odio? Perferendis cupiditate quis omnis obcaecati totam, explicabo nihil commodi! Eum mollitia ad necessitatibus accusantium totam illo repudiandae eveniet quisquam doloribus delectus ducimus, porro quos temporibus esse earum nisi velit dicta atque iste pariatur deleniti at unde maiores magni. Impedit dolor rerum harum, nisi hic debitis ab iste nobis asperiores temporibus facere aut ex explicabo exercitationem ea rem officia et! Maxime id pariatur minima expedita, consectetur corrupti sequi eos debitis officiis, hic ea explicabo consequatur quod optio amet rem.
          </p>
        </section>
      </div>
      
    </div>
  )
}

export default Practice