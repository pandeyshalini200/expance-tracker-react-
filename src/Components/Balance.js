import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transactions=> transactions.amount)
  // console.log(transactions)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>INR{total}</h1>
    </div>
  )
}
