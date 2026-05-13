---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /main/
  - /main.html
---

<!-- markdownlint-disable MD033 -->
<div class="intro-block">
  <p class="intro-block__line">
    Hi there! I'm Kun Wu, a PhD student in Pattern Recognition and Intelligent Systems at Beihang University.
    I joined the <a href="https://remex-lab.github.io/">REMEX lab</a> in 2021, advised by Professor
    <a href="https://remex-lab.github.io/">Zhiguo Jiang</a> and Associate Professor
    <a href="https://zhengyushan.github.io/">Yushan Zheng</a>.
  </p>
  <p class="intro-block__line">
    I have been working on machine learning for digital pathology, with a focus on
    representation learning and self-supervised methods for gigapixel histopathology WSIs.
  </p>
  <ul class="intro-tags">
    <li>Medical image processing</li>
    <li>Histopathology image analysis</li>
    <li>Digital pathology</li>
    <li>Representation learning</li>
    <li>Self-supervised learning</li>
  </ul>
</div>
<!-- markdownlint-enable MD033 -->

## News
<!-- markdownlint-disable MD033 -->

<div class="news-scroll">
  <div class="news-list">
    {% for item in site.data.news %}
    <div class="news-item">
      <div class="news-item__meta">{{ item.date }}</div>
      <div class="news-item__main">
        {% if item.emoji %}<span style="margin-right: 5px;">{{ item.emoji }}</span>{% endif %}
        Our paper <a href="{{ item.link }}">{{ item.title }}</a>
        has been accepted by <strong>{{ item.venue }}</strong>{% if item.note %}.{{ item.note }}{% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- To add news, edit _data/news.yml using this format:
- date: "MM/YYYY"
  title: "Paper title"
  venue: "Conference or journal"
  link: "Paper or announcement URL"
  note: "Optional note"
  emoji: "Optional emoji"
-->

<!-- markdownlint-enable MD033 -->
## Education

<!-- markdownlint-disable MD033 -->

<div class="edu-list">
  <div class="edu-item">
    <div class="edu-item__meta">2021-Present</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>Ph.D.</strong> in Pattern Recognition and Intelligent Systems</div>
      <div class="edu-item__sub">Beihang University - Beijing, China</div>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-item__meta">2017-2021</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>B.Eng.</strong> in Software Engineering</div>
      <div class="edu-item__sub">Hefei University of Technology - Anhui, China</div>
    </div>
  </div>
  <!-- Copy the block below to add another education item.
  <div class="edu-item">
    <div class="edu-item__meta">2018-2021</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>M.S.</strong> in XXX</div>
      <div class="edu-item__sub">University - City, Country</div>
    </div>
  </div>
  -->
</div>

## Visitors

<!-- markdownlint-disable MD033 -->

<div class="visitor-panel">
  <div class="visitor-map-shell" role="img" aria-label="Visitor geographic map" style="width: 360px; max-width: 100%; height: 180px; max-height: 180px; margin: 0; overflow: hidden;">
    <script type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?d=OtZhn6v8VHIO4Fbl7sfodB1fqxu0OE4cmqQD9fI2Hik&cl=ffffff&w=a"></script>
  </div>
  <script>
    (function () {
      var shell = document.currentScript.previousElementSibling;
      if (!shell) return;

      function resizeVisitorMap() {
        var nodes = shell.querySelectorAll("iframe, img, canvas, object, embed, div");
        nodes.forEach(function (node) {
          node.style.maxWidth = "100%";
          node.style.width = "100%";
          node.style.height = "180px";
          node.style.maxHeight = "180px";
          node.style.border = "0";
          node.style.display = "block";
        });
      }

      resizeVisitorMap();
      window.setTimeout(resizeVisitorMap, 300);
      window.setTimeout(resizeVisitorMap, 1200);
    }());
  </script>
</div>

<!-- markdownlint-enable MD033 -->
