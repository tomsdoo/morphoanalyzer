declare type SimpleToken = {
    surface: string;
    pos: string;
};
export declare class Analyzer {
    static analyze(sentence: string): Promise<SimpleToken[]>;
}
export default Analyzer;
