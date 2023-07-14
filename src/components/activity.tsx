import React, {useState} from 'react';
import config from "@/core/config";
import {Image} from "antd";
import Button from "@mui/material/Button";
import useMobileDetect from "@/core/hooks/mobileDetected";
import Link from "next/link";

const Activity = () => {
    const [showMore, setShowMore] = useState(false)
    const currentDevice = useMobileDetect()
    const showPhotos = currentDevice.isMobile() ? 5 : 9
    const numberOfItems = showMore ? config.photoSet.length : showPhotos
    return (
        <div id={'activity'} className={`w-full mobile:py-[30px] desktop:py-[80px] flex flex-col items-center justify-center`}>
            <div className={`w-full flex flex-col items-center gap-10 justify-center`}>
                <div className={`h-max grid gap-2 desktop:grid-cols-5 desktop:grid-rows-${showMore ? '4' : '2'} mobile:grid-cols-1 tablet:grid-cols-2`}>
                    <div className={'p-5 w-[325px] h-[325px]'}>
                        <span className="text-center text-black text-opacity-40 text-[15px] font-normal">activity</span>
                        <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                            className="text-black text-[35px] font-semibold">Результат,<br/>которым мы гордимся!</span></div>
                    </div>
                    {
                        config.photoSet.slice(0, numberOfItems).map(photo => {
                            return (
                                <Image
                                    width={325}
                                    height={325}
                                    key={photo.id}
                                    src={photo.source}
                                />
                            )
                        })
                    }
                </div>
                <button onClick={() => setShowMore(true)} className={`${showMore ? 'hidden' : 'block'} px-[55px] py-[15px] bg-amber-500 w-max text-white text-xl font-semibold hover:bg-amber-400 transition-all delay-150 active:bg-amber-600 active:transition-none active:delay-0`}>Показать больше</button>
                <Link href={'#activity'} onClick={() => setShowMore(false)} className={`${showMore ? 'block' : 'hidden'} px-[55px] py-[15px] bg-amber-500 w-max text-white text-xl font-semibold hover:bg-amber-400 transition-all delay-150 active:bg-amber-600 active:transition-none active:delay-0`}>Скрыть</Link>
            </div>
        </div>
    );
};

export default Activity;