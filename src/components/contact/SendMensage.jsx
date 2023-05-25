import { useState } from "react"
import { useTranslation } from "react-i18next"
import emailJs from "@emailjs/browser"


const SendMessage = () => {
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const sendEmail = (e) => {
        e.preventDefault()

        const templatePlams = {
            from_name: name,
            email: email,
            message: message
        }

        if (name === "" || email === "" || message === "") {
            alert(t("contact.1.send message.fill in all fields"))
            return
        }

        emailJs.send("service_z1rea6e", "template_tnj7zgk", templatePlams, "MLFJLbx_Pb2G57ndw")
            .then(() => {
                setName("")
                setEmail("")
                setMessage("")
                alert(t("contact.1.send message.success"))
            }), () => {
                alert(t("contact.1.send message.erro"))
            }
    }

    return (
        <form
            onSubmit={sendEmail}
            className='grid grid-cols-2 justify-items-start max-sm:justify-items-center
    w-full max-sm:grid-cols-1 max-w-[660px] max-h-[425px] gap-y-6 gap-x-2 mt-10 mx-auto'>
            <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='w-full max-w-[322px] h-16 bg-[#ffffff1a] text-white rounded-[20px] 
          pl-4 outline-none focus:border focus:border-white'
                placeholder={t("contact.1.send message.your name")} />

            <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full max-w-[322px] h-16 bg-[#ffffff1a] text-white rounded-[20px]
                pl-4 outline-none focus:border focus:border-white'
                placeholder={t("contact.1.send message.your e-mail")} />

            <textarea
                name="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className='w-full max-w-[652px] h-48 bg-[#ffffff1a] col-span-2 max-sm:col-span-1
                rounded-[20px] pl-4 pt-4 resize-none outline-none text-lg
                focus:border focus:border-white'
                placeholder={t("contact.1.send message.your message")} />

            <button
                type="submit"
                className='border border-[#ffffff1a] w-[145px] h-[45px] bg-[#ffffff1a] 
             relative before:absolute before:top-0 before:w-0 before:h-full before:left-0 before:duration-500 
             before:bg-white hover:before:w-full group'>

                <span className='group-hover:text-black group-hover:z-10 group-hover:relative'>
                    {t("contact.1.send message.send form")}
                </span>

            </button>
        </form>
    )
}

export default SendMessage