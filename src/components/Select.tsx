import React, { useState } from "react";
import { FilterObjType } from "../types/FilterObjType";


type SelectType = {
    title: string,
    options: string[],
    name: string,
    setFilterObj: React.Dispatch<React.SetStateAction<FilterObjType>>,
}

export default function Select({ title, options, name, setFilterObj }: SelectType) {
    const [value, setValue] = useState(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        setFilterObj(prev => ({ ...prev, [name]: selectedValue }));
    };

    return (
        <div className="choose-block flex flex-col items-center bg-white border-[1px] border-[#dfeaf2] rounded-2xl w-full md:w-64 mb-4 mr-4 md:h-32 p-4">
            <h1 className="mr-1 text-xl font-bold mb-1">{title}</h1>
            <select value={value} onChange={handleChange} className="outline-none p-3 text-lg bg-[#90b4f0] rounded-xl flex items-center justify-center font-medium">
                {options.map((item, index) => (
                    <option className="text-lg font-medium" key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}