import AppColors from "../constants/AppColors";

export default function Text({children, className = ''}){
    return (
        <>
            <p 
                className={'text-2xl  ' + className}
                style={{color: AppColors.TextColor}}
            >
                {children}
            </p>
        </>
    );
}