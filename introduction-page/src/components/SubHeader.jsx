import Text from "./Text";

export default function SubHeader({children, className = ""}){
    return (
        <>
            <Text className={"text-4xl " + className}>{children}</Text>
        </>
    );
}