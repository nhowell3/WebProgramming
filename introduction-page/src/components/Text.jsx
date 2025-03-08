export default function Text({children, className = ''}){
    return (
        <>
            <p className={'text-2xl text-gray-300 mx-auto ' + className}>
                {children}
            </p>
        </>
    );
}