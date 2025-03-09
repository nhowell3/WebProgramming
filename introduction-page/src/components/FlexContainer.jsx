export default function FlexContainer({children, className}){
    return (
        <>
            <div className={'flex flex-col justify-center md:flex-row md:gap-24 ' + className}>
                {children}
            </div>
        </>
    );
}