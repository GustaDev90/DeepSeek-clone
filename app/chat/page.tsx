import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

const Chat: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 bg-cover bg-center scroll-pt-24">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <Image src="/deepseek-ai.png" width={50} height={100} alt="DeepSeek Logo" />
          <h1 className="text-2xl font-bold text-white">Hi, I'm DeepSeek.</h1>
        </div>
        <p className="text-white text-sm">How can I help you today?</p>
        <Textarea
          className="w-[350px] md:w-[600px] h-[100px] rounded-2xl border border-gray-700 bg-gray-800 pl-4 pt-3 text-white focus:border-blue-500 focus:outline-none"
          placeholder="Message DeepSeek"
        />
      </div>
    </div>
  );
};

export default Chat;
