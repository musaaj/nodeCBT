import TextInput from './text_input.jsx'

const LoginForm = (props)=>{
	return (
		<form className='w-full p-4'>
			<h1 className='mb-4 text-xl text-sky-800 font-bold'>Log in to your account</h1>
			<TextInput placeholder="user123" type="text" label='Username:' name='username'/>
			<TextInput placeholder="m<]flfk89%>" type="password" label='Password:' name='password'/>
			<div className='w-full'>
				<p className='text-small'>Forgot your password? Contact the admin to recover your account</p>
				<button className='w-full p-[2px] mt-2 border-2 border-sky-500 border-dashed rounded-lg cursor-pointer hover:outline-offset-2 outline-offset-4 outline-[0.5px] outline'><b>Log in</b></button>
				</div>
		</form>
	)
}

export default LoginForm;
