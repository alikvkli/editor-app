export const capitalizeFirstLetter = (text: string | undefined): string => {
    if(!text){
        return "";
    }
    const splitText = text.split(" ")
    return `${splitText?.[0].charAt(0).toUpperCase()}${splitText[0].slice(1)} ${splitText?.[1].charAt(0).toUpperCase()}${splitText[1].slice(1)}`;
}

export const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>, callback: any) => {
    if (event.key === "Enter") {
       event.preventDefault();
        callback(event);
    }
};

export const convertReadableDate = (timestamp:number) : string => {
    return `${new Date(timestamp).toLocaleDateString("tr-TR")} ${new Date(timestamp).toLocaleTimeString("tr-TR")}`;
}