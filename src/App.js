
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increament} from './actions/Index'
import {decreament} from './actions/Index'
import signin from './actions/in'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.IsLogged)
  const dispatch = useDispatch()
  return <>
    <div >
      <h1>counter  {counter}</h1>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={()=>dispatch(decreament())}>-</button>
    </div>
    < div >
      {logged ? <h1> logged in</h1> : <h1> you are not supposed to see this</h1>}
      <button onClick={() => dispatch(signin())}>sign in</button>
    </div >
  </>
}

export default App;
