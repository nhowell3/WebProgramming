import AppColors from "../constants/AppColors";

export default function Page({children}){
    return (
        <>
            <div 
                className='flex flex-col text-center bg-gradient-to-b h-screen w-screen overflow-x-hidden '
                style={{background: AppColors.PageBg}}
            >
                {children}
            </div>
        </>
    );
}