---
title: "Position-aware masked autoencoder for histopathology wsi representation learning"
collection: publications
category: conferences
# permalink: /publication/2009-10-01-paper-title-number-1
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2023/10/1
venue: 'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)'
venue_abbr: 'MICCAI 2023'
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-43987-2_69'
# 如果你有可直接下载的 PDF（本仓库 files/ 下或外链），建议单独填 pdfurl，让“PDF”按钮直达文件：
# pdfurl: '/files/paper1.pdf'
bibtexurl: 'https://wkeen.github.io/files/2023MICCAI.bib'
citation: '**Kun Wu**, Yushan Zheng, Jun Shi, Fengying Xie, Zhiguo Jiang'
header:
  # 放一张论文缩略图到 /images/ 下，然后填文件名即可（也支持直接填完整 URL）
  teaser: "2023MICCAI.png"
# 代码仓库（可选）
codeurl: 'https://github.com/WkEEn/PAMA'
# 摘要（可选；支持 Markdown）
abstract: >
  Transformer-based multiple instance learning (MIL) framework has been proven advanced for whole slide image (WSI) analysis. However, existing spatial embedding strategies in Transformer can only represent fixed structural information, which are hard to tackle the scale-varying and isotropic characteristics of WSIs. Moreover, the current MIL cannot take advantage of a large number of unlabeled WSIs for training. In this paper, we propose a novel self-supervised whole slide image representation learning framework named position-aware masked autoencoder (PAMA), which can make full use of abundant unlabeled WSIs to improve the discrimination of slide features. Moreover, we propose a position-aware cross-attention (PACA) module with a kernel reorientation (KRO) strategy, which makes PAMA able to maintain spatial integrity and semantic enrichment during the training. We evaluated the proposed method on a public TCGA-Lung dataset with 3,064 WSIs and an in-house Endometrial dataset with 3,654 WSIs, and compared it with 6 state-of-the-art methods. The results of experiments show our PAMA is superior to SOTA MIL methods and SSL methods. The code will be available at https://github.com/WkEEn/PAMA.
---

