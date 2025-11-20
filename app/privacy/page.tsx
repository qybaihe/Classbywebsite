"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-zinc-900">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2 hover:text-zinc-300 transition-colors w-fit">
            <ArrowLeft className="w-5 h-5" />
            <span>返回首页</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-bold mb-4">Classby 隐私政策</h1>
            <p className="text-zinc-400">最近更新：2025-11-05</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 mb-8">
              <p className="text-zinc-300 leading-relaxed">
                我们重视您的隐私，仅收集实现应用功能所需的最小数据。本政策说明我们如何在 Classby 中处理数据。
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">1. 我们收集的数据</h2>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <div>
                    <strong className="text-white">用户内容</strong>：录音的转写文本、AI 生成的笔记（用于应用功能）。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <div>
                    <strong className="text-white">标识符</strong>：用于区分用户的匿名标识或账号标识（用于同步与功能）。
                  </div>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">2. 数据的用途</h2>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>实现应用核心功能（录音转写、AI 笔记、跨设备同步）。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>改进产品体验与可靠性（如必要的日志与错误排查）。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>不用于个性化广告或跨站点追踪。</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">3. 数据的处理与存储</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-xl font-semibold mb-2 text-white">本地设备</h3>
                  <p className="text-zinc-300">应用在本地保存必要数据以保证可用性。</p>
                </div>
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-xl font-semibold mb-2 text-white">iCloud（CloudKit 私有数据库）</h3>
                  <p className="text-zinc-300">用于在同一 Apple ID 的多设备间同步数据，数据仅归属于用户本人。</p>
                </div>
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-xl font-semibold mb-2 text-white">开发者后端（Supabase）</h3>
                  <p className="text-zinc-300">为完成 AI 处理，转写文本会发送至我们的云端服务进行处理，返回结构化笔记结果。</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">4. 权限说明</h2>
              <div className="space-y-3 text-zinc-300">
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-2 text-white">麦克风</h3>
                  <p>用于录制课堂音频并生成 AI 笔记。</p>
                </div>
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-2 text-white">语音识别</h3>
                  <p>将录音转写为文字以便提炼要点。</p>
                </div>
                <div className="p-5 rounded-lg bg-zinc-900/50 border border-zinc-800">
                  <h3 className="text-lg font-semibold mb-2 text-white">通知（可选）</h3>
                  <p>用于消息提醒或 Live Activities 更新。</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">5. 数据共享</h2>
              <p className="text-zinc-300 leading-relaxed">
                我们不向第三方出售您的数据。除法律要求或为提供核心功能所必需的服务商（如 Apple、Supabase）外，我们不会共享您的个人数据。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">6. 数据保留与删除</h2>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>您可随时删除应用以移除本地数据。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>iCloud 私有数据库中的数据仅属于您本人，您可通过 iCloud 设置进行管理。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-200 mt-1">•</span>
                  <span>如需删除我们后端中的处理记录，可通过下方联系方式与我们取得联系。</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">7. 未成年人保护</h2>
              <p className="text-zinc-300 leading-relaxed">
                如您未满法定年龄，请在监护人同意与指导下使用本应用。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">8. 联系我们</h2>
              <p className="text-zinc-300 leading-relaxed">
                如对本政策有任何问题或请求，请联系：
                <a href="mailto:review@classby.app" className="text-zinc-100 underline underline-offset-4 decoration-zinc-600 hover:decoration-white ml-2">
                  review@classby.app
                </a>
              </p>
            </section>

            <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-500">
              <p>
                © 2025 Classby ·
                <Link href="/support" className="text-zinc-200 hover:text-white ml-2">
                  支持页
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
