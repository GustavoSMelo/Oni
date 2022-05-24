class UtilsGenerate {
    static generateBetweenTwoSides(sideOne: string, sideTwo:string): string {
        const option = Math.round(Math.random());

        return option === 0 ? sideOne : sideTwo;
    }
}

export default UtilsGenerate;
