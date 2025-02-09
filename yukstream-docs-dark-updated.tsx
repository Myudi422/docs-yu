"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  CheckCircle,
  Download,
  Server,
  PlayCircle,
  Cpu,
  MemoryStickIcon as Memory,
  HardDrive,
  TrendingUp,
  FileDown,
  Link,
  FileInput,
  Key,
  Monitor,
  Play,
  Calendar,
} from "lucide-react"

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
            Dokumentasi Penginstalan dan Penggunaan
          </motion.p>
        </header>

        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 rounded-full p-1 mb-8">
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
              Pemasangan
            </TabsTrigger>
            <TabsTrigger
              value="usage"
              className="rounded-full data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              Cara Pakai
            </TabsTrigger>
          </TabsList>

{/* Persyaratan Tab Content */}
<TabsContent value="requirements">
  <MotionCard
    className="overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <CardHeader>
      <CardTitle className="text-2xl flex items-center gap-2 text-blue-400">
        <Server className="w-6 h-6" />
        Persyaratan Sistem
      </CardTitle>
      <CardDescription className="text-gray-400">
      Spesifikasi server yang direkomendasikan untuk livestreaming nonstop dengan YukStream. Script ini hanya dapat digunakan pada VPS, serta sistem operasi Ubuntu dan Debian. Sudah diuji pada Ubuntu 20.04 dan Debian 10.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {[ 
          {
            icon: <Memory className="w-5 h-5 text-blue-400" />,
            text: "RAM 2GB + 1 CPU: Optimal untuk 2 live streaming",
          },
          {
            icon: <Cpu className="w-5 h-5 text-green-400" />,
            text: "RAM 4GB + 2 CPU: Optimal untuk 4 live streaming",
          },
          {
            icon: <HardDrive className="w-5 h-5 text-yellow-400" />,
            text: "RAM 8GB + 4 CPU: Optimal untuk 8 live streaming",
          },
          {
            icon: <Calendar className="w-5 h-5 text-pink-400" />,
            text: "Wajib berlangganan minimal 1 bulan untuk menggunakan script ini",
            isQuote: true,
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.icon && item.icon}
            <span className={item.isQuote ? "text-gray-300 italic" : "text-gray-300"}>
              {item.isQuote ? `"${item.text}"` : item.text}
            </span>
          </motion.li>
        ))}
        <motion.li
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <blockquote className="text-gray-300 italic">
            "Jika Anda tidak memiliki server, kami dapat menyediakan server gratis (Syarat: memiliki akun GitHub dan wajib standby di browser)"
          </blockquote>
        </motion.li>
      </ul>
      <div className="mt-6">
        <a
          href="https://wa.me/+6282125182347?text=Saya%20tertarik%20untuk%20memesan%20YukStream"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Pesan Sekarang
        </a>
      </div>
    </CardContent>
  </MotionCard>
</TabsContent>


          {/* Pemasangan Tab Content */}
          <TabsContent value="installation">
            <MotionCard
              className="overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-green-400">
                  <PlayCircle className="w-6 h-6" />
                  Langkah-langkah Pemasangan
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Ikuti langkah-langkah berikut untuk memasang dan menjalankan script YukStream.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Clone Repository",
                      description: "Unduh script dari repositori resmi YukStream ke folder yukstream.",
                      code: "git clone https://github.com/yukstream/yukstream.git yukstream",
                    },
                    {
                      title: "Masuk ke Direktori",
                      description: "Masuk ke direktori yukstream yang baru dibuat.",
                      code: "cd yukstream",
                    },
                    {
                      title: "Update Server",
                      description: "Pastikan server Anda ter-update.",
                      code: "sudo apt update && sudo apt upgrade -y",
                    },
                    {
                      title: "Install Tmux",
                      description: "Install Tmux untuk menjalankan script di background.",
                      code: "sudo apt install tmux -y",
                    },
                    {
                      title: "Buka Sesi Tmux",
                      description: "Buka sesi Tmux baru.",
                      code: "tmux new -s yukstream",
                    },
                    {
                      title: "Berikan Izin Eksekusi & Jalankan Installer",
                      description: "Berikan izin eksekusi pada script installer.",
                      code: "sudo chmod +x install && ./install",
                    },
                    {
                      title: "Code berhasil terinstall & sudah siap dipakai!",
                      description: "DONE!",
                      code: "Silahkan kunjungi URL IP kalian menggunakan port 3000",
                    },
                    {
                      title: "Keluar dari Sesi",
                      description: "Setelah selesai, keluar dari sesi Tmux dengan menekan Ctrl + B, lalu D.",
                      code: "Ctrl + B, lalu D",
                    },
                    {
                      title: "Masuk Kembali ke Sesi",
                      description: "Untuk masuk kembali ke sesi Tmux, gunakan perintah berikut:",
                      code: "tmux attach -t yukstream",
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

          {/* Cara Pakai Tab Content */}
          <TabsContent value="usage">
            <MotionCard
              className="overflow-hidden bg-gray-800/30 backdrop-blur-md border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-purple-400">
                  <PlayCircle className="w-6 h-6" />
                  Cara Pakai YukStream
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Ikuti langkah-langkah berikut untuk menggunakan YukStream untuk livestreaming.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-6">
                  {[
                    {
                      title: "Download File dari Google Drive",
                      description: "Salin link file dari Google Drive yang ingin Anda stream.",
                      icon: <FileDown className="w-5 h-5 text-blue-400" />,
                    },
                    {
                      title: "Masukkan Link ke YukStream",
                      description: "Paste link Google Drive ke input download di YukStream.",
                      icon: <Link className="w-5 h-5 text-green-400" />,
                    },
                    {
                      title: "Isi Nama File (Opsional)",
                      description: "Anda dapat memberikan nama custom untuk file yang didownload.",
                      icon: <FileInput className="w-5 h-5 text-yellow-400" />,
                    },
                    {
                      title: "Mulai Download",
                      description: "Klik tombol download dan tunggu hingga proses selesai.",
                      icon: <Download className="w-5 h-5 text-red-400" />,
                    },
                    {
                      title: "Pilih File",
                      description: "Setelah download selesai, pilih file dari dropdown yang tersedia.",
                      icon: <CheckCircle className="w-5 h-5 text-purple-400" />,
                    },
                    {
                      title: "Masukkan Stream Key",
                      description: "Input stream key dari platform streaming yang Anda gunakan.",
                      icon: <Key className="w-5 h-5 text-indigo-400" />,
                    },
                    {
                      title: "Pilih Platform",
                      description: "Pilih platform streaming yang Anda inginkan dari opsi yang tersedia.",
                      icon: <Monitor className="w-5 h-5 text-pink-400" />,
                    },
                    {
                      title: "Mulai Streaming",
                      description: "Klik tombol 'Stream' untuk memulai livestream langsung.",
                      icon: <Play className="w-5 h-5 text-green-400" />,
                    },
                    {
                      title: "Atau Jadwalkan Stream",
                      description: "Alternatifnya, Anda bisa memilih untuk menjadwalkan stream di waktu tertentu.",
                      icon: <Calendar className="w-5 h-5 text-orange-400" />,
                    },
                  ].map((step, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 bg-gray-700/20 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mt-1">{step.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-purple-400">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </MotionCard>
          </TabsContent>
        </Tabs>

        <MotionCard
  className="mt-8 overflow-hidden bg-gray-800/50 backdrop-blur-md border-gray-700"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <CardHeader>
    <CardTitle className="text-2xl flex items-center gap-2 text-blue-400">
      <Server className="w-6 h-6" />
      Platform yang Mendukung
    </CardTitle>
    <CardDescription className="text-gray-400">
      YukStream dapat dijalankan di platform-platform ini.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Facebook */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
          alt="Facebook"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">Facebook</p>
      </div>

      {/* YouTube */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
          alt="YouTube"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">YouTube</p>
      </div>

      {/* Instagram */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
          alt="Instagram"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">Instagram</p>
      </div>

      {/* TikTok */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=lTkH3THtr7SL&format=png&color=000000"
          alt="TikTok"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">TikTok</p>
      </div>

      {/* X (Twitter) */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
          alt="X (Twitter)"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">X (Twitter)</p>
      </div>

      {/* Telegram */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000"
          alt="Telegram"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">Telegram</p>
      </div>

      {/* Steam */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=zNqjI8XKkCv0&format=png&color=000000"
          alt="Steam"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">Steam</p>
      </div>

      {/* Custom RTMP */}
      <div className="flex justify-center items-center bg-white p-4 rounded-md">
        <img
          src="https://img.icons8.com/?size=100&id=D7Gn6j68THEA&format=png&color=000000"
          alt="Custom RTMP"
          className="w-16 h-16"
        />
        <p className="text-center mt-2 text-sm text-gray-600">Custom RTMP</p>
      </div>
    </div>
  </CardContent>
</MotionCard>

        <MotionCard
  className="mt-8 overflow-hidden bg-gray-800/50 backdrop-blur-md border-gray-700"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <CardHeader>
    <CardTitle className="text-2xl flex items-center gap-2 text-blue-400">
      <Download className="w-6 h-6" />
      Change Log YukStream
    </CardTitle>
    <CardDescription className="text-gray-400">
      Pembaruan terbaru untuk YukStream.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="text-gray-300">
      <p className="font-semibold text-lg text-cyan-400">Version 1.2.0 - 9 Februari 2025</p>
      <ul className="space-y-2 pl-4">
        <li className="flex items-center gap-2">
          <span className="text-cyan-400">•</span>
          Multi-bitrate video streaming (semua video looping)
        </li>
      </ul>
    </div>
  </CardContent>
</MotionCard>



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
              Jika Anda mengalami masalah selama pemasangan, silakan hubungi tim dukungan YukStream.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">Email:</span>
              <span className="text-gray-300">yukstream3@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 mt-4">
              <span className="text-blue-400">Harga Script:</span>
              <span className="text-gray-300">Rp 50.000 / bulan</span>
            </p>
            <p className="text-gray-300">
              Anda juga dapat memesan script beserta server. Untuk informasi lebih lanjut dan pemesanan, silakan hubungi
              kami melalui WhatsApp.
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
          <p className="text-gray-400">YukStream - Streaming Nonstop, Tanpa Batas</p>
        </motion.div>
      </div>
    </div>
  )
}

