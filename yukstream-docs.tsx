"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { CheckCircle, Download, GitFork, Laptop, PlayCircle, Server, Zap } from "lucide-react"

const MotionCard = motion(Card)

export default function YukStreamDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              YukStream
            </span>
          </h1>
          <p className="text-2xl text-purple-100">Dokumentasi Penginstalan Script</p>
        </header>

        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-purple-400/20 rounded-full p-1">
            <TabsTrigger
              value="requirements"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-purple-500"
            >
              Persyaratan
            </TabsTrigger>
            <TabsTrigger
              value="installation"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-purple-500"
            >
              Tutorial Instalasi
            </TabsTrigger>
          </TabsList>
          <TabsContent value="requirements">
            <MotionCard
              className="mt-6 overflow-hidden bg-white/10 backdrop-blur-lg border-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Persyaratan Sistem
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Pastikan sistem Anda memenuhi persyaratan berikut sebelum melakukan instalasi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { icon: <Server className="w-5 h-5" />, text: "Node.js versi 14.0 atau lebih tinggi" },
                    {
                      icon: <Zap className="w-5 h-5" />,
                      text: "NPM (Node Package Manager) versi 6.0 atau lebih tinggi",
                    },
                    { icon: <Laptop className="w-5 h-5" />, text: "Minimal 2GB RAM" },
                    { icon: <GitFork className="w-5 h-5" />, text: "Git (opsional, tapi direkomendasikan)" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.icon}
                      {item.text}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </MotionCard>
          </TabsContent>
          <TabsContent value="installation">
            <MotionCard
              className="mt-6 overflow-hidden bg-white/10 backdrop-blur-lg border-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <PlayCircle className="w-6 h-6" />
                  Langkah-langkah Instalasi
                </CardTitle>
                <CardDescription className="text-purple-200">
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
                      className="bg-purple-600/20 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="mb-2 text-purple-100">{step.description}</p>
                      <pre className="bg-purple-900/50 p-2 rounded overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </MotionCard>
          </TabsContent>
        </Tabs>

        <MotionCard
          className="mt-8 overflow-hidden bg-white/10 backdrop-blur-lg border-none"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Download className="w-6 h-6" />
              Bantuan Tambahan
            </CardTitle>
            <CardDescription className="text-purple-200">
              Jika Anda mengalami masalah selama instalasi, silakan hubungi tim dukungan YukStream.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Email: support@yukstream.com</p>
            <p>Telepon: +62 123 4567 890</p>
            <p>Jam kerja: Senin - Jumat, 09.00 - 17.00 WIB</p>
          </CardContent>
        </MotionCard>
      </div>
    </div>
  )
}

