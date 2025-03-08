export default function Header({children, className = ''}){
    return (
        <>
            <h1 className={'text-4xl text-white ' + className}>{children}</h1>
        </>
    );
}