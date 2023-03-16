---
layout: default
---

<h1>{{ page.title }}</h1>
<p>{{ page.description }}</p>

<h4>Services</h4>
<ul>
  {% for service in page.services %}
    <li>{{ service }}</li>
  {% endfor %}
</ul>

{{ content }}
