import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../redux';

const Test = () => {
    const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center mt-3">
    <button
      className="bg-blue-600 border rounded-lg p-2"
      onClick={() => dispatch(actionCreators.reduceAction(100))}
    >
      -
    </button>
    <div className="font-bold text-lg">Alter Money</div>
    <button
      className="bg-blue-600 border rounded-lg p-2"
      onClick={() => dispatch(actionCreators.increaseAction(100))}
    >
      +
    </button>
  </div>
  )
}

export default Test