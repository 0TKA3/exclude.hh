import SelectBlock from "./components/SelectBlock"
import ExcludeList from "./components/ExcludeList"

export default function App() {
  return (
    <div className="container flex ml-auto mr-auto flex-wrap mt-40   p-2">
      <h1 className="text-4xl font-extrabold mb-6">Составь свой список слов исключений для <span className="text-[#d6001c]">hh.ru</span>! Автор: <a target="_blank" className="text-blue-600" href="https://t.me/tw1nklee">@tw1nklee</a></h1>
      <SelectBlock></SelectBlock>
      <ExcludeList></ExcludeList>
    </div>
  )
}