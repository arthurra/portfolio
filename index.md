---
layout: service
tags:
  - UI/UX
  - Web Development
title: Digital Product Design
description: Over the past ten years, I've helped to combine my clients' vision of the future with the perspectives of their users to create  stunning, tailored experiences that are accessible to everyone on the web
illustration: cube
services-tagline: I make growing your product easy at every stage
---

<article>
  <!-- Hero Header -->
  {% include service/hero-header.liquid %}

  <!-- Services -->
  <section class="section section--accent">
    <div class="container">
      <h2>Services</h2>
      <p class="u-mb-600">{{ page.services-tagline }}</p>
      <div class="grid grid--gap-200">
        {% for service in site.data.services %}
          {% include service-card.liquid %}
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section class="section">
    <div class="container">
      {% include case-studies/table-of-contents.liquid %}
      {% include case-studies/case-study-card-grid.liquid %}
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="card cta-card">
        <header class="card__header grid">
          <div>

            <h3>
              Ready to <br>
              <span class="cta-card__accent-text">level up</span>
              <br>
              your product or idea?
            </h3>
          </div>
          <div>
            {% include cta-button.liquid %}

          </div>
        </header>
        <div class="card__body"></div>
      </div>
    </div>

  </section>
</article>
