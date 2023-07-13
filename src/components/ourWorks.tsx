import React from 'react';

const OurWorks = () => {
    return (
        <div id={'our-works'} className={'w-full h-full flex flex-col gap-10'}>
            <div className={'flex justify-center items-start flex-col mobile:px-[15px] desktop:px-[130px] tablet:px-[15px]'}>
                <span className="text-center text-black text-opacity-60 text-[15px] font-normal">accomplishment</span>
                    <div><span className="text-amber-500 text-[35px] font-black">/</span><span
                        className="text-[35px] font-semibold text-black">Выполнение работ</span></div>
            </div>
            <div className={'p-[15px] mobile:grid mobile:grid-cols-1 tablet:grid tablet:grid-cols-2 desktop:flex desktop:items-center desktop:flex-wrap gap-10 desktop:justify-center'}>
                <video controls poster={'https://myneuralnetworks.ru/static/generate/1689162487.7041948KGb4luBtig2n3qpsFYlfmTAswzEIPUvvTdiqGtX1ec.png'} className={'w-[500px] object-cover h-[500px] rounded-2xl'}>
                    <source src={"/assets/videos/present.mp4"} type={"video/mp4"}/>
                </video>
                <video controls poster={'https://myneuralnetworks.ru/static/generate/1689162455.328849KQxI4hzS45QAVrsG1osePWF6U5XhkeP4nhszLwfWlRs.png'} className={'w-[500px] object-cover h-[500px] rounded-2xl'}>
                    <source src={"/assets/videos/present.mp4"} type={"video/mp4"}/>
                </video>
                <video controls poster={'https://myneuralnetworks.ru/static/generate/1689162432.638474ZabXgv4kESrqAi3eYgtX2llJhWAa_OaG7TqpSWNnPr8.png'} className={'w-[500px] object-cover h-[500px] rounded-2xl'}>
                    <source src={"/assets/videos/present3.mp4"} type={"video/mp4"}/>
                </video>
                <video controls poster={'https://myneuralnetworks.ru/static/generate/1689162391.4488904YC6eWSUI2uQVRtV88gugn7qxQcMtqak1YSTFSTmJ38.png'} className={'w-[500px] object-cover h-[500px] rounded-2xl'}>
                    <source src={"/assets/videos/present4.mp4"} type={"video/mp4"}/>
                </video>
                <video controls poster={'https://myneuralnetworks.ru/static/generate/1689162355.9315138157RleXMwUml56l5DJhau2YCxEXdRqmcj4EsZC2WMvY.png'} className={'w-[500px] object-cover h-[500px] rounded-2xl'}>
                    <source src={"/assets/videos/present5.mp4"} type={"video/mp4"} />
                </video>
            </div>
        </div>
    );
};

export default OurWorks;