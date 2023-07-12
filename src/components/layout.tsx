import React from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopBanner from "@/components/topBanner";


interface ILayout {
    children: React.ReactNode
}
const Layout = ({children}: ILayout) => {
    return (
        <div className={'w-full h-full flex active flex-col'}>
            <Header/>
            <main className={'flex flex-1'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;