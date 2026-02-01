import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { TiktokIcon } from '@/components/icons/tiktok-icon';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-8">
      <div className="flex w-full max-w-sm flex-col items-center space-y-6">
        <Avatar className="h-32 w-32">
          <AvatarImage src="https://i.imgur.com/haNZ8eu.jpeg" alt="Foto de perfil" />
          <AvatarFallback>FP</AvatarFallback>
        </Avatar>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          aria-label="Siga-nos no TikTok"
        >
          <Button
            variant="default"
            className="w-full h-16 text-lg font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <TiktokIcon className="mr-3 h-7 w-7" />
            TikTok
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
