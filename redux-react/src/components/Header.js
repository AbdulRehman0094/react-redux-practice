import React from 'react'
import { useSelector } from 'react-redux'
import AlterMoney from './AlterMoney'
import User from './User'
import Employee from './Employee'
import WeatherDisplay from './Weather'

const Header = () => {
    const balance= useSelector(state=>state.count)
    // console.log(balance)
  return (
    <>
    <div className='flex justify-between p-4 bg-gray-400 items-center'>
          <div className='font-bold text-lg'>Redux React Application</div>
          <button className='bg-blue-600 border rounded-lg p-4'>Balance: {balance} </button>
      </div>
      {/* <AlterMoney /> */}
      <User/>
      {/* <WeatherDisplay/> */}
      </>
  )
}

export default Header