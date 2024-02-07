export default function page() {
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/next.svg" alt="Logo" />
        </div>
        <div>
          <div className="text-xl forn-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <button className="bg-sky-500 hover:bg-sky-700">
        save changes
      </button>
      <ul className="p-6 divide-y divide-slate-200">

      </ul>
    </div>
  );
}
