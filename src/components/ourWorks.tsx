import React from 'react';

const OurWorks = () => {
    return (
        <div id={'our-works'} className={'w-full h-full flex flex-col gap-10'}>
            <div className={'flex justify-center items-center flex-col'}>
                <h1 className="text-black text-3xl font-medium">Выполнение работ</h1>
                <span className="text-black text-opacity-50 text-xl font-medium">нашей компанией</span>
            </div>
            <div className={'p-[15px] flex items-center flex-wrap gap-10 justify-center'}>
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