"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Mic,
  Sparkles,
  FileText,
  Cloud,
  Zap,
  ChevronRight,
  Github,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  // 视差效果：Hero 区域随着滚动稍微向下移动并变淡
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-x-hidden selection:bg-indigo-500/30 scroll-smooth">
      {/* 顶部环境光 - 更加柔和深邃 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] invert" />
      </div>

      {/* Navigation - 顶部渐变条，融入背景 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Classby logo"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight">Classby</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">
              功能
            </Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">
              流程
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              隐私
            </Link>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-1"
            >
              下载 App <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-48 pb-32 px-6 z-10 flex flex-col items-center text-center"
      >
        {/* Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium hover:bg-indigo-500/20 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            全新 2.0 版本现已发布
            <ChevronRight className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          听见，
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            然后记住一切。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Classby 利用设备端 AI，将稍纵即逝的课堂语音转化为
          <br className="hidden md:block" />
          结构清晰的智能笔记。不只是录音，更是你的第二大脑。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative h-12 px-8 rounded-full bg-white text-black font-semibold text-sm overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity w-[200%]" />
            <span className="relative flex items-center gap-2">
              App Store 下载 <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

        {/* High Fidelity Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
          className="mt-20 relative w-full max-w-5xl perspective-1000"
        >
          {/* 顶部光效 */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-indigo-500/20 blur-[100px] rounded-full" />

          {/* 模拟界面容器 */}
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[2/1] group">
            {/* 边框流光 - 仅在 hover 时或一直微弱显示 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* 模拟 UI 内容 */}
            <div className="absolute inset-0 flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/5 bg-zinc-900/30 hidden md:flex flex-col p-4 gap-2">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-10 w-full rounded-lg flex items-center px-3 gap-3 ${
                      i === 1 ? "bg-white/5 border border-white/5" : "opacity-50"
                    }`}
                  >
                    <div className="w-4 h-4 rounded bg-white/20" />
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 md:p-10 relative overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-8 w-64 bg-gradient-to-r from-white/20 to-transparent rounded-lg mb-3" />
                    <div className="h-4 w-32 bg-white/5 rounded-lg" />
                  </div>
                  <div className="px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Processing
                  </div>
                </div>

                {/* Note Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-zinc-300">AI 摘要</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-zinc-800 rounded-full" />
                      <div className="h-2 w-[90%] bg-zinc-800 rounded-full" />
                      <div className="h-2 w-[95%] bg-zinc-800 rounded-full" />
                    </div>
                  </div>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium text-zinc-300">重点标记</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-zinc-800 rounded-full" />
                      <div className="h-2 w-[80%] bg-zinc-800 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Audio Waveform Simulation */}
                <div className="mt-8 flex items-center gap-1 h-12 opacity-50 mask-linear-gradient">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-indigo-500 rounded-full"
                      initial={{ height: 10 }}
                      animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section - Bento Grid Style */}
      <section id="features" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              不仅是录音工具，
              <br />
              更是你的<span className="text-indigo-400">私人助教</span>。
            </h2>
            <p className="text-zinc-400 text-lg">我们重新设计了课堂笔记的每一个环节，让效率提升十倍。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[800px]">
            {/* Feature 1: Main Large */}
            <BentoCard className="md:col-span-4 md:row-span-2 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 border border-indigo-500/30 text-indigo-400">
                    <Mic />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">全天候后台录音</h3>
                  <p className="text-zinc-400 max-w-md">
                    即使锁屏或切换应用，录音依然稳定运行。独特的低功耗技术，让你的电量足以支撑一整天的课程。
                  </p>
                </div>
                {/* Visualization */}
                <div className="w-full h-48 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm mt-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent" />
                  {/* Fake Dynamic Island or Phone Status Bar */}
                  <div className="absolute top-4 bg-black/50 px-4 py-1 rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-zinc-300">Recording 01:23:45</span>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Feature 2: AI */}
            <BentoCard className="md:col-span-2 md:row-span-1 bg-zinc-900">
              <div className="p-8">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30 text-purple-400">
                  <Sparkles />
                </div>
                <h3 className="text-xl font-bold mb-2">AI 智能提炼</h3>
                <p className="text-zinc-400 text-sm">自动提取课程概要、待办作业和关键知识点。</p>
              </div>
            </BentoCard>

            {/* Feature 3: Sync */}
            <BentoCard className="md:col-span-2 md:row-span-1 bg-zinc-900 group">
              <div className="p-8 relative h-full">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30 text-green-400">
                  <Cloud />
                </div>
                <h3 className="text-xl font-bold mb-2">iCloud 同步</h3>
                <p className="text-zinc-400 text-sm">
                  基于 CloudKit，数据仅在你的设备间传输，极度安全。
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight className="text-zinc-500" />
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof (Marquee) */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="text-center mb-10">
          <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">
            Trusted by students from
          </p>
        </div>
        <div className="overflow-hidden flex relative">
          <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
            {["Harvard", "Stanford", "MIT", "Berkeley", "Cambridge", "Oxford", "Tsinghua", "Peking U"].map(
              (uni, i) => (
                <span key={i} className="text-2xl font-bold text-zinc-700 select-none">
                  {uni}
                </span>
              ),
            )}
            {["Harvard", "Stanford", "MIT", "Berkeley", "Cambridge", "Oxford", "Tsinghua", "Peking U"].map(
              (uni, i) => (
                <span key={`dup-${i}`} className="text-2xl font-bold text-zinc-700 select-none">
                  {uni}
                </span>
              ),
            )}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent" />
        </div>
      </section>

      {/* Workflow Timeline - Refined */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            简单三步，
            <br />
            搞定课堂笔记
          </h2>

          <div className="relative pl-8 md:pl-0 border-l md:border-l-0 border-white/10 space-y-16">
            <WorkflowItem
              index="01"
              title="开启录音"
              desc="进入课堂，一键开启。Classby 会在后台静默运行。"
              icon={<Mic />}
            />
            <WorkflowItem
              index="02"
              title="实时转写"
              desc="录音结束，AI 引擎立即介入，将音频转化为精确的逐字稿。"
              icon={<Zap />}
            />
            <WorkflowItem
              index="03"
              title="生成笔记"
              desc="喝杯咖啡的时间，一份结构化、重点突出的智能笔记已准备就绪。"
              icon={<FileText />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/5" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden relative">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">准备好提升学习效率了吗？</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              加入成千上万的学生，使用 Classby 改变你的学习方式。现在下载，即刻体验。
            </p>

            <div className="flex justify-center gap-4 relative z-10">
              <button className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors">
                免费下载
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#050505] text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <div className="w-5 h-5 bg-zinc-800 rounded-sm" />
            © 2025 Classby
          </div>
          <div className="flex gap-8 text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              支持
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- Sub Components ---

function BentoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-zinc-900/50" />
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 40%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function WorkflowItem({ index, title, desc, icon }: { index: string; title: string; desc: string; icon: ReactNode }) {
  return (
    <div className="flex md:items-center gap-8 md:gap-16 group">
      <span className="hidden md:block text-5xl font-bold text-zinc-800 group-hover:text-indigo-500/20 transition-colors">
        {index}
      </span>

      {/* Mobile Line Dot */}
      <div className="absolute -left-[5px] md:hidden w-2.5 h-2.5 rounded-full bg-zinc-800 border border-black mt-1.5" />

      <div className="flex-1 bg-zinc-900/30 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900/50 transition-colors">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

