---
layout: default
title: Art
permalink: /art/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/art-gallery.css">

<section class="art-gallery">
  <h1>Artwork</h1>
  <p>A collection of my photos and videos.</p>

  <div class="art-gallery-grid">
    {% for file in site.data.art_files %}
      {% if file.type == 'image' %}
        <div class="art-gallery-item">
          <a href="/{{ file.filename }}" class="art-gallery-link" data-lightbox="art">
            <img src="/{{ file.filename }}" alt="{{ file.name }}" loading="lazy">
          </a>
        </div>
      {% elsif file.type == 'video' %}
        <div class="art-gallery-item">
          <a href="/{{ file.filename }}" class="art-gallery-link" data-lightbox="art">
            <video muted loop autoplay playsinline preload="metadata">
              <source src="/{{ file.filename }}" type="video/mp4">
            </video>
          </a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

<!-- Lightbox Modal -->
<div id="art-lightbox" class="art-lightbox">
  <span class="art-lightbox-close">&times;</span>
  <div class="art-lightbox-content"></div>
</div>

<script src="{{ site.baseurl }}/assets/js/art-gallery.js"></script>
