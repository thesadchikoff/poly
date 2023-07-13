import {Inter} from 'next/font/google'
import Layout from "@/components/layout";
import Services from "@/components/services";
import OurWorks from "@/components/ourWorks";
import Head from "next/head";
import Advantages from "@/components/advantages";
import Works from "@/components/works";
import { Image } from 'antd';
import config from "@/core/config";
import React from "react";
const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <Layout>
            <Head>
                <title>
                    Полусухая стяжка пола
                </title>
            </Head>
            <div className={'w-full h-max flex flex-col'}>
                <Works/>
                <OurWorks/>
                <Services/>
                <Advantages/>
                <div className={'w-full mobile:py-[30px] desktop:py-[80px] flex flex-col items-center justify-center'}>
                    <div className={'w-full flex items-center justify-center'}>
                        <div className={'h-max grid gap-2 desktop:grid-cols-5 desktop:grid-rows-4 mobile:grid-cols-1'}>
                            <div className={'p-5 w-[325px] h-[325px]'}>
                                <span className="text-center text-black text-opacity-40 text-[15px] font-normal">activity</span>
                                <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                                    className="text-black text-[35px] font-semibold">Результат,<br/>которым мы гордимся!</span></div>
                            </div>
                            {
                                config.photoSet.map(photo => {
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
                    </div>
                </div>
            </div>
        </Layout>
    );
}
