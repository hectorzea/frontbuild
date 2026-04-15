export default function IndexPage() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] gap-x-3 gap-y-4 min-h-screen">
      <header className="col-start-2 col-end-5 row-start-1 bg-purple-400 p-4">
        Header
        <p>shdahsdahsdhsa</p>
        <p>shdahsdahsdhsa</p>
        <p>shdahsdahsdhsa</p>
        <p>shdahsdahsdhsa</p>
      </header>
      <aside className="col-start-1 col-end-2 row-start-1 -row-end-1 bg-amber-600">
        Aside
      </aside>
      <main className="col-start-2 col-end-5 row-start-2 bg-blue-400 border">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-500">Card 1</div>
          <div className="bg-gray-500">Card 2</div>
          <div className="bg-gray-500">Card 3</div>
          <div className="bg-gray-500">Card 4</div>
          <div className="bg-gray-500">Card 5</div>
        </div>
      </main>
      <footer className="col-start-2 col-end-5 row-start-3 bg-green-400">
        footer
      </footer>
    </div>
  );
}
