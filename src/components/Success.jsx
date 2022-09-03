import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendAndBackBtns } from '../redux/userSlice'

export const Success = () => {
  const dispatch = useDispatch()
  const { selectedForInvitation } = useSelector((state) => state.users)
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>
        Всем {selectedForInvitation.length} пользователям отправлено приглашение.
      </p>
      <button onClick={()=>dispatch(sendAndBackBtns())} className="send-invite-btn">Назад</button>
    </div>
  )
}
