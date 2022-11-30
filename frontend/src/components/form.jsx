import { useRef } from "react"

export function Form({addParticipant}){

	const inputFirstName = useRef('');
	const inputLastName = useRef('');
	const inputShare = useRef(null);

	const onClick = (e) => {
		e.preventDefault();
		if (inputShare.current.value > 0){ 
		addParticipant({
				firstName: inputFirstName.current.value,
				lastName: inputLastName.current.value,
				share: parseInt(inputShare.current.value),
			});
		}
		inputFirstName.current.value = '';
		inputLastName.current.value = '';
		inputShare.current.value = null;
	}

	return (
		<header className="p-4 bg-[#00b8e2] w-full">
			<form className="flex justify-center space-x-5 py-11 container max-w-5xl mx-auto">
				<input className="p-5 w-72 rounded-sm" ref={inputFirstName} type="text" name="firstName" id="firstName" placeholder="First name" required />
				<input className="p-5 w-72 rounded-sm" ref={inputLastName} type="text" name="lastName" id="lastName" placeholder="Last name" required />
				<input className="p-5 w-72 rounded-sm" ref={inputShare} type="number" name="share" id="share" placeholder="Participation" min='1' max='100' required />
				<button 
					type="submit"
					className="border-white border-2 rounded-sm bg-transparent font-bold text-white px-[50px] text-xl"
					onClick={onClick}
				>
					SEND
				</button>
			</form>
		</header>
  )
}

// function Input({type, name, placeholder, ref, ...props}){
// 	return(
// 		<input className="p-5 w-72 rounded-sm" type={type} name={name} id={name} placeholder={placeholder} {...props} />
// 	)
// }