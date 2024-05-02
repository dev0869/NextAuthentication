import React from 'react'

const page = () => {
  return (
    <div>{process.env.MONGO_URI}</div>
  )
}

export default page