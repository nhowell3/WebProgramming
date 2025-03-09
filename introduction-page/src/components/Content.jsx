import AppColors from "../constants/AppColors";

export default function Content({children, className = "", transparent = true}){
    return (
        <>
            <div 
                className={"w-full px-8 py-16 " + className}
                style={{background: transparent ? 'transparent' : AppColors.ContentBg}}
            >
                {children}
            </div>
        </>
    );
}