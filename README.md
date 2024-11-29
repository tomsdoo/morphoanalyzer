# @tomsd/morphoanalyzer

It is a morphological analyzer for Japanese with kuromoji.

![npm](https://img.shields.io/npm/v/@tomsd/morphoanalyzer?style=for-the-badge&logo=npm)
![NPM](https://img.shields.io/npm/l/@tomsd/morphoanalyzer?style=for-the-badge&logo=npm)
![release date](https://img.shields.io/github/release-date/tomsdoo/morphoanalyzer?style=for-the-badge&logo=npm)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@tomsd/morphoanalyzer?style=for-the-badge&logo=npm)

![ci](https://img.shields.io/github/actions/workflow/status/tomsdoo/morphoanalyzer/ci.yml?style=social&logo=github)
![checks](https://img.shields.io/github/check-runs/tomsdoo/morphoanalyzer/main?style=social&logo=github)
![top language](https://img.shields.io/github/languages/top/tomsdoo/morphoanalyzer?style=social&logo=typescript)
![Maintenance](https://img.shields.io/maintenance/yes/2024?style=social&logo=github)
![depends on node greater or equal 18](https://img.shields.io/badge/node.js-%3E%3D%2018-lightyellow?style=social&logo=nodedotjs)


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

// and you can feel free to pass your dict directory, too
Analyzer
  .analyze(
    "これは、テストです。",
    "path/to/dict"
  )
  .then(console.log);

```
