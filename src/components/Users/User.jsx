import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchBtn } from '../../redux/userSlice'

export const User = () => {
  const dispatch = useDispatch()
  const { data, searchingName } = useSelector((state) => state.users)

  return data.map((item) => {
    if (
      item.first_name.toLowerCase().includes(searchingName.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchingName.toLowerCase())
    ) {
      return (
        <li key={item.id}>
          <div>
            <img className="avatar" src={item.avatar} alt="User" />
            <div>
              <h3>{item.first_name + ' ' + item.last_name}</h3>
              <p>
                <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
                </svg>
                {item.email}
              </p>
            </div>
          </div>
          <img
            onClick={() => dispatch(switchBtn(item.id))}
            className="action"
            src={`/assets/${item.addBtn ? 'plus' : 'minus'}.svg`}
            alt="Action"
          />
        </li>
      )
    }
  })
}
