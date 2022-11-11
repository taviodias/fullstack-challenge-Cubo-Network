export function Form(){
    return (
        <header className="p-4 bg-[#00b8e2] w-full">
            <form className="flex justify-center space-x-5 py-11">
                <Input type="text" name="firstName" placeholder="First name" />
                <Input type="text" name="lastName" placeholder="Last name" />
                <Input type="number" name="share" placeholder="Participation" min='0' max='100' />
                <button className="border-white border-2 rounded-sm bg-transparent font-bold text-white px-[50px] text-xl">SEND</button>
            </form>
        </header>
    )
}

function Input({type, name, placeholder, ...props}){
    return(
        <input className="p-5 w-72 rounded-sm" type={type} name={name} id={name} placeholder={placeholder} {...props} />
    )
}