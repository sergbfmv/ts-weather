import React, { useState } from 'react'
import { useAppDispatch } from '../../hooks'
import { weatherRequestAsync } from '../../store/weatherAction'
import s from './Search.module.scss'
import {ReactComponent as SearchIcon} from './search.svg'

type Props = {}

export const Search = (props: Props) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    dispatch(weatherRequestAsync(search))
  }

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value)
    }
  }

  return (
    <form className={s.form} onSubmit={handlerSubmit}>
      <input type="search" className={s.search} onChange={handleChange} value={search} />
      <button type='submit' className={s.btn}>
        <SearchIcon />
      </button>
    </form>
  )
}