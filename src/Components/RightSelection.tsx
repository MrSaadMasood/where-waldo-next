import { MdOutlineAdsClick } from "react-icons/md";
type RightSelectionProps = {
  character: string
}
export default function RightSelection({ character }: RightSelectionProps) {

  return (
    <div className={`center bg-green-500 flex justify-center p-2 items-center fixed bottom-3 left-[50%] w-[25rem] h-10
         rounded-md `}>
      <p className="flex">
        <MdOutlineAdsClick size={30} />
      </p>
      <p>
        You Found {character} !!
      </p>
    </div>
  )
}
