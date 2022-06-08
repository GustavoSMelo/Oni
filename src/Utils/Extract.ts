class Extract {
    public static contentToString (messageContent: string) {
        const content = messageContent.split(' ');

        return content[1];
    }
}

export default Extract;
