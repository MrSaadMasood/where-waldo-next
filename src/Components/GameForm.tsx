import { FormEvent, useState } from 'react'
import axios from 'axios'
type GameFormProps = {
  time: string,
  setFormSubmission: (value: boolean) => void,
  id: string
}
export default function GameForm({ time, setFormSubmission, id }: GameFormProps) {
  // handles the form submission and to add the record in the databas
  const [name, setName] = useState("")
  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!name) return
    axios.post(`/api/records/save/${id}`, { name: name, time: time }).then(() => {
      setFormSubmission(true)
    }).catch((error: Error) => {
      console.log("some error occured", error);
      setFormSubmission(false)
    })
  }
  return (
    <div className=" fixed top-[50%] left-[50%] center z-40 h-[25rem]  md:h-[40rem] md:w-[30rem] w-[20rem] 
                        bg-black border-4 rounded-lg flex flex-col justify-center items-center border-red-600 text-white">
      <p className=" text-white font-bold text-2xl md:text-4xl ">
        HighScores
      </p>
      <p className=" text-base">
        {time && time}
      </p>
      <p className=" text-sm">
        Add your own Score!
      </p>
      <form onSubmit={(e) => submitForm(e)} className=" h-20 w-auto flex mt-1
                flex-col justify-around items-center" >
        <input type="text" placeholder="Enter Your Name Here" name="name" id="name" required value={name}
          className="text-black rounded-lg p-1" onChange={(e) => setName(e.target.value)} />
        <hr />
        <input type="submit" value="Submit" className=" bg-blue-600 hover:bg-blue-300 rounded-xl h-8 w-16" />
      </form>
    </div>
  )
}
