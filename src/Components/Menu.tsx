import { CharacterData, Coordinates } from "@/types/types"

type MenuProps = {
  position: Coordinates,
  positionRatio: Coordinates,
  array: CharacterData[],
  menuHeightWidth: string,
  charactersFound: string[],
  characterSelected: <T extends string>(id: T, name: T) => void
}
export default function Menu({ position, positionRatio, array, menuHeightWidth, characterSelected, charactersFound }: MenuProps) {
  return (
    <div style={{
      top: position.y + (positionRatio.y < .04 ? 50 : 30),
      left: position.x - (positionRatio.x < .22 ? -50 : 150)
    }}
      className={`absolute bg-black flex flex-col justify-center items-center text-white ${menuHeightWidth} rounded-lg 
            ease-in duration-300 overflow-hidden
                       text-md `}
      id="">

      {array.map((item, index) => {
        if (!charactersFound.includes(item.name))
          return (
            <ul key={index}>
              <li className=" flex justify-center items-center w-[6rem] text-xs md:text-base lg:text-lg hover:bg-gray-700
                        hover:text-white
                        mt-[.1rem] cursor-pointer">
                <button onClick={() => characterSelected(item.id, item.name)}>{item.name}</button>
              </li>
            </ul>
          )
      })}
    </div>
  )
}
