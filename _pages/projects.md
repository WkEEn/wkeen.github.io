---
layout: archive
title: "Research Projects & Code"
permalink: /projects/
author_profile: true
---

## Research Projects

A collection of my research projects, code repositories, and open-source contributions focused on digital pathology, representation learning, and histopathology image analysis.

<!-- markdownlint-disable MD033 -->

<div style="display: grid; gap: 20px; grid-template-columns: 1fr;">

<!-- MSRL Project -->
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa;">
  <div style="display: flex; align-items: start; gap: 20px;">
    <div style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 5px;">
        <a href="https://github.com/WkEEn/MSRL" style="color: #0066cc; text-decoration: none;">MSRL</a>
      </h3>
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
        <strong>Histopathology-Genomics Multi-modal Structural Representation Learning</strong>
      </p>
      <p style="margin: 10px 0; font-size: 14px; line-height: 1.6;">
        A framework for learning from paired whole-slide images (WSIs) and genomics data with missing-modality inference. Features graph structure learning, multi-modal fusion, and dynamic graph construction during fine-tuning.
      </p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Graph Neural Networks</span>
        <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Multi-modal Learning</span>
        <span style="background: #e8f5e9; color: #388e3c; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Precision Oncology</span>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 12px; font-size: 13px;">
        <a href="https://github.com/WkEEn/MSRL" style="color: #0066cc; text-decoration: none;">📌 GitHub</a>
        <a href="https://openreview.net/forum?id=24QX6XpvSL" style="color: #0066cc; text-decoration: none;">📄 Paper (ICLR 2026)</a>
      </div>
    </div>
  </div>
</div>


<!-- PAMA Project -->
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa;">
  <div style="display: flex; align-items: start; gap: 20px;">
    <div style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 5px;">
        <a href="https://github.com/WkEEn/PAMA" style="color: #0066cc; text-decoration: none;">PAMA</a>
      </h3>
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
        <strong>Position-Aware Masked Autoencoder for WSI Pre-training</strong>
      </p>
      <p style="margin: 10px 0; font-size: 14px; line-height: 1.6;">
        Pan-cancer histopathology WSI pre-training method using position-aware masked autoencoder. Incorporates spatial information for improved representation learning on large-scale histopathology images.
      </p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Masked Autoencoder</span>
        <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Self-Supervised</span>
        <span style="background: #e8f5e9; color: #388e3c; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Pan-Cancer</span>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 12px; font-size: 13px;">
        <a href="https://github.com/WkEEn/PAMA" style="color: #0066cc; text-decoration: none;">📌 GitHub</a>
        <a href="https://doi.org/10.1109/TMI.2024.3513358" style="color: #0066cc; text-decoration: none;">📄 Paper (TMI 2024)</a>
      </div>
    </div>
  </div>
</div>

<!-- WSI Retrieval Project -->
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa;">
  <div style="display: flex; align-items: start; gap: 20px;">
    <div style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 5px;">
        <a href="https://github.com/OliverZXY/LCBHIR" style="color: #0066cc; text-decoration: none;">Lifelong WSI Retrieval</a>
      </h3>
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
        <strong>Continual Learning for Histopathology Image Retrieval</strong>
      </p>
      <p style="margin: 10px 0; font-size: 14px; line-height: 1.6;">
        Framework for lifelong/continual learning in WSI retrieval tasks. Features distance consistency rehearsal and coreset selection to mitigate catastrophic forgetting while learning from new data streams.
      </p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        <span style="background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Continual Learning</span>
        <span style="background: #fce4ec; color: #c2185b; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Content-Based Retrieval</span>
        <span style="background: #f1f8e9; color: #558b2f; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Memory Rehearsal</span>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 12px; font-size: 13px;">
        <a href="https://github.com/WkEEn/LifelongWSIRetrieval" style="color: #0066cc; text-decoration: none;">📌 GitHub</a>
        <a href="https://doi.org/10.1016/j.patcog.2026.113135" style="color: #0066cc; text-decoration: none;">📄 Paper (PR 2026)</a>
        <a href="https://doi.org/10.1007/978-3-031-72083-3_26" style="color: #0066cc; text-decoration: none;">📄 Paper (MICCAI 2024)</a>
      </div>
    </div>
  </div>
</div>

<!-- Feature Extraction Project -->
<div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa;">
  <div style="display: flex; align-items: start; gap: 20px;">
    <div style="flex: 1;">
      <h3 style="margin-top: 0; margin-bottom: 5px;">
        <a href="https://github.com/hudingyi/FGCR" style="color: #0066cc; text-decoration: none;">Digital Pathology Cross-modal Retrieval</a>
      </h3>
      <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">
        <strong>Digital Pathology Vision-Language Cross-modal Retrieval</strong>
      </p>
      <p style="margin: 10px 0; font-size: 14px; line-height: 1.6;">
        Vision-language representation learning combining histopathology images and medical text. Enables fine-grained cross-modal retrieval and improved zero-shot diagnosis capabilities.
      </p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
        <span style="background: #e8eaf6; color: #3f51b5; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Vision-Language</span>
        <span style="background: #e0f2f1; color: #00695c; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Cross-Modal</span>
        <span style="background: #fff3e0; color: #e65100; padding: 4px 8px; border-radius: 3px; font-size: 12px;">Zero-Shot Learning</span>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 12px; font-size: 13px;">
        <a href="https://github.com/hudingyi/FGCR" style="color: #0066cc; text-decoration: none;">📌 GitHub</a>
        <a href="https://doi.org/10.1016/j.media.2024.103163" style="color: #0066cc; text-decoration: none;">📄 Paper (MIA 2024)</a>
      </div>
    </div>
  </div>
</div>

</div>

---


---

## Research Topics

My research focuses on several key areas in digital pathology and multi-modal biomedical data analysis:

- **Representation Learning**: Self-supervised learning methods for gigapixel histopathology images
- **Multi-Modal Fusion**: Integrating whole-slide images with genomics, clinical data, and text
- **Graph Neural Networks**: Structure learning and dynamic graph construction for patient stratification
- **Foundation Models**: Leveraging pre-trained models for histopathology feature extraction
- **Continual Learning**: Lifelong learning systems for evolving medical datasets
- **Precision Oncology**: Applications to cancer diagnosis, prognosis, and treatment prediction

---

## Getting Started

Most projects include detailed README files with installation instructions, usage examples, and citation information. For questions or collaborations, feel free to reach out via [email](mailto:kunwu@buaa.edu.cn).

<!-- markdownlint-enable MD033 -->
