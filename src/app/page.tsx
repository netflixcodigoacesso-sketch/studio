'use client';

import { useEffect } from 'react';
import { Icon18Plus } from '@/components/icons/icon-18-plus';

export default function AgeGatePage() {
  useEffect(() => {
    try {
      const isVerified = localStorage.getItem('ageVerified');
      if (isVerified === 'true') {
        window.location.href = 'https://t.me/+3LHhKHUrPJRiYzA5';
      }
    } catch (error) {
      console.log('localStorage not available');
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem('ageVerified', 'true');
    } catch (error) {
      console.log('localStorage not available');
    }
    window.location.href = 'https://t.me/+3LHhKHUrPJRiYzA5';
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900 p-4 text-center">
      <div className="mb-6">
        <Icon18Plus />
      </div>

      <h1 className="text-5xl font-bold text-white mb-2 font-headline">
        Área Restrita
      </h1>

      <div className="w-56 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent my-4"></div>

      <p className="text-lg text-white/90 mb-2">
        Acesso apenas para maiores de 18 anos.
      </p>
      <p className="max-w-xs text-sm text-white/60 mb-8">
        Esta área é destinada exclusivamente para adultos. Ao clicar em "Confirmar Idade", você declara ser maior de 18 anos.
      </p>

      <button
        onClick={handleConfirm}
        className="rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-20 py-4 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
      >
        Confirmar Idade
      </button>
    </main>
  );
}
