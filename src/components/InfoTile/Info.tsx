function Info(props: {title: string , value: string, type: string}) {
  return (
    <div className={`flex flex-col font-main ${props.type === 'green'? 'bg-[#a1efa3]' : props.type === 'red' ? 'bg-red-300' : 'bg-[#f3e8ff]'} px-10 py-8 rounded-4xl`}>
        <span className="text-sm tracking-wide">{props.title}</span>
        <span className="text-4xl">{props.value}</span>
    </div>
  )
}

export default Info