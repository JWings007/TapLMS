function Button(props: {text: string, action: string, setOpen: () => void }) {
  return (
    <button className="bg-[#b09dfa] px-6 py-2 rounded-2xl text-sm" onClick={props.setOpen}>{props.text}</button>
  )
}

export default Button