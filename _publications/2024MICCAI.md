---
title: "Lifelong histopathology whole slide image retrieval via distance consistency rehearsal"
collection: publications
category: conferences
# permalink: /publication/2009-10-01-paper-title-number-1
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2024/10/7
venue: 'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)'
venue_abbr: 'MICCAI 2024'
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-72083-3_26'
# 如果你有可直接下载的 PDF（本仓库 files/ 下或外链），建议单独填 pdfurl，让“PDF”按钮直达文件：
# pdfurl: '/files/paper1.pdf'
bibtexurl: 'https://wkeen.github.io/files/2024MICCAI.bib'
citation: 'Xinyu Zhu, Zhiguo Jiang, **Kun Wu**, Jun Shi, Yushan Zheng'
header:
  # 放一张论文缩略图到 /images/ 下，然后填文件名即可（也支持直接填完整 URL）
  teaser: "2024MICCAI.png"
# 代码仓库（可选）
codeurl: 'https://github.com/OliverZXY/LWSR'
# 摘要（可选；支持 Markdown）
abstract: >
  Content-based histopathological image retrieval (CBHIR) has gained attention in recent years, offering the capability to return histopathology images that are content-wise similar to the query one from an established database. However, in clinical practice, the continuously expanding size of WSI databases limits the practical application of the current CBHIR methods. In this paper, we propose a Lifelong Whole Slide Retrieval (LWSR) framework to address the challenges of catastrophic forgetting by progressive model updating on continuously growing retrieval database. Our framework aims to achieve the balance between stability and plasticity during continuous learning. To preserve system plasticity, we utilize local memory bank with reservoir sampling method to save instances, which can comprehensively encompass the feature spaces of both old and new tasks. Furthermore, A distance consistency rehearsal (DCR) module is designed to ensure the retrieval queue’s consistency for previous tasks, which is regarded as stability within a lifelong CBHIR system. We evaluated the proposed method on four public WSI datasets from TCGA projects. The experimental results have demonstrated the proposed method is effective and is superior to the state-of-the-art methods. The code is available at https://github.com/OliverZXY/LWSR.
---

