"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // Place your JavaScript logic from ./Dev/script.js here inside useEffect
  useEffect(() => {
    // Example: Document event listeners, glitch effects, or cipher link logic
    // const links = document.querySelectorAll('.cipher-link');
    // ...
  }, []);

  return (
    <div className="max-w-5xl w-full relative">
      {/* NavBar */}
      <nav aria-label="Folder Tabs" className="absolute -top-[42px] left-0 flex items-end gap-1 z-0 max-w-full overflow-x-auto">
        <Link href="/" aria-current="page" className="folder-tab h-11 px-4 sm:px-6 md:px-10 flex items-center bg-paper border-x-2 border-t-2 border-ink text-ink font-bold text-[9px] sm:text-[10px] uppercase tracking-widest relative z-30 shrink-0">
          01_Profile
        </Link>
        <Link href="/artifacts" className="folder-tab h-9 px-4 sm:px-6 md:px-10 flex items-center bg-folder border-x-2 border-t-2 border-ink/30 text-ink/70 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest hover:h-10 hover:bg-[#e4d8c8] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0e10] transition-all z-20 shrink-0">
          02_Artifacts
        </Link>
        <Link href="/systems" className="folder-tab h-9 px-4 sm:px-6 md:px-10 flex items-center bg-folder border-x-2 border-t-2 border-ink/30 text-ink/70 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest hover:h-10 hover:bg-[#e4d8c8] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0e10] transition-all z-10 shrink-0">
          03_Systems
        </Link>
      </nav>
      
      <div className="paper-sheet animate-folder w-full p-6 sm:p-8 md:p-16 relative z-10 border-2 border-ink overflow-hidden">
        {/* Header / Banner */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-4 border-ink pb-12 mb-12">
          <div className="md:col-span-8">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-60 boot-glitch">
              Archive Reference: ZA-JHB-8824-ALPHA
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-none mb-6">
              <span className="boot-typewriter">MLAMBO</span> <span className="text-pine boot-typewriter">TSHEPANG</span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-ink text-paper px-3 py-1 text-xs font-bold italic boot-glitch">
                CLASSIFIED: EYES ONLY
              </span>
              <span className="text-xs uppercase tracking-widest border-b border-ink boot-fade">
                Loc:<span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink">Johannesburg, RSA</span>
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-end justify-start">
            <div className="stamp-effect border-4 border-stamp p-4 text-center font-sans boot-fade">
              <div className="text-[10px] font-bold">DEPARTMENT OF</div>
              <div className="text-2xl font-black leading-none">SYSTEMS ARCH</div>
              <div className="text-xs font-bold mt-1">OPERATIVE ACTIVE</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ASIDE */}
          <aside className="lg:col-span-3 space-y-12">
            <div className="bg-folder/30 p-4 border border-ink/10">
              <div className="text-[10px] font-black underline mb-3">
                BIO-METRIC.LOG
              </div>
              <div className="text-[11px] space-y-3 leading-tight">
                <div>
                  <span className="opacity-50">ROLE:</span> <br />
                  SOLUTIONS ARCHITECT
                </div>
                <div>
                  <span className="opacity-50">MODUS:</span> <br />
                  FULL-STACK / EMBEDDED
                </div>
                <div>
                  <span className="opacity-50">RELIABILITY:</span> <br />
                  <span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink">
                    CRITICAL_ASSET
                  </span>
                </div>
              </div>
            </div>
          </aside>
          
          {/* MAIN CONTENT */}
          <main className="lg:col-span-9 space-y-16">
            <section className="prose prose-sm max-w-none">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-black bg-ink text-paper px-4 py-1">P.01</span>
                <h2 className="text-2xl font-sans font-bold uppercase tracking-tight">
                  Executive Intelligence Summary
                </h2>
              </div>

              <div className="columns-1 md:columns-2 gap-10 text-justify">
                <p className="mb-4">
                  Operative Mlambo specializes in the construction of
                  <span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink"> high-latency disruptive </span>
                  digital frameworks. Intel suggests a proficiency in Full-Stack
                  ecosystems that challenge established corporate security
                  protocols.
                </p>

                <blockquote className="border-l-4 border-pine pl-4 py-2 my-6 bg-folder/10 italic">
                  &quot;Subject treats code as structural load-bearing material.
                  Systems are built for architectural purity.&quot;
                </blockquote>

                <p>
                  Subject confirmed as primary architect for
                  <span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink"> Community Culture Matrix</span>. Known technical proficiencies: JS, Python, C#, and
                  low-level hardware manipulation via Arduino interfaces.
                </p>
              </div>
            </section>

            <section className="pt-12 border-t-2 border-ink">
              <div className="flex justify-between items-end mb-8">
                <h3 className="text-xl font-sans font-black uppercase">
                  Exhibit B: Physical Artifacts
                </h3>
                <span className="text-[10px] opacity-40">VOL_REF: 2026_Q1</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group border-2 border-ink p-4 hover:bg-white transition-colors">
                  <div className="aspect-video bg-ink mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    {/* Note: Next.js <Image /> component is highly recommended here for production */}
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Hardware" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <h4 className="font-sans font-bold uppercase text-lg">Arduino Signal Matrix</h4>
                  <p className="text-[11px] mt-2 opacity-70">
                    Low-latency signal routing for precision agriculture and smart farming applications.
                  </p>
                </div>

                <div className="border-2 border-ink p-6 bg-folder/20 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <i className="material-symbols-outlined text-4xl">dynamic_form</i>
                      <span className="text-[9px] font-bold border border-ink px-1 uppercase">Metric: Verified</span>
                    </div>
                    <h4 className="font-sans font-bold uppercase text-lg">Daily UI Forge</h4>
                    <p className="text-[11px] mt-2 italic leading-relaxed">
                      Systematic production of professional-grade mockups. Current output:
                      <span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink"> 30+ Prototypes</span>.
                    </p>
                  </div>
                  <Link href="#" className="mt-8 text-xs font-black underline flex items-center gap-2 group uppercase">
                    Request Access
                    <i className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</i>
                  </Link>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 border-2 border-ink divide-x-2 divide-ink">
              <div className="p-4"><div className="text-3xl font-sans font-black">08+</div><div className="text-[9px] font-bold uppercase opacity-60">Yrs Ops</div></div>
              <div className="p-4"><div className="text-3xl font-sans font-black">142</div><div className="text-[9px] font-bold uppercase opacity-60">Deployments</div></div>
              <div className="p-4"><div className="text-3xl font-sans font-black text-pine">99.9%</div><div className="text-[9px] font-bold uppercase opacity-60">Uptime</div></div>
              <div className="p-4"><div className="text-3xl font-sans font-black">24/7</div><div className="text-[9px] font-bold uppercase opacity-60">Watch Mode</div></div>
            </section>
          </main>
        </div>

        <footer className="mt-20 pt-8 border-t-2 border-ink flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <small className="text-[10px] leading-relaxed opacity-70 max-w-sm font-bold block uppercase">
            RECORDED UNDER DIGITAL INTELLIGENCE ACT. UNAUTHORIZED REPRODUCTION IS SUBJECT TO
            <span tabIndex={0} className="redacted-text px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine focus-visible:text-paper focus-visible:bg-ink"> SYSTEM_PURGE</span>.
          </small>
          <div className="flex flex-wrap gap-4 md:gap-8 text-[11px] font-black uppercase tracking-widest">
            <Link href="#" data-value="G_HUB" data-text="G_HUB" className="cipher-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine">G_HUB</Link>
            <Link href="#" data-value="L_INKEDIN" data-text="L_INKEDIN" className="cipher-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine">L_INKEDIN</Link>
            <Link href="#" data-value="ENCRYPT_MAIL" data-text="ENCRYPT_MAIL" className="cipher-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine">ENCRYPT_MAIL</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}