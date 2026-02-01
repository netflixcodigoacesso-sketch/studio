'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function AgeGatePage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (localStorage.getItem('age_confirmed') === 'true') {
      router.replace('/links');
    }
  }, [router]);

  const handleConfirm = () => {
    localStorage.setItem('age_confirmed', 'true');
    router.push('/links');
  };

  if (!isClient) {
    return <div className="min-h-screen w-full bg-[#0d1017]" />;
  }

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-8 text-white"
      style={{
        background: "url('https://www.transparenttextures.com/patterns/dark-denim-3.png'), radial-gradient(ellipse at center, #1f2937, #0d1017)",
      }}
    >
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative mb-8">
          <svg
            className="h-32 w-auto"
            viewBox="0 0 100 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L95 20V60C95 95 65 110 50 110C35 110 5 95 5 60V20L50 0Z"
              className="fill-current text-amber-500"
            />
            <path
              d="M50 5L90 23V60C90 92 63 105 50 105C37 105 10 92 10 60V23L50 5Z"
              className="fill-current text-black"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              className="fill-current text-amber-500 text-[24px] font-bold"
            >
              18+
            </text>
          </svg>
          <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 border-2 border-white">
            <span className="text-xl font-bold text-white">!</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold">Área Restrita</h1>
        <p className="mt-2 text-lg text-gray-300">
          Acesso apenas para maiores de 18 anos.
        </p>
        <p className="mt-6 max-w-xs text-sm text-gray-400">
          Esta área é destinada exclusivamente para adultos. Ao clicar em "Confirmar Idade", você declara ser maior de 18 anos.
        </p>

        <Button
          onClick={handleConfirm}
          className="mt-8 h-14 w-full max-w-xs rounded-full bg-gradient-to-b from-amber-400 to-amber-600 text-lg font-bold text-white shadow-lg"
        >
          Confirmar Idade
        </Button>
      </div>
    </main>
  );
}
