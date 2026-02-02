---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in Pattern Recognition and Intelligent Systems, Beihang University, Beijing, China, 2021–Present
* B.Eng. in Software Engineering, Hefei University of Technology, Anhui, China, 2017–2021

Research experience
======
* 2021–Present: PhD Student, REMEX Lab, Beihang University  
  * Research on histopathology image analysis, digital pathology, representation learning, and self-supervised learning for gigapixel WSIs.

Skills
======
* Machine learning & deep learning
* Representation learning & self-supervised learning
* Medical / histopathology image analysis
* Python (PyTorch, NumPy, scientific computing)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

