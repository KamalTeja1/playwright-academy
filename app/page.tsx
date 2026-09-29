"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkle,
  ArrowRight,
  BookOpen,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  return (
    <div>
      <section className="px-6 md:px-12 pt-[46px] pb-[40px]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-[#eef7ff] border border-[#A6D1EA] text-[#007AC3] text-[12px] font-bold mb-3"
          >
            <Sparkle size={14} weight="duotone" />
            <span>Zero to hero · Python + TypeScript</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[44px] md:leading-tight font-extrabold text-[#0c2536] max-w-3xl"
          >
            Learn Playwright. From zero.
            <br />
            <span className="bg-gradient-to-r from-[#007AC3] to-[#85BC20] bg-clip-text text-transparent">
              In your language.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-[#46586a] text-[15.5px] leading-relaxed"
          >
            A structured learning path that takes you from "what is code?" to
            building production-grade Playwright test frameworks. Explained in
            simple, friendly English with real examples and hands-on practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/phases"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-white font-semibold text-[13.5px] transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(120deg, #007AC3, #409BD2)",
                boxShadow: "0 6px 18px rgba(0,122,195,0.30)",
              }}
            >
              Start Learning
              <ArrowRight
                size={18}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[13.5px] bg-white text-[#0c2536] border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <BookOpen size={18} weight="duotone" />
              View Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Phases", value: "10" },
            { label: "Topics", value: "900+" },
            { label: "Languages", value: "2" },
            { label: "Hands-On", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white border rounded-[14px] p-4 shadow-sm"
            >
              <div className="text-[24px] font-extrabold text-[#0c2536] leading-none">
                {stat.value}
              </div>
              <div className="text-[12px] uppercase text-[#7c8ea0] mt-1.5 tracking-wider font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[16px] p-10 md:p-14 text-white shadow-lg relative overflow-hidden"
            style={{
              background:
                "linear-gradient(125deg, #005c95 0%, #007AC3 40%, #409BD2 75%, #85BC20 140%)",
            }}
          >
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[20px] bg-white/15 backdrop-blur-sm text-[12px] font-bold uppercase tracking-wider mb-4">
                <Robot size={14} weight="duotone" />
                Ready when you are
              </div>
              <h2 className="text-[28px] md:text-[34px] font-extrabold leading-tight mb-3">
                Your Playwright journey starts with one topic.
              </h2>
              <p className="text-white/85 text-[15px] mb-6 max-w-lg">
                No setup headaches. No jargon. Just a clear path from "I have
                never coded" to "I can build a test framework."
              </p>
              <Link
                href="/phases"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] bg-white text-[#007AC3] font-semibold text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Open the first phase
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}