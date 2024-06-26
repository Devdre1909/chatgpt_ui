export function EmptyScreen() {
  return (
    <div className="mx-auto px-4 h-full w-full flex items-center justify-center">
      <div className="text-center">
        <h1>
          <span className="text-2xl font-bold">Welcome to ChatGPT</span>
        </h1>
        <p className="text-gray-400">
          <span className="text-lg">Ask me anything!</span>
        </p>
      </div>
    </div>
  );
}
