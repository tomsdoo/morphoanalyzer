# @tomsd/morphoanalyzer

It is a morphological analyzer for Japanese with kuromoji.

![npm](https://img.shields.io/npm/v/@tomsd/morphoanalyzer)
![NPM](https://img.shields.io/npm/l/@tomsd/morphoanalyzer)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@tomsd/morphoanalyzer)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@tomsd/morphoanalyzer)
![Maintenance](https://img.shields.io/maintenance/yes/2023)

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
