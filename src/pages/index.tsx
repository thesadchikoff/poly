import {Inter} from 'next/font/google'
import Layout from "@/components/layout";
import Services from "@/components/services";
import OurWorks from "@/components/ourWorks";
import Head from "next/head";
import Advantages from "@/components/advantages";
import Works from "@/components/works";
import 'react-phone-number-input/style.css'
import React, {useState} from "react";
import Activity from "@/components/activity";
// @ts-ignore
import InputMask from 'react-input-mask';
import Contacts from "@/components/contacts";


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
                <Activity/>
                <Contacts/>
            </div>
        </Layout>
    );
}
