---
layout: shared
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
              {{ content }}
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
