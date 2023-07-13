import React from 'react';
import config from "@/core/config";
import Link from "next/link";
import {BsTelephone} from 'react-icons/bs'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header
            className={'flex justify-between px-[15px] h-[70px] absolute w-full mobile:bg-image items-center flex-grow-0'}>
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
            <button className={'movile:block desktop:hidden'} onClick={handleClick}>
                <AiOutlineMenu className={'text-2xl'}/>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    config.navLinks.map(link => {
                        return (
                            <div>
                                <MenuItem onClick={handleClose}>
                                    <Link className={'hover:text-slate-700 delay-150'} href={link.url}>{link.label}</Link>
                                </MenuItem>
                            </div>
                        )
                    })
                }
                <div className={'px-4 flex flex-col gap-2 mt-5'}>
                    <Link href={"tel:+79202446677"} className={'flex items-center gap-[15px] text-[12px]'}>
                        <BsTelephone className={'text-[14px]'}/>
                        <span className={'font-medium'}>
                        +7 (920) 244 66 77
                    </span>
                    </Link>
                    <Link href={"mailto:sevan.karapetyan.1987@mail.ru"}
                          className={'flex items-center gap-[15px] text-[12px]'}>
                        <MdOutlineMailOutline className={'text-[14px]'}/>
                        <span className={'text-opacity-70 text-black font-semibold'}>
                        sevan.karapetyan.1987@mail.ru
                    </span>
                    </Link>
                </div>
            </Menu>
            <div className={'desktop:block mobile:hidden tablet:hidden'}>
                <Link href={"tel:+79202446677"} className={'flex items-center gap-[15px] text-[12px]'}>
                    <BsTelephone className={'text-[14px]'}/>
                    <span className={'font-medium'}>
                        +7 (920) 244 66 77
                    </span>
                </Link>
                <Link href={"mailto:sevan.karapetyan.1987@mail.ru"}
                      className={'flex items-center gap-[15px] text-[12px]'}>
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