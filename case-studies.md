---
layout: service
title: Case Studies
permalink: /case-studies
---

<h1>Case Studies</h1>

<ul>
  {% for case-study in site.case-studies %}
    <li>
      <h2>
        <a href="{{ case-study.url }}">{{ case-study.title }}</a>
      </h2>
      <p>{{ case-study.description }}</p>
    </li>
  {% endfor %}
</ul>
