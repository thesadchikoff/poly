import Image from 'next/image'
import {Inter} from 'next/font/google'
import Layout from "@/components/layout";
import check from '../../public/assets/check.svg'
import camera from '../../public/assets/camera.svg'
import hammer from '../../public/assets/hammer.svg'
import chat from '../../public/assets/chat.svg'
import Services from "@/components/services";
import OurWorks from "@/components/ourWorks";
import Head from "next/head";
import Advantages from "@/components/advantages";
import Works from "@/components/works";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>
                    Полусухая стяжка пола
                </title>
            </Head>
            <div className={'w-full h-full flex flex-col'}>
                <Works/>
                <OurWorks/>
                <Services/>
                <Advantages/>
            </div>
        </Layout>
    )
}
