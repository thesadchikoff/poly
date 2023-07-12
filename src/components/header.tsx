import React from 'react';
import config from "@/core/config";
import Link from "next/link";
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'

const Header = () => {
    return (
        <header className={'flex justify-between px-[15px] h-[70px] absolute w-full mobile:bg-image items-center flex-grow-0'}>
            <span className={'font-bold uppercase'}>{config.siteName}</span>
            <nav className="desktop:flex items-center gap-[60px] mobile:hidden tablet:hidden">
                {
                    config.navLinks.map(link => {
                        return (
                            <li className={'list-none'}>
                                <Link className={'hover:text-slate-700 delay-150'} href={link.url}>{link.label}</Link>
                            </li>
                        )
                    })
                }
            </nav>
            <div>
                <Link href={"tel:+79202446677"} className={'flex items-center gap-[15px] text-[12px]'}>
                    <BsTelephone className={'text-[14px]'}/>
                    <span className={'font-medium'}>
                        +7 (920) 244 66 77
                    </span>
                </Link>
                <Link href={"mailto:sevan.karapetyan.1987@mail.ru"} className={'flex items-center gap-[15px] text-[12px]'}>
                    <MdOutlineMailOutline className={'text-[14px]'}/>
                    <span className={'text-opacity-70 text-black font-semibold'}>
                        sevan.karapetyan.1987@mail.ru
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Header;