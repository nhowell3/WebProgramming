export default function FlexItem({children, className}){
    return (
        <>
            <div className={'md:w-[50%] ' + className}>
                {children}
            </div>
        </>
    );
}