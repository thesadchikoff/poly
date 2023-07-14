import React from 'react';
import Link from "next/link";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import Modal from '@mui/material/Modal';

const Services = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div id={"services"} className={"services mobile:h-max desktop:h-screen"}>
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
                    <p className={'text-white text-opacity-60 desktop:text-xl mobile:text-md font-normal'}>
                        Мы выполняем работы по укладке полусухой стяжки пола в г. Липецке и Липецкой области . Мы реализовываем проекты на объектах различного типа. Это могут быть квартиры на любом этаже, дома, коттеджи, торговые залы, коммерческие и складские помещения и так далее.
                        <br/>
                        <br/>
                        Прежде чем сказать клиенту, сколько стоит укладка стяжки пола, наш замерщик осматривает объект и делает все расчеты. Затем мы планируем выезд команды мастеров на объект. Для этого закупается необходимое количество стройматериалов , подготавливаются инструменты  и спецтехника.
                    </p>
                    <button onClick={handleOpen} className={'px-[25px] py-[15px] bg-amber-500 w-max text-white text-xl font-semibold'}>Обсудить проект</button>
                    <Modal
                        className={'flex items-center justify-center p-[15px]'}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                            <div className={'p-10 bg-white flex flex-col relative gap-10 rounded'}>
                                <span onClick={handleClose} className={'text-2xl font-medium absolute px-[12px] py-[2px] cursor-pointer bg-slate-200 right-[5px] top-[5px] rounded-full'}>&times;</span>
                                <h1>Выберите удобный способ обсуждения</h1>
                                <div className={'flex gap-10 w-full justify-center'}>
                                    <Link target={"_blank"} href={'https://api.whatsapp.com/send/?phone=79202446677&text=Здравствуйте!+Хотел+бы+обсудить+с+вами+проект'} className={'flex flex-col justify-center items-center w-max gap-2'}>
                                        <AiOutlineWhatsApp className={'text-[45px] text-green-600'}/>
                                        <span>Whats App</span>
                                    </Link>
                                    <Link target={"_blank"} href={"mailto:sevan.karapetyan.1987@mail.ru"} className={'flex flex-col justify-center items-center w-max gap-2'}>
                                        <HiOutlineMail className={'text-[45px] text-slate-400'}/>
                                        <span>Почта</span>
                                    </Link>
                                </div>
                            </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Services;