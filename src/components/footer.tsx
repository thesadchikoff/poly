import React from 'react';
import config from "@/core/config";
import Link from "next/link";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <ul className="social-icon">
                <li className="social-icon__item"><Link  className="social-icon__link" href={'https://api.whatsapp.com/send/?phone=79202446677&text=Здравствуйте!+Хотел+бы+обсудить+с+вами+проект'} target={"_blank"}>
                    <AiOutlineWhatsApp/>
                </Link></li>
                <li className="social-icon__item"><Link className="social-icon__link" href={"mailto:sevan.karapetyan.1987@mail.ru"} target={"_blank"}>
                    <HiOutlineMail/>
                </Link></li>
            </ul>
            <ul className="menu">
                {
                    config.navLinks.map(link => {
                        return (
                            <Link key={link.label} href={link.url} className={'text-white'}>{link.label}</Link>
                        )
                    })
                }
            </ul>
            <div className={'flex flex-col justify-center items-center gap-2'}>
                <span className={'text-white desktop:text-[14px] mobile:text-[11px]'}>&copy;2023 Полусухая стяжка пола | All Rights Reserved</span>
                <Link className={'text-white desktop:text-[14px] opacity-70 mobile:text-[11px]'} href={'https://sadchikoff.vercel.app/'} target={"_blank"}>Разработка и поддержка: <span className={'font-medium'}>sadchikov <pattern className={"text-red-600"}>dev</pattern>.</span></Link>
            </div>
        </footer>
    );
};

export default Footer;