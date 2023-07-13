import React from 'react';
import Image from "next/image";

const Advantages = () => {
    return (
        <div
            className={'w-full desktop:h-screen mobile:h-max mobile:px-[15px] desktop:px-[130px] mobile:py-[30px] desktop:py-[80px] gap-2 desktop:grid desktop:grid-cols-3 desktop:grid-rows-2 mobile:grid mobile:grid-rows-6 mobile:grid-cols-1'}>
            <div className={'p-5'}>
                <span className="text-center text-black text-opacity-40 text-[15px] font-normal">advantages</span>
                <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                    className="text-black text-[35px] font-semibold">Почему <br/> стоит заказать у нас</span></div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'https://myneuralnetworks.ru/static/generate/1689172524.5586162ThdQ1ootSWAyJLbf7HhwDBfMNLUHLqB1yIX0IsVjlAo.png'}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-16 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Скорость работ и высыхания</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Ходить по стяжке можно через сутки.
Плитку можно укладывать через двое суток.
Ламинат, паркет после полной просушки стяжки - примерно через 28 дней</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'https://myneuralnetworks.ru/static/generate/1689173425.70898724qyEtJxn5Tbe9E9oBqwIFNOXc8ZKTn78x1svpbvUJ8.png'}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-16 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Отсутствие влажных процессов</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Благодаря этому, полусухая стяжка значительно сокращает время высыхания и готовности поверхности к дальнейшим работам. Более того, минимизация влажных процессов способствует уменьшению вероятности появления трещин и других повреждений на полу</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'https://myneuralnetworks.ru/static/generate/1689173625.4041846a6V07yFR6nPeuhukyi78JRJYf2qK14_64XNpDb8pyVs.png'}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-16 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Не требуется финишное выравнивание</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Это значит, что можно сэкономить не только время и усилия, но и деньги на этапе последней отделки. Теперь процесс укладки нового покрытия станет еще более простым и быстрым. Избавьтесь от лишних хлопот и сделайте свой дом еще более уютным!</span>

                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'https://myneuralnetworks.ru/static/generate/1689173899.2042341B_6kC7i1I8IzeVQ3vwlDqr9s0wbVqbDlC6rZqJMDg.png'}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-16 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Стоимость ниже аналогов</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">
Зачем переплачивать, если можно получить качественный результат по более доступной цене?<br/>
Если вы задумываетесь об обновлении своего пола — рассмотрите этот вариант!</span>
                </div>
            </div>
            <div className={'relative img__wrap'}>
                <Image
                    src={'https://myneuralnetworks.ru/static/generate/1689173685.583629lTjYo9EsG8kiqGMxVerfeMtUSV_Wa1JgYslygSjLTxw.png'}
                    fill alt={'#'}/>
                <div
                    className={'img__description p-5 absolute top-0 left-0 bottom-0 right-0 bg-white flex flex-col desktop:gap-16 mobile:gap-2'}>
                    <h1 className={'text-slate-800 font-medium text-xl'}>Экологически чистая</h1>
                    <hr/>
                    <span className="text-black text-opacity-40 text-[15px] font-medium">Основным преимуществом этого материала является его экологическая чистота. Он не содержит вредных химических добавок и увлажняющих компонентов</span>
                </div>
            </div>
        </div>
    );
};

export default Advantages;