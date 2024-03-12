


const Contact = ()=>{


    return(
        <div name='contact' className="w-full h-screen bg-white flex justify-center items-center p-4">
            <form action="" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400">Contact</p>
                </div>
                <input className="bg-[#ccdef6] p-2" type="text" placeholder="Name"/>
                <input className="my-4 p-2 bg-[#ccdef6]" type="Email" placeholder="Email"/>
                <textarea className="bg-[#ccdef6] py-2 px-2" name="message" rows="10" placeholder="Feedback" >

                </textarea>
                <button className="text-black border-2 hover:bg-black hover:text-white px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
            </form>

        </div>
    )
}


export default Contact;