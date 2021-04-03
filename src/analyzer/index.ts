import * as kuromoji from "kuromoji";
import * as path from "path";

function getTokenizerPromise(){
  return new Promise((resolve,reject) => {
    kuromoji
    .builder({
      dicPath: path.join(__dirname, "../../node_modules/kuromoji/dict/")
    })
    .build((err, tokenizer) => {
      if(err){reject(err);}else{resolve(tokenizer);}
    });
  });
}

class TokenizerManager {
  private _tokenizer: any;
  constructor(){
    this._tokenizer = null;
  }
  public async getTokenizer() {
    if(this._tokenizer){return this._tokenizer;}
    this._tokenizer = await getTokenizerPromise();
    return this._tokenizer;
  }
  public static activate() {
    return new TokenizerManager();
  }
};

const manager = TokenizerManager.activate();

type SimpleToken = {
  surface: string;
  pos: string;
};

export class Analyzer {
  public static async analyze(sentence: string) : Promise<SimpleToken[]> {
    return manager.getTokenizer()
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
