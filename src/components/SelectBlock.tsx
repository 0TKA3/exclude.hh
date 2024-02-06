import { useEffect, useState } from 'react'
import Select from './Select'
import { useDispatch } from 'react-redux'
import { setFilters } from '../redux/slices/filterSlice'
import { setExcludes } from '../redux/slices/excludesSlice'


export default function SelectBlock() {

    const dispatch = useDispatch()


    const [filterObj, setFilterObj] = useState({
        direction: 'frontend',
        framework: 'react',
        istypescript: 'javascript',
        jobformat: 'офис',
        grade: 'trainee',
    })

    useEffect(() => {
        dispatch(setFilters(filterObj))
        dispatch(setExcludes(filterObj))
    }, [filterObj])


    return (
        <div className='w-full flex flex-wrap p-3 border-4 mb-2 border-dashed block-scale'>
            <Select setFilterObj={setFilterObj} name='direction' title='Направление' options={['frontend', 'backend', 'fullstack']}></Select>
            <Select setFilterObj={setFilterObj} name='framework' title='Фреймворк' options={['react', 'vue', 'angular', 'next', 'spring', 'django', 'express', 'laravel', 'flask', 'nuxt']}></Select>
            <Select setFilterObj={setFilterObj} name='istypescript' title='Язык програм.' options={['javascript', 'typescript', 'php', 'python', 'go']}></Select>
            <Select setFilterObj={setFilterObj} name='jobformat' title='Формат работы' options={['офис', 'удаленно']}></Select>
            <Select setFilterObj={setFilterObj} name='grade' title='Ваш уровень' options={['trainee', 'junior', 'middle', 'senior', 'teamlead']}></Select>
        </div>
    )
}
