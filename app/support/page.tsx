"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, HelpCircle } from "lucide-react";

export default function SupportPage() {
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
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-5xl font-bold mb-4">Classby 支持</h1>
            <p className="text-zinc-400 text-lg">遇到问题？我们很乐意提供帮助。</p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-7 h-7 text-white" />
                联系渠道
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-300 mb-3">邮箱：</p>
                  <a
                    href="mailto:review@classby.app"
                    className="btn-brand px-6 py-3"
                  >
                    <Mail className="w-5 h-5" />
                    review@classby.app
                  </a>
                </div>
                <p className="text-zinc-500 text-sm mt-4">
                  联系时请附：设备型号、iOS 版本、问题发生步骤与时间，便于我们快速定位。
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-white" />
              常见问题
            </h2>
            <div className="space-y-6">
              <FAQItem
                question="无法登录？"
                answer="应用支持匿名登录，可直接体验核心功能。"
              />
              <FAQItem
                question="AI 处理失败/报错？"
                answer="稍后重试，或联系支持邮箱；我们会检查云端服务状态。"
              />
              <FAQItem
                question="后台录音中断？"
                answer="请确认已授予麦克风权限，并保持系统低电量/省电模式关闭。"
              />
              <FAQItem
                question="云同步未生效？"
                answer="请确认两台设备使用同一 Apple ID，且 iCloud 同步已开启。"
              />
            </div>
          </motion.div>

          {/* Privacy Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-6 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
          >
            <h3 className="text-xl font-semibold mb-3">隐私政策</h3>
            <p className="text-zinc-400 mb-4">
              请阅读我们的隐私政策了解数据处理方式与您的权利。
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors font-semibold"
            >
              查看隐私政策
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-500">
            <p>
              © 2025 Classby ·
              <Link href="/privacy" className="text-zinc-200 hover:text-white ml-2">
                隐私政策
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors">
      <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
      <p className="text-zinc-300 leading-relaxed">{answer}</p>
    </div>
  );
}
