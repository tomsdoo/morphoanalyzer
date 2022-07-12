import { Analyzer } from "../src/analyzer/";
import { strict as assert } from "assert";
import { describe, it } from "mocha";

const sentence = "これは、テストです。";
const expectedResults = [
  { surface: 'これ', pos: '名詞' },
  { surface: 'は', pos: '助詞' },
  { surface: '、', pos: '記号' },
  { surface: 'テスト', pos: '名詞' },
  { surface: 'です', pos: '助動詞' },
  { surface: '。', pos: '記号' }
];

describe("Analyzer", () => {
  it("analyze()", async () => {
    const results = await Analyzer.analyze(sentence);
    assert(
      results.length == expectedResults.length &&
      expectedResults
        .every(
          ({ surface, pos }, index) =>
            index in results &&
            results[index].surface == surface &&
            results[index].pos == pos
        )
    );
  });
});
