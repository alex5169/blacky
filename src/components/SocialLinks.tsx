import { Twitter, MessageCircle, TrendingUp, BarChart3 } from "lucide-react";
import DexIcon from "./icons/dex";
import TelegramIcon from "./icons/telegram";
import XIcon from "./icons/x";
import DexToolsIcon from "./icons/dextools";
import { DEXSCREENER, DEXTOOLS, TELEGRAM, TWITTER } from "~/data";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Twitter",
      url: TWITTER,
      icon: XIcon,
      color: "hover:text-blue-500",
      bg: "bg-black",
    },
    {
      name: "Telegram",
      url: TELEGRAM,
      icon: TelegramIcon,
      color: "hover:text-blue-400",
      bg: "bg-blue-500",
    },
    {
      name: "DexScreener",
      url: DEXSCREENER,
      icon: DexIcon,
      color: "hover:text-green-500",
      bg: "bg-black",
    },
    {
      name: "DexTools",
      url: DEXTOOLS,
      icon: DexToolsIcon,
      color: "hover:text-purple-500",
      bg: "bg-white",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="michi-card px-16 py-12">
            <h3 className="text-2xl font-bold text-cat-brown mb-8 text-center font-comic">
              Join the Community
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center space-y-2 p-4 rounded-full border-[3px] shadow-md shadow-black border-white transition-all duration-300 ${link.color} group ${link.bg}`}
                    title={link.name}
                  >
                    <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
