import { CharacterData } from "@/types/types"
import Image from "next/image"

type SideBarProps = {
  heightWidth: string,
  characters: CharacterData[]
}
export default function SideBar({ heightWidth, characters }: SideBarProps) {

  return (
    <div className={`${heightWidth} bg-black text-white ease-in duration-200 absolute z-10 rounded-2xl
                top-5 right-0 overflow-hidden flex flex-col justify-center items-center`} >
      {characters.map((character, item) => {
        return (
          <div key={item} className=" w-[90%] h-32 p-3 flex justify-between items-center cursor-pointer">
            <div className="font-bold">{character.name}</div>
            <div className="">
              <Image
                src={`/characters/${character.imageData.path}`} alt="" width={90} height={90} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
