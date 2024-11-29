import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import { Analyzer, type SimpleToken } from "../../src/analyzer/";

describe("Analyzer", () => {
  let sentence: string;
  let expectedResults: Array<SimpleToken>;
  beforeEach(() => {
    sentence = "これは、テストです。";
    expectedResults = [
      { surface: "これ", pos: "名詞" },
      { surface: "は", pos: "助詞" },
      { surface: "、", pos: "記号" },
      { surface: "テスト", pos: "名詞" },
      { surface: "です", pos: "助動詞" },
      { surface: "。", pos: "記号" },
    ];
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it("analyze()", async () => {
    await expect(Analyzer.analyze(sentence)).resolves.toEqual(expectedResults);
  });
});
