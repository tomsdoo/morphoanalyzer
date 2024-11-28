import * as kuromoji from "kuromoji";
import * as path from "path";

const cache = new Map<string, kuromoji.Tokenizer<kuromoji.IpadicFeatures>>();
function getTokenizerPromise(
  dicPath: string,
): Promise<kuromoji.Tokenizer<kuromoji.IpadicFeatures>> {
  return new Promise((resolve, reject) => {
    const cacheItem = cache.get(dicPath);
    if (cacheItem) {
      resolve(cacheItem);
    }

    kuromoji
      .builder({
        dicPath,
      })
      .build((err, tokenizer) => {
        if (err) {
          reject(err);
        } else {
          cache.set(dicPath, tokenizer);
          resolve(tokenizer);
        }
      });
  });
}

export type SimpleToken = {
  surface: string;
  pos: string;
};

export class Analyzer {
  protected dicPath: string;
  constructor(dicPath: string) {
    this.dicPath = dicPath;
  }

  public async tokenize(sentence: string): Promise<SimpleToken[]> {
    return getTokenizerPromise(this.dicPath).then((tokenizer) =>
      tokenizer
        .tokenize(sentence)
        .map((wo: { surface_form: string; pos: string }) => ({
          surface: wo.surface_form,
          pos: wo.pos,
        })),
    );
  }

  public static create(dicPath?: string) {
    return new Analyzer(dicPath ?? path.join(__dirname, "../../dict/"));
  }

  public static async analyze(
    sentence: string,
    dicPath?: string,
  ): Promise<SimpleToken[]> {
    return await Analyzer.create(dicPath).tokenize(sentence);
  }
}

export default Analyzer;
