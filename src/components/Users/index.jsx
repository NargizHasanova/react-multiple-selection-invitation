import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendInvitation,sendAndBackBtns, setSearchingName } from '../../redux/userSlice'
import { Skeleton } from './Skeleton'
import { User } from './User'

export const Users = () => {
  const dispatch = useDispatch()
  const { pendingGet, searchingName, data } = useSelector(
    (state) => state.users,
  )

  function findUser(userName) {
    dispatch(setSearchingName(userName))
  }

  console.log(data)
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchingName}
          onChange={(e) => findUser(e.target.value)}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {pendingGet ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          <User />
        </ul>
      )}

      <button
        onClick={() => {
          dispatch(sendInvitation())
          dispatch(sendAndBackBtns())
        }}
        className="send-invite-btn"
      >
        Отправить приглашение
      </button>
    </>
  )
}
