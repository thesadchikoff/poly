import React, {useEffect, useState} from 'react';
import {AiOutlineMessage, AiOutlineUser} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import {MdOutlineMailOutline} from "react-icons/md";
import Link from "next/link";
// @ts-ignore
import InputMask from "react-input-mask";
import {message} from "antd";
interface ISubmit {
    name: string
    phoneNumber: string
    subject: string
}
const Contacts = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [subject, setSubject] = useState('')
    const submitForm = (clientName, phone, sub) => {
        if (clientName === "" || phone === "" || sub === "") {
            return message.error("Заполните все поля формы")
        }
        return message.warning("Отправка формы отключена")
    }
    const showAlert = (isForm) => {
        if (isForm) {
            return message.warning('Отправка формы отключена')
        }
        return message.warning('Временно недоступно')
    }
    const [value, setValue] = useState('')
    return (
        <div id={"contacts"} className={' bg-[url("https://images.unsplash.com/photo-1586184476769-e0f74836ea4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")] bg-cover bg-no-repeat w-full desktop:h-screen'}>
            <div className={'w-full h-full bg-black bg-opacity-70 mobile:px-[15px] desktop:px-[130px] mobile:py-[30px] desktop:py-[80px] flex flex-col mobile:gap-[60px] desktop:gap-[100px]'}>
                <div>
                    <span className="text-center text-white text-opacity-60 text-[15px] font-normal">contacts</span>
                    <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                        className="text-white text-[35px] font-semibold"> Связь с нами</span></div>
                </div>
                <div className={'w-full h-full flex mobile:flex-col-reverse desktop:flex-row tablet:flex-col-reverse desktop:gap-4 tablet:gap-10 mobile:gap-16'}>
                    <div className={'tablet:w-full h-full desktop:w-1/2 mobile:w-full flex flex-col gap-14'}>
                        <div className={'flex items-center gap-4 border-2 border-amber-500 w-full p-5'}>
                            <AiOutlineUser className={'text-white text-xl'}/>
                            <input value={name} onChange={(e) => setName(e.target.value)} className={'bg-transparent focus:outline-0 focus:border-0 text-white border-0 outline-0 w-full h-full'} type="text" placeholder={'Ваше имя'}/>
                        </div>
                        <div className={'flex items-center gap-4 border-2 border-amber-500 w-full p-5'}>
                            <BsTelephone className={'text-white text-xl'}/>
                            <InputMask
                                className={'bg-transparent focus:outline-0 focus:border-0 text-white border-0 outline-0 w-full h-full'}
                                mask='+7 (999) 999 99 99'
                                value={phoneNumber}
                                placeholder={'Ваш номер телефона'}
                                onChange={(e: any) => setPhoneNumber(e.target.value)}>
                            </InputMask>
                        </div>
                        <div className={'flex items-start gap-4 border-2 border-amber-500 w-full p-5'}>
                            <AiOutlineMessage className={'text-white text-2xl'}/>
                            <textarea value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={'Ваше сообщение'} className={'bg-transparent text-white focus:outline-0 focus:border-0 border-0 outline-0 w-full h-full'} name="" id="" cols={30} rows={10}></textarea>
                        </div>
                        <button onClick={() => submitForm(name, phoneNumber, subject)} className={'px-[55px] py-[15px] bg-amber-500 w-max text-white text-xl font-semibold hover:bg-amber-400 transition-all delay-150 active:bg-amber-600 active:transition-none active:delay-0'}>Отправить</button>
                    </div>
                    <div className={'bg-black bg-opacity-70 p-5 h-full tablet:w-full text-white desktop:w-1/2 mobile:w-full flex flex-col gap-14'}>
                        <h1 className={'tablet:text-4xl mobile:text-2xl font-semibold'}>Контактная информация</h1>
                        <hr className={'opacity-30'}/>
                        <div className={'flex flex-col gap-5'}>
                            <div className={'w-full flex items-center gap-4 opacity70'}>
                                <MdOutlineMailOutline className={'tablet:text-2xl mobile:text-xl'}/>
                                <span className={'tablet:text-xl mobile:text-[16px]'}>
                                        sevan.karapetyan.1987@mail.ru
                                    </span>
                            </div>
                            <div className={'flex items-center gap-4 opacity70'}>
                                <BsTelephone className={'tablet:text-2xl mobile:text-xl'}/>
                                <span className={'tablet:text-xl mobile:text-[16px]'}>
                                        +7 (920) 244 66 77
                                    </span>
                            </div>
                        </div>
                        <hr className={'opacity-30'}/>
                        <p>
                            Оказание услуг по полусухой стяжке пола по Липецку и Липецкой области.
                            <br/>
                            <br/>
                            Заполняя форму и нажимая на кнопку &quot;Отправить&quot; вы принимаете условия пользовательского соглашения
                        </p>
                        <hr className={'opacity-30'}/>
                        <div>
                            <button onClick={() => showAlert(false)} className={'text-amber-500 underline hover:text-amber-300'}>Политика конфиденциальности</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;