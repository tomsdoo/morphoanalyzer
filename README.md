# @tomsd/morphoanalyzer

## Installation
``` sh
npm install @tomsd/morphoanalyzer
```

# Usage

``` typescript
import { Analyzer } from "@tomsd/morphoanalyzer";

Analyzer.analyze("これは、テストです。")
  .then(console.log);

/*
[
  { surface: 'これ', pos: '名詞' },
  { surface: 'は', pos: '助詞' },
  { surface: '、', pos: '記号' },
  { surface: 'テスト', pos: '名詞' },
  { surface: 'です', pos: '助動詞' },
  { surface: '。', pos: '記号' }
]
*/

```
