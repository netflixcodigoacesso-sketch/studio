import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/tiktok-icon';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-8">
      <div className="flex w-full max-w-sm flex-col items-center space-y-6">
        <div className="relative h-36 w-36">
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-primary to-secondary" />
          <div className="absolute inset-1 flex items-center justify-center rounded-full bg-background">
            <Avatar className="h-32 w-32">
              <AvatarImage src="https://i.imgur.com/haNZ8eu.jpeg" alt="Foto de perfil" />
              <AvatarFallback>FP</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          aria-label="Siga-nos no TikTok"
        >
          <Button
            variant="ghost"
            className="w-full h-16 text-lg font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-[#00F2EA] to-[#ff0050] text-white hover:bg-gradient-to-r hover:from-[#00F2EA] hover:to-[#ff0050] hover:text-white"
          >
            <TiktokIcon className="mr-3 h-7 w-7" />
            Videozihos dancando 🔥
          </Button>
        </a>
        <a
          href="https://telegram.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          aria-label="Junte-se ao nosso canal no Telegram"
        >
          <Button
            variant="secondary"
            className="w-full h-16 text-lg font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <Send className="mr-3 h-7 w-7" />
            Telegram
          </Button>
        </a>
      </div>
    </main>
  );
}
