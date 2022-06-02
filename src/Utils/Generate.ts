class Generate {
    public static generateBetweenTwoSides(sideOne: string, sideTwo:string): string {
        const option = Math.round(Math.random());

        return option === 0 ? sideOne : sideTwo;
    }

    public static generateARandomNumberBasedOnLength(length: number): number {
        return Math.round(Math.random() * (length));
    }
}

export default Generate;
