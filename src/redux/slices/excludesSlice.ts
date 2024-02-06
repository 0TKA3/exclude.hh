import { createSlice } from "@reduxjs/toolkit";
import { FilterObjType } from "../../types/FilterObjType";

const wordList = [
  'backend',
  'frontend',
  'fullstack',
  'react',
  'react.js',
  'vue',
  'vue.js',
  'nuxt',
  'typescript',
  'angular',
  'angular.js',
  'typescript',
  'python',
  'analyst',
  'manager',
  'trainee',
  'junior',
  'middle',
  'senior',
  'офис',
  'php',
  'удаленно',
  'next.js',
  'next',
  'teamlead',
  'менеджер',
  'рекрутер',
  'it-рекрутер',
  'python',
  'c++',
  'c#',
  'teamlead',
  'laravel',
  'ui/ux',
  'ios',
  'android',
  'qa',
  'руководитель',
  'go'
]


const initialState: string[] = wordList;

const excludesSlice = createSlice({
  name: "excludes",
  initialState,
  reducers: {
    setExcludes: (state: string[], { payload }: { payload: FilterObjType }) => {
      const excludeValues: string[] = Object.values(payload).filter(value => typeof value === 'string');
      const newArray = wordList.filter(item => !excludeValues.some(exclude => item.includes(exclude)));
      return newArray;
    },
  },  
});

export const { setExcludes } = excludesSlice.actions;

export default excludesSlice.reducer;
