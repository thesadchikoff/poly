import React from 'react';
interface IBanner {
    children: React.JSX.Element
}
const TopBanner = ({children}: IBanner) => {
    return (
        <div className={'w-full h-[50px] bg-red-500 px-[15px] flex items-center justify-between'}>
            {children}
        </div>
    );
};

export default TopBanner;