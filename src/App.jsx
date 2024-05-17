import { Fragment } from "react"
import { useState } from "react"
import ExampleTwo from "./Module-4.12/ExampleTwo"

export default function App() {

  const [userId, setuserId] = useState(1)

  return (
    <Fragment>
      <button
        onClick={() => setuserId(userId == 1 ? 2 : 1)}
        className="bg-gray-300 px-3 py-2 rounded-md text-lg font-medium"
      >
        Swithc to Profile No: {userId == 1 ? 2 : 1}
      </button>
      <ExampleTwo 
      key={userId}
      userId={userId} />
    </Fragment>
  )
}