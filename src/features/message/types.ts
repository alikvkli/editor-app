export interface InitialStateProps {
    messages: MessageProps[] | undefined;
}

export interface MessageProps {
    id: string;
    text: string;
    sender: {
        username: string;
        photoURL: string;
        id: string;
    };
}