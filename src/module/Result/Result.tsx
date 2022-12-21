import { useAppSelector } from '../../hooks'
import s from './Result.module.scss'

type Props = {}

export const Result = (props: Props) => {
  const { data, isLoading, error } = useAppSelector((state) => state.weather)
  return (
    <div className={s.result}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : data.name ? (
        <>
          <p>{data.main.temp}&#8451;</p>
          <p>{data.name}</p>
        </>
      ) : error === 'Not found' ? (
        <p>Город не найден</p>
      ) : (<p>Введите город</p>
      )}
    </div>
  )
}