import Image from 'next/image'
import {Inter} from 'next/font/google'
import Layout from "@/components/layout";
import check from '../../public/assets/check.svg'
import camera from '../../public/assets/camera.svg'
import hammer from '../../public/assets/hammer.svg'
import chat from '../../public/assets/chat.svg'
import Link from "next/link";
import Services from "@/components/services";
import OurWorks from "@/components/ourWorks";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Layout>
            <div className={'w-full h-full flex flex-col'}>
                <div
                    id={'section-0'}
                    className="bg-image w-full h-full -z-10 pt-[100px] px-[15px] flex flex-col justify-between desktop:gap-20 mobile:gap-20 tablet:gap-20">
                    <div className={'flex flex-col w-full justify-center items-center'}>
                        <span className={'uppercase font-bold text-[30px]'}>Полусухая стяжка</span>
                        <span
                            className="text-black text-opacity-60 text-[25px] font-normal uppercase desktop:w-[730px] mobile:w-full tablet:w-full text-center">Квалифицированная строительная бригада выполнит полусухую стяжку пола в Липецке и Липецкой области</span>
                        <span className="mt-[40px] desktop:w-[700px] text-center text-black text-opacity-50 text-base font-normal mobile:w-full tablet:w-full">Сделаем ровную стяжку за 8 часов Сделаем ровную стяжку за 8 часов без трещин и неровностей,
                      благодаря уплотнению смеси затирочной машиной.
                      Это позволяет избежать пустот в стяжке.
                      Полусухая стяжка качественнее традиционной.
                      Является идеальным основанием под плитку, паркет, линолеум, ламинат, полимер, пробку.
                  </span>
                    </div>
                    <div
                        className={'desktop:w-full m-auto px-[50px] py-[45px] mobile:w-full bg-white desktop:gap-0 mobile:gap-16 shadow-2xl mb-[150px] rounded-2xl flex items-start justify-between desktop:flex-row mobile:flex-col'}>
                        <div className={'flex flex-col gap-[17px]'}>
                            <div className={'bg-lime-600 w-max bg-opacity-20 p-[16px] rounded-[16px]'}>
                                <Image src={check} alt={"item icon"}/>
                            </div>
                            <span>
                              <b>Оплата по факту</b>
                              <br/>
                              <article
                                  className={'text-black text-opacity-60 font-semibold'}>выполненной работы</article>
                          </span>
                        </div>
                        <div className={'flex flex-col gap-[17px]'}>
                            <div className={'bg-slate-500 bg-opacity-10 w-max p-[16px] rounded-[16px]'}>
                                <Image src={camera} alt={"item icon"}/>
                            </div>
                            <span>
                              <b>Предоставляем фотоотчет</b>
                              <br/>
                              <article className={'text-black text-opacity-60 font-semibold'}>каждый день о выполненных
работах</article>
                          </span>
                        </div>
                        <div className={'flex flex-col gap-[17px]'}>
                            <div className={'bg-amber-500 bg-opacity-10 w-max p-[16px] rounded-[16px]'}>
                                <Image src={hammer} alt={"item icon"}/>
                            </div>
                            <span>
                              <b>Уже реализовано</b>
                              <br/>
                              <article className={'text-black text-opacity-60 font-semibold'}>более 250 проектов</article>
                          </span>
                        </div>
                        <div className={'flex flex-col gap-[17px]'}>
                            <div className={'bg-sky-400 bg-opacity-10 w-max p-[16px] rounded-[16px]'}>
                                <Image src={chat} alt={"item icon"}/>
                            </div>
                            <span>
                              <b>Прямой контакт</b>
                              <br/>
                              <article className={'text-black text-opacity-60 font-semibold'}>с руководством на каждом
этапе работ</article>
                          </span>
                        </div>
                    </div>
                </div>
                <OurWorks/>
                <Services/>
            </div>
        </Layout>
    )
}
