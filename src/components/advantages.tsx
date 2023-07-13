import React from 'react';
import Image from "next/image";

const Advantages = () => {
    return (
        <div
            id={"advantages"}
            className={'w-full desktop:h-screen mobile:h-[2000px] mobile:px-[15px] desktop:px-[130px] mobile:py-[30px] desktop:py-[80px] gap-2 desktop:grid desktop:grid-cols-3 tablet:grid-cols-2 tablet:grid-rows-3 tablet:h-max desktop:grid-rows-2 mobile:grid mobile:grid-rows-6 mobile:grid-cols-1'}>
            <div className={'p-5'}>
                <span className="text-center text-black text-opacity-40 text-[15px] font-normal">advantages</span>
                <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                    className="text-black text-[35px] font-semibold">Почему <br/> стоит заказать у нас</span></div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'/assets/step_1.png'}
                    loading={"lazy"}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-5 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Скорость работ и высыхания</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Ходить по стяжке можно через сутки.
Плитку можно укладывать через двое суток.
Ламинат, паркет после полной просушки стяжки - примерно через 28 дней</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'/assets/step_2.png'}
                    loading={"lazy"}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-5 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Отсутствие влажных процессов</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Благодаря этому, полусухая стяжка значительно сокращает время высыхания и готовности поверхности к дальнейшим работам. Более того, минимизация влажных процессов способствует уменьшению вероятности появления трещин и других повреждений на полу</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'/assets/step_3.png'}
                    loading={"lazy"}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-5 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Не требуется финишное выравнивание</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Это значит, что можно сэкономить не только время и усилия, но и деньги на этапе последней отделки. Теперь процесс укладки нового покрытия станет еще более простым и быстрым. Избавьтесь от лишних хлопот и сделайте свой дом еще более уютным!</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'/assets/step_4.png'}
                    loading={"lazy"}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-5 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Стоимость ниже аналогов</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">
Зачем переплачивать, если можно получить качественный результат по более доступной цене?<br/>
Если вы задумываетесь об обновлении своего пола — рассмотрите этот вариант!</span>
                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'/assets/step_5.png'}
                    loading={"lazy"}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-5 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Экологически чистая</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Основным преимуществом этого материала является его экологическая чистота. Он не содержит вредных химических добавок и увлажняющих компонентов</span>
                </div>
            </div>
        </div>
    );
};

export default Advantages;