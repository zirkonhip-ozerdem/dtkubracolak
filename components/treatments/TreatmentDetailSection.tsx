"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  implantSection: Dictionary["treatments"]["implantSection"];
};

export function TreatmentDetailSection({ implantSection }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white pt-8 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Tab */}
        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full border border-[#c9a36d] bg-[#c9a36d] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white"
          >
            {implantSection.tab}
          </button>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Video */}
          <div className="relative overflow-hidden rounded-2xl bg-[#e8edf2]" style={{ minHeight: 420 }}>
            <video
              src="/videos/implant.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
              {implantSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#252525] sm:text-4xl">
              {implantSection.title}
            </h2>

            <ol className="mt-8">
              {implantSection.steps.map((step, i) => {
                const isStepActive = i === activeStep;
                const isLast = i === implantSection.steps.length - 1;
                return (
                  <li key={i} className="relative flex gap-5">
                    {!isLast && (
                      <span
                        className="absolute left-[10px] top-6 h-full w-px bg-[#d0d7e3]"
                        aria-hidden
                      />
                    )}
                    <button
                      onClick={() => setActiveStep(i)}
                      aria-label={step.title}
                      className="relative mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center"
                    >
                      {isStepActive ? (
                        <span className="h-5 w-5 rounded-full bg-[#c9a36d]" />
                      ) : (
                        <span className="h-5 w-5 rounded-full border-2 border-[#c0cad8]" />
                      )}
                    </button>
                    <div className={isLast ? "pb-0" : "pb-6"}>
                      <p
                        className={[
                          "cursor-pointer text-base font-bold leading-5 transition-colors",
                          isStepActive ? "text-[#252525]" : "text-[#9aa5b4] hover:text-[#252525]",
                        ].join(" ")}
                        onClick={() => setActiveStep(i)}
                      >
                        {step.title}
                      </p>
                      {isStepActive && (
                        <p className="mt-2 text-sm leading-6 text-[#5d6b7a]">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <blockquote className="mt-6 border-l-4 border-[#c0cad8] pl-5 text-sm leading-7 text-[#5d6b7a]">
              {implantSection.summary}
            </blockquote>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl bg-[#c9a36d] px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
                Tedavimi Planla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
