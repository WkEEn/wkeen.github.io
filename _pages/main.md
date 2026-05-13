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

<!-- 要新增新闻，请编辑 _data/news.yml 文件，格式如下：
- date: "MM/YYYY"
  title: "论文标题"
  venue: "会议/期刊名称"
  link: "链接"
  note: "备注（可选）"
  emoji: "😊"
-->

<!-- markdownlint-enable MD033 -->
## Education

<!-- markdownlint-disable MD033 -->

<div class="edu-list">
  <div class="edu-item">
    <div class="edu-item__meta">2021–Present</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>Ph.D.</strong> in Pattern Recognition and Intelligent Systems</div>
      <div class="edu-item__sub">Beihang University · Beijing, China</div>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-item__meta">2017–2021</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>B.Eng.</strong> in Software Engineering</div>
      <div class="edu-item__sub">Hefei University of Technology · Anhui, China</div>
    </div>
  </div>
  <!-- 复制下面这一段即可新增一条教育经历
  <div class="edu-item">
    <div class="edu-item__meta">2018–2021</div>
    <div class="edu-item__main">
      <div class="edu-item__title"><strong>M.S.</strong> in XXX</div>
      <div class="edu-item__sub">University · City, Country</div>
    </div>
  </div>
  -->
</div>

## Visitors

<!-- markdownlint-disable MD033 -->

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIINfQnVx2d7vMThqPwLFIuQmRGh3Y2H0Wk="
  crossorigin=""
>

<div class="visitor-panel">
  <div class="visitor-panel__header">
    <div>
      <h3>Visitor Analytics</h3>
      <p>Live visit count and approximate geographic origin for this homepage.</p>
    </div>
  </div>

  <div class="visitor-panel__grid">
    <div class="visitor-card visitor-card--count">
      <span class="visitor-card__label">Total Page Views</span>
      <span class="visitor-card__value visitor-card__value--badge">
        <img
          src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwkeen.github.io&count_bg=%23007ACC&title_bg=%23555A64&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false"
          alt="Total visits counter"
          loading="lazy"
        >
      </span>
      <span class="visitor-card__note">Counted through a public visit counter.</span>
    </div>

    <div class="visitor-card">
      <span class="visitor-card__label">Current Visitor Location</span>
      <span id="visitor-location-text" class="visitor-card__value visitor-card__value--text">Detecting</span>
      <span id="visitor-ip-note" class="visitor-card__note">Approximate city-level location.</span>
    </div>
  </div>

  <div class="visitor-map-shell">
    <div id="visitor-map" class="visitor-map" role="img" aria-label="Visitor geographic map">
      <div class="visitor-map__fallback">Loading visitor map...</div>
    </div>
  </div>

  <p class="visitor-panel__privacy">
    Location is resolved in the browser from public IP metadata and is approximate. No personal visitor data is stored by this site.
  </p>
</div>

<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
  defer
></script>
<script src="/assets/js/visitor-stats.js" defer></script>

{% comment %}
<div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px;">
  <h3 style="margin-top: 0; color: #2c3e50; font-size: 20px;">🌍 Visitor Analytics</h3>
  
  <!-- Visitor Counter Section -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
    <!-- Left: Counter -->
    <div style="background: white; padding: 15px; border-radius: 8px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #666; margin-bottom: 10px;">Total Visitors</div>
      <script async src="https://api.countapi.xyz/hit/wkeen.github.io/visits?callback=pageVisits"></script>
      <script>
        function pageVisits(data) {
          document.getElementById('visit-count').innerText = data.value.toLocaleString();
        }
      </script>
      <div id="visit-count" style="font-size: 32px; font-weight: bold; color: #007acc;">---</div>
      <div style="font-size: 11px; color: #999; margin-top: 8px;">Since tracking start</div>
    </div>
    
    <!-- Right: Quick Stats -->
    <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #666; margin-bottom: 8px;"><strong>📊 Page Statistics</strong></div>
      <ul style="margin: 8px 0; padding-left: 20px; font-size: 13px; color: #555;">
        <li>Research Focus: Digital Pathology</li>
        <li>Publications: 9+ papers</li>
        <li>Open Source Projects: Active</li>
      </ul>
    </div>
  </div>

  <!-- Geographic Distribution Info -->
  <div style="background: white; padding: 16px; border-radius: 8px; margin-bottom: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 600; color: #2c3e50;">
      🗺️ Visitor Origins
    </p>
    <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.6;">
      This academic website attracts visitors from research institutions and academic communities worldwide. 
      Primary audiences include researchers in medical image analysis, computer vision, and digital pathology.
    </p>
  </div>

  <!-- Analytics Information -->
  <div style="background: white; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #2c3e50;">
      📈 Analytics & Privacy
    </p>
    <p style="margin: 0; font-size: 12px; color: #666; line-height: 1.6;">
      Basic visitor analytics are tracked to understand audience interests and improve content quality. 
      No personally identifiable information is collected. This site respects user privacy and complies with standard web accessibility guidelines. 
      For inquiries about research, please <a href="mailto:kunwu@buaa.edu.cn" style="color: #007acc; text-decoration: none;">contact me directly</a>.
    </p>
  </div>
  
  <!-- Call to Action -->
  <div style="margin-top: 15px; padding: 12px; background: #e3f2fd; border-left: 4px solid #007acc; border-radius: 4px;">
    <p style="margin: 0; font-size: 12px; color: #1565c0;">
      <strong>Interested in my research?</strong> Explore my <a href="/publications/" style="color: #0066cc; text-decoration: none;">publications</a>, 
      <a href="/projects/" style="color: #0066cc; text-decoration: none;">projects</a>, or 
      <a href="https://scholar.google.com/citations?user=uV-rInsAAAAJ" style="color: #0066cc; text-decoration: none;">Google Scholar profile</a>.
    </p>
  </div>
</div>
{% endcomment %}

<!-- markdownlint-enable MD033 -->
