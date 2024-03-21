export function ChatOption({ image, title, message, selected }) {
  return (
    <div
      className={`shadow-md h-64 w-64 p-4 flex flex-col items-center justify-around ${
        selected ? "outline outline-blue-500" : ""
      }`}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} className="max-h-16 max-w-16" />
      <p>{message}</p>
    </div>
  );
}
