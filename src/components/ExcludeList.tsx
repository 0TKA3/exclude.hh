import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useState } from "react"

export default function ExcludeList() {

    const list = useSelector((state: RootState) => state.excludes.join(','))
    const [buttonText, setButtonText] = useState('Скопировать содержимое')

    function copyText() {
        navigator.clipboard.writeText(list)
        setButtonText('Текст скопирован!')
        setTimeout(() => { setButtonText('Скопировать содержимое') }, 500)
    }

    return (
        <div className="flex flex-col items-end">
            <div className="border-4 border-dashed border-[#d6001c] p-2 w-full">
                <p className="w-full break-all text-lg bg-slate-100 p-1 font-medium">{list}</p>
            </div>
            <button onClick={copyText} className="button-scale flex items-center justify-center bg-blue-400 mb-1 mt-2 p-2 rounded-md text-neutral-800 font-semibold w-[250px]">{buttonText}</button>
        </div>
    )
}