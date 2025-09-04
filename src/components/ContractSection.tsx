import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ADDRESS_HREF } from "~/data";

const ContractSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section id="buy" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Contract Address */}
          <div className="flex items-center justify-center space-x-2 rounded-lg p-4 relative">
            <span className="text-cat-brown text-2xl break-all">
              CA: {CONTRACT_ADDRESS}
            </span>
            <button
              onClick={copyToClipboard}
              className="p-2"
              title="Copy to clipboard"
            >
              <Copy
                className={`w-5 h-5 absolute right-2 top-2 ${
                  copied ? "text-green-500" : "text-cat-brown"
                }`}
              />
            </button>
          </div>

          {/* Buy Button */}
          <div className="flex sm:flex-row flex-col items-center justify-center gap-4 px-10 sm:px-0">
            <a
              href={CONTRACT_ADDRESS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-surface space-x-2 bg-primary text-primary-foreground rounded-full transition-all duration-300 text-xl px-12 py-4 shadow-lg hover:-translate-y-1 font-black w-full sm:w-auto"
            >
              BUY HERE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;
