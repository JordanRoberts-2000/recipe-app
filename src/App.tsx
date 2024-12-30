import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background">
      <Header />
      <div className="w-48 border border-black p-2 ml-auto mr-28 sticky top-0">
        Searchbar
      </div>
      <main className="p-4 px-28">
        <div className="grid grid-cols-4 gap-4 bg-green-100 p-4 rounded-lg">
          {[...Array(100)].map(() => (
            <div className="aspect-square bg-blue-100"></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
