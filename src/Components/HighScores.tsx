import { useEffect, useState } from "react"
import GameForm from "./GameForm"
import { useRouter } from "next/navigation"
import axios from "axios"

type HighScoreProps = {
  time: string,
  id: string
}
type Record = {
  name: string,
  time: string
}
export default function HighScore({ time, id }: HighScoreProps) {
  // whene the form is submitted a get request is made to the server to get all the previous players records
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [records, setRecords] = useState<Record[]>()
  // to naviagte the user to the main page
  const navigate = useRouter()
  function formSubmissionSetter(value: boolean) {
    setIsFormSubmitted(value)
  }
  useEffect(() => {
    if (isFormSubmitted) {
      axios.get(`/api/records/${id}`).then(res => {
        console.log("the saved records are", res.data);

        setRecords(res.data)
      }).catch(error => {
        console.log("error occured while getting records", error)
      })
    }
  }, [isFormSubmitted, id])
  return (
    <div>
      {!isFormSubmitted && <GameForm time={time} setFormSubmission={formSubmissionSetter} id={id} />}
      {isFormSubmitted &&
        <div className=" fixed top-[50%] left-[50%] center z-40 h-[25rem]  md:h-[40rem] md:w-[30rem] w-[20rem] 
                        bg-black border-4 rounded-lg flex flex-col justify-center items-center border-red-600 text-white">
          <p className=" text-white font-bold text-2xl md:text-4xl mb-3">
            HighScores
          </p>
          <div className=" text-white md:font-bold w-[17rem] md:w-[25rem] h-[15rem] md:h-[25rem] flex flex-col 
                justify-start items-center 
                overflow-y-scroll noScroll ">
            <div className="  w-[95%] h-8 md:h-12 flex justify-between items-center border-b border-white">
              <p className=" font-bold">
                Name
              </p>
              <p className=" font-bold">
                Time
              </p>
            </div>
            {records && records.map((item, index: number) => {
              return (
                <div key={index} className="  w-[95%] h-8 md:h-12 flex justify-between items-center border-b border-white">
                  <p>
                    {item.name}
                  </p>
                  <p>
                    {item.time}
                  </p>
                </div>
              )
            })

            }
          </div>
          <button className=" bg-green-500 p-2 mt-2 rounded-md hover:bg-green-400"
            onClick={() => navigate.push("/")}>Main Menu</button>
        </div>
      }
    </div>
  )
}
