
export default function SubHeader({text}: {text: string}) {
    return (
      <div className="flex flex-col gap-2 items-start ">
         <h1 className="text-xl font-bold">{text}</h1>
          <hr className="w-[5rem] border-2 border-secondaryColor"></hr>
      </div>
    )
  }
  