const TextInput = (props)=>{
	return (
		<div className="flex w-full mb-2">
			<label className='p-2 text-bold'><b>{props.label}</b></label>
			<input className="w-full p-2 border-solid outline-none focus:border-[1px] rounded-lg focus:border-sky-500" type={props.type} name={props.name} placeholder={props.placeholder}/>
		</div>
	)
}

export default TextInput;
