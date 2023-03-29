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
            {% include illustrations/cube.liquid %}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
