---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

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
  <header>
    <div class="container">
      <div class="card">
        <header class="card__header u-mb-500">
          <div class="tag-container u-mb-100">
            {% for tag in page.tags %}
              <div class="tag">{{ tag }}</div>
            {% endfor %}
          </div>
          <h1>{{ page.title }}</h1>
        </header>
        <div class="card__body">
          <div class="grid">
            <div>
              <p class="u-mb-300">{{ page.description }}</p>
              <a href="#projects" class="button">
                <span class="button__icon button__icon--bounce-down">👇</span>
                See my work
              </a>
            </div>
            <div class="grid">
              {% include illustrations/{{page.illustration}}.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Services -->
  <section class="section section--accent">
    <div class="container">
      <h2>Services</h2>
      <p class="u-mb-600">{{ page.services-tagline }}</p>
      <div class="grid grid--gap-200">
        {% for service in site.data.services %}
          {% include service-card.html %}
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section class="section">
    <div class="container">
      {% include projects/table-of-contents.html %}

      <div class="project-card-container">
        {% for project in site.data.projects %}
          <a
            href=""
            class="project-card project-card--{{project.size}}"
            data-color="{{project.color}}">
            {% if project.size == "small" %}
              <img
                src="assets/images/projects/illustrations/..."
                alt=""
                role="presentation"
                class="project-card__illustration" />
            {% else %}
              <img
                src="assets/images/projects/thumbnails/..."
                alt=""
                role="presentation"
                class="project-card__thumbnail" />
            {% endif %}
            {% if project.size != "small" %}
              {% for tag in project.tags %}
                <span class="tag">{{ tag.name }}</span>
              {% endfor %}
            {% endif %}
            <span class="project-card__title">{{ project.name }}</span>
          </a>
        {% endfor %}
      </div>
    </div>
  </section>
</article>