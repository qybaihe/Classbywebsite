"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import {
  Mic,
  Sparkles,
  FileText,
  Cloud,
  Shield,
  Zap,
  ChevronRight,
  Mail,
  Github,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* 背景噪点与光斑 */}
      <div className="bg-noise" />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-800/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-800/10 rounded-full blur-[120px] animate-blob" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40" />
                <Image
                  src="/logo.png"
                  alt="Classby logo"
                  width={36}
                  height={36}
                  className="relative rounded-lg"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                CLASSBY
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-1"
            >
              <NavLink href="#features">功能</NavLink>
              <NavLink href="#privacy">隐私</NavLink>
              <NavLink href="#support">支持</NavLink>
              <div className="ml-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:w-32"
                >
                  <span className="mr-2">下载 App</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center gap-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Next-Gen Note Taking
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white relative z-10">
              让课堂记忆
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 pb-2">
                永久保鲜
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Classby 利用先进的 AI 技术，将稍纵即逝的课堂语音转化为结构清晰的智能笔记。
              <br className="hidden md:block" />
              专注聆听，剩下的交给我们。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-950/80">
                  App Store 下载
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </span>
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-zinc-300 hover:text-white transition-colors px-6 py-3"
              >
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          {/* 3D/Glass Mockup */}
          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="mt-24 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="relative rounded-[2rem] bg-zinc-900/30 border border-white/10 p-2 backdrop-blur-xl shadow-2xl shadow-indigo-500/20">
                <div className="rounded-[1.5rem] overflow-hidden bg-black border border-zinc-800 relative aspect-[16/9] md:aspect-[21/9]">
                  {/* Abstract UI Representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black p-8 flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col gap-4 w-1/4 border-r border-zinc-800 pr-6">
                      <div className="h-8 w-8 rounded-full bg-zinc-800 mb-4" />
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-10 w-full rounded-lg bg-zinc-800/50 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col gap-6">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                        <div>
                          <div className="h-8 w-64 bg-zinc-800 rounded-lg mb-2" />
                          <div className="h-4 w-32 bg-zinc-900 rounded-lg" />
                        </div>
                        <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm border border-green-500/20 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          AI Processing
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 w-full bg-zinc-800/30 rounded" />
                        <div className="h-4 w-[90%] bg-zinc-800/30 rounded" />
                        <div className="h-4 w-[95%] bg-zinc-800/30 rounded" />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="h-32 rounded-xl bg-zinc-800/20 border border-zinc-800/50 p-4">
                            <Sparkles className="w-6 h-6 text-purple-500 mb-2" />
                            <div className="h-3 w-20 bg-zinc-700/50 rounded mb-2" />
                            <div className="h-2 w-full bg-zinc-800 rounded" />
                          </div>
                          <div className="h-32 rounded-xl bg-zinc-800/20 border border-zinc-800/50 p-4">
                            <FileText className="w-6 h-6 text-blue-500 mb-2" />
                            <div className="h-3 w-20 bg-zinc-700/50 rounded mb-2" />
                            <div className="h-2 w-full bg-zinc-800 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow effects over UI */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[80px] pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section id="features" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              不仅仅是录音，
              <br />
              是您的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                第二大脑
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: Large */}
            <SpotlightCard
              className="md:col-span-2 row-span-2"
              from="from-blue-500/20"
              to="to-purple-500/20"
            >
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
                  <Mic className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">全天候后台录音</h3>
                  <p className="text-zinc-400">
                    即使锁屏或切换应用，录音依然稳定运行。不错过老师讲的任何重点，安心做笔记。
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl -z-10" />
              </div>
            </SpotlightCard>

            {/* Feature 2 */}
            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">AI 智能提炼</h3>
              <p className="text-zinc-400 text-sm">自动提取课程概要、待办作业和关键知识点。</p>
            </SpotlightCard>

            {/* Feature 3 */}
            <SpotlightCard>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 border border-pink-500/20">
                <FileText className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">全文转写</h3>
              <p className="text-zinc-400 text-sm">高精度语音转文字，支持全文搜索回溯。</p>
            </SpotlightCard>

            {/* Feature 4: Wide */}
            <SpotlightCard className="md:col-span-3 flex items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20">
                  <Cloud className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">iCloud 私有同步</h3>
                <p className="text-zinc-400">
                  基于 CloudKit 构建，您的数据仅在您的设备间传输，绝不存储于第三方服务器。
                </p>
              </div>
              <div className="hidden md:block w-1/3 h-24 bg-gradient-to-l from-green-500/10 to-transparent rounded-r-2xl border-y border-r border-green-500/10" />
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Workflow Section (Timeline) */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-4">三步，搞定课堂笔记</h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden md:block" />

            <div className="space-y-24">
              <TimelineItem
                step="01"
                title="开启录音"
                desc="进入课堂，一键开启。Classby 会在后台静默运行，耗电极低。"
                icon={<Mic />}
                align="left"
              />
              <TimelineItem
                step="02"
                title="实时转写"
                desc="录音结束，AI 引擎立即介入，将音频转化为精确的逐字稿。"
                icon={<Zap />}
                align="right"
              />
              <TimelineItem
                step="03"
                title="生成笔记"
                desc="喝杯咖啡的时间，一份结构化、重点突出的智能笔记已准备就绪。"
                icon={<Sparkles />}
                align="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Support Grid */}
      <section className="py-32 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Privacy */}
            <div id="privacy">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-10 h-10 text-green-400" />
                <h2 className="text-3xl font-bold">隐私至上</h2>
              </div>
              <div className="space-y-6 border-l border-zinc-800 pl-6">
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-2">不做任何追踪</h3>
                  <p className="text-zinc-400">我们不含广告 SDK，不收集用户画像。</p>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-2">数据归您所有</h3>
                  <p className="text-zinc-400">录音文件与笔记仅保存在您的本地设备和个人 iCloud 中。</p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/privacy"
                    className="text-green-400 hover:text-green-300 font-medium inline-flex items-center"
                  >
                    阅读完整隐私政策 <ArrowUpRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Support */}
            <div id="support">
              <div className="flex items-center gap-4 mb-8">
                <Mail className="w-10 h-10 text-blue-400" />
                <h2 className="text-3xl font-bold">获取支持</h2>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-zinc-300 mb-6">
                  遇到问题或有功能建议？我们的开发团队（其实就我一个）很乐意听到您的声音。
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:review@classby.app"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-zinc-400" />
                      review@classby.app
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </a>
                  <Link
                    href="/support"
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                  >
                    <span className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-zinc-400" />
                      查看常见问题 (FAQ)
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/5 bg-black">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Classby logo" width={24} height={24} className="rounded" />
            <span>© 2025 Classby. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* --- COMPONENTS --- */

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
    >
      {children}
    </a>
  );
}

// 高级 Spotlight 卡片组件
function SpotlightCard({
  children,
  className = "",
  from = "from-white/20",
  to = "to-white/0",
}: {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-zinc-800 bg-zinc-900/50 overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={`pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br ${from} ${to}`}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8">{children}</div>
    </div>
  );
}

// Timeline Item 组件
function TimelineItem({
  step,
  title,
  desc,
  icon,
  align,
}: {
  step: string;
  title: string;
  desc: string;
  icon: ReactNode;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        align === "right" ? "md:flex-row-reverse" : ""
      } gap-8 relative`}
    >
      <div className="hidden md:block absolute left-[50%] top-0 w-4 h-4 rounded-full bg-black border-4 border-zinc-700 -translate-x-1/2 z-10" />

      <div className={`flex-1 text-center ${align === "left" ? "md:text-right" : "md:text-left"}`}>
        <h3 className="text-6xl font-bold text-zinc-800 mb-4 select-none">{step}</h3>
      </div>

      <div className="flex-1">
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-zinc-500/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity scale-150">
            {icon}
          </div>
          <h4 className="text-2xl font-bold mb-3 text-white flex items-center gap-3">
            {icon}
            {title}
          </h4>
          <p className="text-zinc-400 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

