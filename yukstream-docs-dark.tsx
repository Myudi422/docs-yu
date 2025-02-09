"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { CheckCircle, Download, GitFork, Laptop, PlayCircle, Server, Zap, TrendingUp } from "lucide-react"

const MotionCard = motion(Card)

export default function YukStreamDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">YukStream</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dokumentasi Penginstalan Script
          </motion.p>
        </header>

        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-full p-1 mb-8">
            <TabsTrigger
              value="requirements"
              className="rounded-full data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
            >
              Persyaratan
            </TabsTrigger>
            <TabsTrigger
              value="installation"
              className="rounded-full data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400"
            >
              Tutorial Instalasi
            </TabsTrigger>
          </TabsList>
          <TabsContent value="requirements">
            <MotionCard
              className="overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-blue-400">
                  <CheckCircle className="w-6 h-6" />
                  Persyaratan Sistem
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Pastikan sistem Anda memenuhi persyaratan berikut sebelum melakukan instalasi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <Server className="w-5 h-5 text-blue-400" />,
                      text: "Node.js versi 14.0 atau lebih tinggi",
                    },
                    {
                      icon: <Zap className="w-5 h-5 text-yellow-400" />,
                      text: "NPM (Node Package Manager) versi 6.0 atau lebih tinggi",
                    },
                    { icon: <Laptop className="w-5 h-5 text-green-400" />, text: "Minimal 2GB RAM" },
                    {
                      icon: <GitFork className="w-5 h-5 text-purple-400" />,
                      text: "Git (opsional, tapi direkomendasikan)",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.icon}
                      <span className="text-gray-300">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          </TabsContent>
          <TabsContent value="installation">
            <MotionCard
              className="overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-400">
                  <PlayCircle className="w-6 h-6" />
                  Langkah-langkah Instalasi
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Ikuti langkah-langkah berikut untuk menginstal script YukStream.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Unduh Script",
                      description: "Unduh script dari repositori resmi atau gunakan perintah git clone.",
                      code: "git clone https://github.com/yukstream/script.git",
                    },
                    {
                      title: "Masuk ke Direktori",
                      description: "Buka terminal dan navigasikan ke direktori script yang baru diunduh.",
                      code: "cd yukstream-script",
                    },
                    {
                      title: "Instal Dependensi",
                      description: "Jalankan perintah npm untuk menginstal semua dependensi yang diperlukan.",
                      code: "npm install",
                    },
                    {
                      title: "Konfigurasi",
                      description: "Salin file .env.example menjadi .env dan sesuaikan pengaturan jika diperlukan.",
                      code: "cp .env.example .env",
                    },
                    {
                      title: "Jalankan Script",
                      description: "Gunakan perintah npm untuk menjalankan script YukStream.",
                      code: "npm start",
                    },
                  ].map((step, index) => (
                    <motion.li
                      key={index}
                      className="bg-gray-700/20 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-green-400">
                        <span className="bg-green-500/20 text-green-400 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mb-2 text-gray-400">{step.description}</p>
                      <pre className="bg-gray-900/50 p-2 rounded overflow-x-auto">
                        <code className="text-green-300">{step.code}</code>
                      </pre>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </MotionCard>
          </TabsContent>
        </Tabs>

        <MotionCard
          className="mt-8 overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-400">
              <Download className="w-6 h-6" />
              Bantuan Tambahan
            </CardTitle>
            <CardDescription className="text-gray-400">
              Jika Anda mengalami masalah selama instalasi, silakan hubungi tim dukungan YukStream.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">Email:</span>
              <span className="text-gray-300">support@yukstream.com</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-400">Telepon:</span>
              <span className="text-gray-300">+62 123 4567 890</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-400">Jam kerja:</span>
              <span className="text-gray-300">Senin - Jumat, 09.00 - 17.00 WIB</span>
            </p>
          </CardContent>
        </MotionCard>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TrendingUp className="w-12 h-12 mx-auto text-blue-400 mb-4" />
          <p className="text-gray-400">YukStream - Streaming the Future</p>
        </motion.div>
      </div>
    </div>
  )
}

