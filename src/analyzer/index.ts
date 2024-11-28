import * as kuromoji from "kuromoji";
import * as path from "path";

const cache = new Map<string, kuromoji.Tokenizer<kuromoji.IpadicFeatures>>();
function getTokenizerPromise(dicPath: string): Promise<kuromoji.Tokenizer<kuromoji.IpadicFeatures>> {
  return new Promise((resolve,reject) => {
    const cacheItem = cache.get(dicPath);
    if(cacheItem) {
      resolve(cacheItem);
    }

    kuromoji
    .builder({
      dicPath,
    })
    .build((err, tokenizer) => {
      if(err) {
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
  public static async analyze(sentence: string) : Promise<SimpleToken[]> {
    return getTokenizerPromise(path.join(__dirname, "../../dict/"))
    .then(tokenizer =>
      tokenizer
      .tokenize(sentence)
      .map((wo: {surface_form: string; pos: string;}) => ({
        surface: wo.surface_form,
        pos: wo.pos
      }))
    );
  }
};

export default Analyzer;
