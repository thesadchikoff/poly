import React, {useState} from 'react';
import Link from "next/link";
import {Modal} from "next-modal";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
const Services = () => {
    const [toggleModal, setToggleModal] = useState(false)
    return (
        <div className={"services mobile:h-max desktop:h-screen"}>
            <div className={'w-full mobile:h-max desktop:h-full bg-black bg-opacity-70 mobile:px-[15px] desktop:px-[130px] mobile:py-[30px] desktop:py-[80px] flex flex-col mobile:gap-[60px] desktop:gap-[160px]'}>
                {/*  Services title start  */}
                <div>
                    <span className="text-center text-white text-opacity-60 text-[15px] font-normal">services</span>
                    <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                        className="text-white text-[35px] font-semibold"> Наши услуги</span></div>
                </div>
                {/*  Services title end  */}
                {/*  Services board start  */}
                <div className={'w-full bg-black bg-opacity-50 p-[40px] flex flex-col gap-[42px]'}>
                    <h1 className={'text-white text-[35px] font-medium'}>Полусухая стяжка пола</h1>
                    <p className={'text-white text-opacity-60 text-xl font-normal'}>
                        Квалифицированная строительная бригада выполнит полусухую стяжку пола.
                        <br/>
                        Сделаем ровную стяжку за 8 часов без трещин и неровностей,
                        благодаря уплотнению смеси затирочной машиной.
                        Это позволяет избежать пустот в стяжке.
                        Полусухая стяжка качественнее традиционной.
                        Является идеальным основанием под плитку, паркет, линолеум, ламинат, полимер, пробку.
                    </p>
                    <button onClick={() => setToggleModal((prev) => !prev)} className={'px-[25px] py-[15px] bg-amber-500 w-max text-white text-xl font-semibold'}>Обсудить проект</button>
                    <Modal toggle={toggleModal} setToggle={setToggleModal}>
                        <Modal.Header className='sans font-900 text-30px fade-in-left animation-duration-500ms animation-forwards'>
                            <h3>👋 Выберите удобный вариант для обсуждения</h3>
                        </Modal.Header>
                        <Modal.Body className='flex items-center justify-center gap-14 sans font-400 text-15px text-gray fade-in animation-duration-800ms animation-forwards'>
                            <Link target={"_blank"} href={'https://api.whatsapp.com/send/?phone=79202446677&text=Здравствуйте!+Хотел+бы+обсудить+с+вами+проект'} className={'flex flex-col justify-center items-center w-max gap-2'}>
                                <AiOutlineWhatsApp className={'text-[45px] text-green-600'}/>
                                <span>What's App</span>
                            </Link>
                            <Link target={"_blank"} href={"mailto:sevan.karapetyan.1987@mail.ru"} className={'flex flex-col justify-center items-center w-max gap-2'}>
                                <HiOutlineMail className={'text-[45px] text-slate-400'}/>
                                <span>Почта</span>
                            </Link>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Services;