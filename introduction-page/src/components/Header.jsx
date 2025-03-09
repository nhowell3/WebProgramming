import AppColors from "../constants/AppColors";

export default function Header({children, className = ''}){
    return (
        <>
            <h1 
                className={'text-5xl text-white md:text-6xl' + className}
                style={{color: AppColors.HeaderColor}}
            >{children}</h1>
        </>
    );
}