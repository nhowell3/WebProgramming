export default function LimitWidthDiv({children, width = 1320, className = ''}){
    return (
        <>
            <div 
                className={"m-auto " + className}
                style={{maxWidth: width}}
            >
                {children}
            </div>
        </>
    );
}