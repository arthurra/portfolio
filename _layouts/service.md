<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }}</title>
  <link rel="stylesheet" href="/assets/css/styles.css">
  {% feed_meta %}
  {% seo %}
  {% if jekyll.environment == "production" %}
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-VDD3KQ1PT2"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-VDD3KQ1PT2");
    </script>

{% endif %}

</head>
<body>
  {% include navigation/navigation.html %}
  {{ content }}
</body>
</html>
