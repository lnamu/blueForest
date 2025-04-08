'use client'

import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement

    const enableAudio = () => {
      if (audio) {
        audio.muted = false
        audio.play().catch((e) => console.error('재생 오류:', e))
        document.removeEventListener('click', enableAudio)
      }
    }

    document.addEventListener('click', enableAudio)

    return () => {
      document.removeEventListener('click', enableAudio)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-10 bg-[url('/images/forest.jpg')] bg-cover bg-fixed bg-center text-center">
      <div className="bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-xl">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          나무 아래, 바다 너머
        </h1>
        <p className="text-lg text-gray-700">
          글을 쓰는 사람의 감성과 기록
        </p>
        <audio id="bg-audio" autoPlay loop muted>
          <source src="/audio/guitar.mp3" type="audio/mpeg" />
          브라우저가 오디오를 지원하지 않습니다.
        </audio>
        <p className="text-xs text-gray-500 mt-2">(페이지를 클릭하면 음악이 켜져요 🎵)</p>
      </div>
    </div>
  )
  

