export function ChatOption({ image, title, message, selected }) {
  return (
    <div
      className={`shadow-md h-64 w-64 p-4 flex flex-col items-center justify-around dark:bg-zinc-800 dark:text-white ${
        selected ? "outline outline-blue-500" : ""
      }`}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} className="max-h-16 max-w-16" />
      <p className="text-center">{message}</p>
    </div>
  );
}
