
export default function MainHeader({text}: {text: string}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
       <h1 className="text-5xl font-bold">{text}</h1>
        <hr className="w-[5rem] border-2 border-secondaryColor"></hr>
    </div>
  )
}
