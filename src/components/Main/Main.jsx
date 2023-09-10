import React from 'react'
import { usersInfo } from '../../constants/usersInfo'
import PersonalCard from '../PersonalCard/PersonalCard'
const Main = () => {
  return (
    <main>
    {usersInfo.map((user) => (
      <PersonalCard personalInfo={user} />
    ))}
  </main>
  )
}

export default Main