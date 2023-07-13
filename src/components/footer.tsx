import React from 'react';
import config from "@/core/config";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className={'flex justify-between bg-[#212121] px-[15px] desktop:h-[70px] mobile:py-[25px] w-full items-center flex-grow-0'}>
                <span className={'font-bold text-white uppercase'}>{config.siteName}</span>
                <div className={'text-white'}>
                    &copy; 2021-{new Date().getFullYear()}
                </div>
            </footer>
            <div className={'w-full py-[15px] gap-2 px-[15px] bg-[#000] flex text-white'}>
                <span>
                    Разработка и поддержка:
                </span>
                <a className={'font-bold flex gap-[2px]'} href={'https://sadchikoff.vercel.app/'}>sadchikov <pattern className={'text-red-500'}>dev</pattern>.</a>
            </div>
        </div>
    );
};

export default Footer;