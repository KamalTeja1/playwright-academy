"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkle,
  ArrowRight,
  BookOpen,
  Code,
  Trophy,
  Robot,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 md:px-12 pt-[60px] pb-[50px]">
        {/* Floating decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 animate-float-slow"
            style={{
              background:
                "radial-gradient(circle, rgba(64,155,210,0.4), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute top-40 -right-20 w-80 h-80 rounded-full opacity-25 animate-float-slow"
            style={{
              animationDelay: "-7s",
              background:
                "radial-gradient(circle, rgba(133,188,32,0.4), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[20px] bg-blue-25 border border-[#A6D1EA] text-[#007AC3] text-[12px] font-bold mb-4"
          >
            <Sparkle size={14} weight="duotone" />
            <span>Zero to hero · Python + TypeScript</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[52px] md:leading-[1.08] font-extrabold text-ink-900 max-w-3xl tracking-tight"
          >
            Learn Playwright. From zero.
            <br />
            <span className="gradient-text">In your language.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-ink-600 text-[16px] leading-relaxed"
          >
            A structured learning path that takes you from{" "}
            <em className="font-semibold text-[#007AC3] not-italic">
              "what is code?"
            </em>{" "}
            to building production-grade Playwright test frameworks. Explained
            in simple, friendly English with real examples and hands-on
            practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/phases"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] text-white font-semibold text-[13.5px] bg-gradient-btn shadow-btn hover:shadow-btn-hover transition-all hover:-translate-y-0.5 overflow-hidden"
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s linear infinite",
                }}
              />
              <span className="relative">Start Learning</span>
              <ArrowRight
                size={18}
                weight="bold"
                className="relative group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] font-semibold text-[13.5px] bg-surface dark:bg-[#0e2a44] text-ink-900 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 hover:border-[#409BD2]"
            >
              <BookOpen size={18} weight="duotone" />
              View Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Phases", value: "10", icon: BookOpen, color: "#007AC3" },
            { label: "Topics", value: "900+", icon: Code, color: "#85BC20" },
            {
              label: "Languages",
              value: "2",
              icon: Lightning,
              color: "#E8A317",
            },
            { label: "Hands-On", value: "100%", icon: Trophy, color: "#E5202E" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-surface dark:bg-[#0e2a44] border border-border rounded-[14px] p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-2.5"
                style={{
                  background: `${stat.color}15`,
                  color: stat.color,
                }}
              >
                <stat.icon size={18} weight="duotone" />
              </div>
              <div className="text-[26px] font-extrabold text-ink-900 leading-none">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase text-ink-400 mt-1.5 tracking-wider font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[22px] font-extrabold text-ink-900 mb-2"
          >
            How it works
          </motion.h2>
          <p className="text-ink-600 mb-10 max-w-xl">
            Three simple steps. No prior experience needed.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                title: "Follow the path",
                desc: "Start from Phase -1 if you have never coded. Each phase builds on the last.",
                icon: BookOpen,
                color: "#007AC3",
              },
              {
                n: "02",
                title: "Practice each topic",
                desc: "Every topic has notes, hands-on exercises, and a challenge to stretch you.",
                icon: Code,
                color: "#85BC20",
              },
              {
                n: "03",
                title: "Track your progress",
                desc: "Weekly streaks, achievements, and a dashboard that shows exactly how far you have come.",
                icon: Trophy,
                color: "#E8A317",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="gradient-border-hover relative bg-gradient-to-br from-[#f7fbff] to-[#eef6fc] dark:from-[#0e2a44] dark:to-[#143550] border border-border rounded-[14px] p-6 shadow-sm hover:shadow-md"
              >
                <div
                  className="text-[42px] font-extrabold leading-none mb-3"
                  style={{ color: `${step.color}25` }}
                >
                  {step.n}
                </div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${step.color}15`, color: step.color }}
                >
                  <step.icon size={22} weight="duotone" />
                </div>
                <h3 className="text-[15.5px] font-bold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-ink-600 text-[13.5px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-20">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[20px] bg-surface/15 backdrop-blur-sm text-[12px] font-bold uppercase tracking-wider mb-4">
                <Robot size={14} weight="duotone" />
                Ready when you are
              </div>
              <h2 className="text-[28px] md:text-[36px] font-extrabold leading-tight mb-3">
                Your Playwright journey starts with one topic.
              </h2>
              <p className="text-white/85 text-[15px] mb-6 max-w-lg">
                No setup headaches. No jargon. Just a clear path from "I have
                never coded" to "I can build a test framework."
              </p>
              <Link
                href="/phases"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] bg-surface text-[#007AC3] font-semibold text-[13.5px] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Open the first phase
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
            {/* Decorative circles */}
            <div
              className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-20 animate-float"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.6), transparent 70%)",
              }}
            />
            <div
              className="absolute -right-16 -bottom-32 w-72 h-72 rounded-full opacity-15 animate-float-slow"
              style={{
                animationDelay: "-5s",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)",
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}