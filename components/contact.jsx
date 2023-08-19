export default function ContactForm() {
    return (
        <>
        <form className="py-4 mt-4 border-t flex flex-col gap-5">
            <div>
                <label htmlFor="fullname">Ful Name</label>
                <input type="text" id="fullname" placeholder="John Doe" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="john@gmail.com" />
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea 
                className="h-32"
                id="message" 
                placeholder="type your message right here"></textarea>
            </div>
            <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>
        </form>

        <div className="bg-slate-100 flex flex-col">
            <div className="text-red-600 px-5 py-2">Error Message</div>
        </div>
        </>
        
    )
}