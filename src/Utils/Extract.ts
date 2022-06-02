class Extract {
    public static contentToString (messageContent: string) {
        const content = messageContent.split(' ');
        content.shift();

        return content;
    }
}

export default Extract;
