import ChatArea from "@/components/chat_area";
import ChatInput from "@/components/chat_input";

export default function Home() {
  return (
    <main className="bg-gray-800 w-full h-screen">
      <div className="max-w-6xl container mx-auto relative flex h-full">
        <div className="flex w-full h-full flex-col">
          <ChatArea />
          <ChatInput />
        </div>
      </div>
    </main>
  );
}
