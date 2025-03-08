export default function Page({children}){
    return (
        <>
            <div className='flex flex-col text-center bg-gradient-to-b from-gray-800 to-gray-900 h-screen w-screen p-8'>
                {children}
            </div>
        </>
    );
}