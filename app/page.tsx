"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
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
  Layers,
  Search,
  MoreHorizontal,
  Calendar,
  AlignLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

// --- 1. 升级版手机壳组件 ---
// 支持传入 children (代码 UI) 而不仅仅是图片
const IPhoneMockup = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`iphone-bezel aspect-[400/850] w-full overflow-hidden bg-black ${className}`}>
    <div className="dynamic-island" />
    {/* 屏幕容器 */}
    <div className="relative h-full w-full bg-[#050505] rounded-[48px] overflow-hidden flex flex-col">
      {/* 顶部状态栏占位 */}
      <div className="h-14 w-full z-20 flex justify-between items-center px-6 pt-2">
        <span className="text-[10px] font-medium text-zinc-500">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-2.5 border border-zinc-600 rounded-[2px]" />
        </div>
      </div>

      {/* 实际内容区域 */}
      <div className="flex-1 relative z-10">{children}</div>

      {/* 屏幕反光 (Gloss) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-50 rounded-[48px]" />
    </div>
  </div>
);

// --- 2. 抽象 UI：呼吸的录音球 (The Breathing Orb) ---
const AbstractRecordingScreen = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 背景氛围光 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />

      {/* 核心呼吸球 */}
      <div className="relative z-10 mb-20">
        {/* 外圈涟漪 1 */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
        />
        {/* 外圈涟漪 2 (延迟) */}
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-indigo-500/20 rounded-full blur-2xl"
        />

        {/* 主体球 */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 shadow-[0_0_60px_rgba(37,99,235,0.5)] flex items-center justify-center relative"
        >
          <Mic className="w-12 h-12 text-white fill-white/20" />

          {/* 表面光泽 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
        </motion.div>
      </div>

      {/* 底部动态波形 */}
      <div className="absolute bottom-12 w-full px-8 flex justify-center items-end gap-1 h-16">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 bg-blue-500/50 rounded-full"
            animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* 状态文字 */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-32 text-blue-200/80 text-sm font-medium tracking-widest uppercase"
      >
        Recording • 00:12:43
      </motion.div>
    </div>
  );
};

// --- 3. 抽象 UI：详情总结页 (The Magic Detail) ---
const AbstractDetailScreen = () => {
  return (
    <div className="h-full p-6 flex flex-col gap-6 bg-[#050505]">
      {/* 顶部导航模拟 */}
      <div className="flex justify-between items-center text-zinc-600 mb-2">
        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </div>
        <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
          <MoreHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* 标题区 */}
      <div>
        <div className="h-8 w-3/4 bg-zinc-800/50 rounded-lg mb-3 animate-pulse" />
        <div className="flex gap-2 items-center">
          <Calendar className="w-3 h-3 text-zinc-600" />
          <div className="h-3 w-24 bg-zinc-900 rounded-full" />
        </div>
      </div>

      {/* 核心功能卡片：彩虹边框总结 */}
      <div className="relative group">
        {/* 动态彩虹边框 */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-xy" />

        <div className="relative bg-[#0A0A0A] rounded-xl p-5 border border-white/10">
          <div className="flex items-center gap-2 mb-4 text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">AI Summary</span>
          </div>

          {/* 骨架屏文字 - 流光效果 */}
          <div className="space-y-3">
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
            </div>
            <div className="h-2 w-[90%] bg-zinc-800 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
            </div>
            <div className="h-2 w-[95%] bg-zinc-800 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* 待办事项模拟 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-1">
          <AlignLeft className="w-4 h-4" />
          <span>Tasks</span>
        </div>
        {[1, 2].map((i) => (
          <div key={i} className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex gap-3 items-center">
            <div className="w-5 h-5 rounded-full border-2 border-zinc-700" />
            <div className="h-2 w-32 bg-zinc-800 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 升级版：史诗级录音球 (Immersive Orb) ---
const EpicRecordingVisual = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* 1. 巨大的环境光晕 (Epic Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-900/20 blur-[100px] rounded-full" />

      {/* 2. 核心呼吸球体 */}
      <div className="relative z-10">
        {/* 外层能量场 (Ripples) */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-blue-500/30"
            initial={{ width: "100%", height: "100%", opacity: 0.5 }}
            animate={{
              width: ["100%", "300%"],
              height: ["100%", "300%"],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut",
            }}
            style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          />
        ))}

        {/* 实体球：去掉图标，纯色渐变圆球 */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 rounded-full bg-gradient-to-b from-[#1E4ED8] to-[#0B357F] shadow-[0_0_60px_rgba(37,99,235,0.7)]"
        >
          {/* 表面高光，模拟参考图的光泽 */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)] opacity-90" />

          {/* 内部核心光晕 */}
          <div className="absolute w-24 h-24 bg-blue-500/60 blur-xl rounded-full opacity-70" />
        </motion.div>
      </div>

      {/* 3. 底部声波 (Sound Wave) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1.5 px-12 pb-8 opacity-80 mask-linear-fade">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-blue-500/80 to-indigo-400/20"
            animate={{ height: ["20%", `${Math.random() * 60 + 30}%`, "20%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// --- 升级版：悬浮玻璃列表 (Floating Glass List) ---
const EpicListVisual = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* 遮罩：让列表看起来是从虚空中浮现的 */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-zinc-900/0 via-zinc-900/0 to-zinc-900 pointer-events-none" />

      <div className="space-y-3 p-6 pt-12">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:border-white/20 transition-colors">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 
                ${i === 1 ? "bg-purple-500/20 text-purple-400" : i === 2 ? "bg-blue-500/20 text-blue-400" : "bg-orange-500/20 text-orange-400"}`}
              >
                {i === 1 ? <Sparkles className="w-5 h-5" /> : i === 2 ? <Mic className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 w-24 bg-white/20 rounded-full" />
                <div className="h-2 w-full bg-white/10 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- 4. 抽象 UI：列表页 (The List) ---
const AbstractListScreen = () => {
  return (
    <div className="h-full p-5 bg-[#050505]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4 mt-2">笔记</h1>
        <div className="h-10 bg-zinc-900 rounded-xl border border-white/5 flex items-center px-3 gap-2">
          <Search className="w-4 h-4 text-zinc-600" />
          <div className="h-2 w-20 bg-zinc-800/50 rounded-full" />
        </div>
      </div>

      {/* 列表项动画 */}
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex gap-4 hover:bg-zinc-900/60 transition-colors group"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center 
                ${i === 1 ? "bg-indigo-500/20 text-indigo-400" : i === 2 ? "bg-purple-500/20 text-purple-400" : "bg-zinc-800/50 text-zinc-500"}`}
            >
              {i === 1 ? <Mic className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
            </div>
            <div className="flex-1 py-1">
              <div className="h-3 w-32 bg-zinc-800 rounded-full mb-2 group-hover:bg-zinc-700 transition-colors" />
              <div className="h-2 w-20 bg-zinc-800/50 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  // 视差效果：Hero 区域随着滚动稍微向下移动并变淡
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });

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
              href="https://apps.apple.com/cn/app/classby/id6754916620"
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
        className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                2.0 版本现已发布
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
                听见，
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-shimmer bg-[length:200%_auto]">
                  即是永恒。
                </span>
              </h1>

              <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                不只是录音。Classby 将稍纵即逝的课堂语音，实时转化为结构清晰的第二大脑。
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/cn/app/classby/id6754916620"
                  target="_blank"
                  rel="noreferrer"
                  className="h-12 px-8 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform inline-flex items-center justify-center"
                >
                  免费下载
                </a>
              </div>
            </div>

            {/* 右侧：3D 悬浮手机 (展示详情页组件) */}
            <motion.div
              style={{ y: smoothY, rotateY: smoothRotate, rotateZ: -5 }}
              className="flex-1 relative w-full max-w-[360px] lg:max-w-[380px] perspective-1000"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[100%] bg-indigo-500/10 blur-[80px] rounded-full -z-10" />

              {/* 使用 AbstractDetailScreen */}
              <motion.div
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1 }}
              >
                <IPhoneMockup>
                  <AbstractDetailScreen />
                </IPhoneMockup>
              </motion.div>

              {/* 悬浮卡片装饰 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 bottom-32 bg-zinc-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl z-20 hidden md:block w-48"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs font-bold text-zinc-300">AI Processing</div>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Features Bento Grid (Epic Version) --- */}
      <section id="features" className="py-32 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* 标题区 */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              不仅仅是记录，
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                更是思想的升华。
              </span>
            </motion.h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Classby 用最前沿的技术，让你的学习流心无旁骛。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            {/* 卡片 1: 全天候录音 (占据 2/3 宽度) */}
            <BentoCard className="md:col-span-7 relative overflow-hidden group">
              {/* 背景噪点纹理，增加质感 */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-0" />

              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-zinc-900/0 to-zinc-950 z-0" />

              <div className="relative z-10 h-full flex flex-col md:flex-row">
                {/* 左侧文字：垂直居中 */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center z-20">
                  {/* 纯色圆球标识，呼应右侧大球 */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1E4ED8] to-[#0B357F] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                    <div className="w-9 h-9 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    全天候
                    <br />
                    后台录音
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    无论锁屏还是切换应用，录音永不中断。低功耗引擎让你无需担心电量，专注于课堂本身。
                  </p>
                </div>

                {/* 右侧视觉：打破边界，占据半壁江山 */}
                <div className="md:w-1/2 h-64 md:h-full relative">
                  {/* 一个径向渐变遮罩，让球体看起来融入黑色背景 */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-zinc-900/80 z-10 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 md:hidden" />

                  <EpicRecordingVisual />
                </div>
              </div>
            </BentoCard>

            {/* 卡片 2: 自动整理 (占据 1/3 宽度) */}
            <BentoCard className="md:col-span-5 relative overflow-hidden bg-zinc-900 flex flex-col">
              {/* 顶部文字 */}
              <div className="p-8 md:p-10 relative z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold">自动整理</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  录完即走。所有内容自动分类、打标签，并按重要性分级排列。
                </p>
              </div>

              {/* 底部视觉：列表向上浮动 */}
              <div className="flex-1 relative w-full mt-[-20px]">
                <EpicListVisual />
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
        <div className="overflow-hidden relative">
          <div className="flex gap-16 px-8">
            {/* Track A: 从左往左滚动 0% -> -100% */}
            <motion.div
              className="flex gap-16 whitespace-nowrap shrink-0"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {["Harvard", "Stanford", "MIT", "Berkeley", "Cambridge", "Oxford", "Tsinghua", "Peking U"].map(
                (uni, i) => (
                  <span key={i} className="text-2xl font-bold text-zinc-700 select-none">
                    {uni}
                  </span>
                ),
              )}
            </motion.div>

            {/* Track B: 从右往左滚动 100% -> 0%，与 A 锁步 */}
            <motion.div
              className="flex gap-16 whitespace-nowrap shrink-0"
              animate={{ x: ["100%", "0%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {["Harvard", "Stanford", "MIT", "Berkeley", "Cambridge", "Oxford", "Tsinghua", "Peking U"].map(
                (uni, i) => (
                  <span key={`dup-${i}`} className="text-2xl font-bold text-zinc-700 select-none">
                    {uni}
                  </span>
                ),
              )}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent" />
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
              <a
                href="https://apps.apple.com/cn/app/classby/id6754916620"
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors inline-flex items-center justify-center"
              >
                免费下载
              </a>
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

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-[32px] border border-white/5 bg-[#0A0A0A] overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 40%
            )
          `,
        }}
      />
      {children}
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

