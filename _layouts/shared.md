<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }}</title>
  <link rel="stylesheet" href="/assets/css/styles.css">
  {% include head/fonts.html %}
  {% feed_meta %}
  {% seo %}
  {% include head/analytics.html %}
</head>
<body>
  {% include navigation/navigation.liquid %}
  <main>
    {{ content }}
  </main>
  {% include footer/footer.liquid %}
</body>
</html>
