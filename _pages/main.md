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

<div style="margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #333;">Visitor Statistics</h3>
  
  <p style="margin: 15px 0; font-size: 14px; line-height: 1.8;">
    Thanks for visiting my academic homepage! This website tracks general visitor statistics to understand audience interests and improve content.
  </p>
  
  <div style="margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #007acc; border-radius: 4px;">
    <p style="margin: 0; font-size: 13px; color: #666;">
      <strong>📊 Analytics Setup:</strong> Visitor analytics can be integrated via Google Analytics, GitHub Insights, or other privacy-respecting tracking services.
    </p>
  </div>
  
  <p style="margin: 10px 0; font-size: 12px; color: #999;">
    If you're interested in knowing more about my research, feel free to explore my <a href="/publications/" style="color: #0066cc; text-decoration: none;">publications</a>, 
    <a href="/projects/" style="color: #0066cc; text-decoration: none;">projects</a>, or 
    <a href="mailto:kunwu@buaa.edu.cn" style="color: #0066cc; text-decoration: none;">reach out directly</a>.
  </p>
</div>

<!-- markdownlint-enable MD033 -->
