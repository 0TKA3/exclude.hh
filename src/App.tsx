import SelectBlock from "./components/SelectBlock"
import ExcludeList from "./components/ExcludeList"

export default function App() {
  return (
    <div className="container flex ml-auto mr-auto flex-wrap xl:mt-40 md:mt-4 p-2">
      <h1 className="sm:text-4xl text-3xl font-extrabold mb-6">Составь свой список слов исключений для <span className="text-[#d6001c]">hh.ru</span>! Автор: <a target="_blank" className="text-blue-600" href="https://t.me/tw1nklee">@tw1nklee</a></h1>
      <SelectBlock></SelectBlock>
      <ExcludeList></ExcludeList>
    </div>
  )
}