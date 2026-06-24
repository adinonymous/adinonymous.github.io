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
    {% assign art_files = '' | split: ',' %}
    {% for file in site.static_files %}
      {% assign parts = file.path | split: '/' %}
      {% if parts[1] == 'assets' and parts.size == 3 %}
        {% assign ext = file.path | split: '.' | last | downcase %}
        {% if ext == 'jpg' or ext == 'jpeg' or ext == 'png' or ext == 'gif' or ext == 'webp' or ext == 'svg' or ext == 'mp4' or ext == 'mov' or ext == 'webm' or ext == 'mkv' %}
          {% assign entry = file.path | append: '||' | append: file.basename %}
          {% assign art_files = art_files | push: entry %}
        {% endif %}
      {% endif %}
    {% endfor %}
    {% assign art_files_sorted = art_files | sort: 'last' | reverse %}
    {% for entry in art_files_sorted %}
      {% assign filepath = entry | split: '||' | first %}
      {% assign name = entry | split: '||' | last | replace: '_', ' ' | capitalize %}
      {% assign ext = filepath | split: '.' | last | downcase %}
      {% if ext == 'jpg' or ext == 'jpeg' or ext == 'png' or ext == 'gif' or ext == 'webp' or ext == 'svg' %}
        <div class="art-gallery-item">
          <a href="{{ filepath }}" class="art-gallery-link" data-lightbox="art">
            <img src="{{ filepath }}" alt="{{ name }}" loading="lazy">
          </a>
        </div>
      {% elsif ext == 'mp4' or ext == 'mov' or ext == 'webm' or ext == 'mkv' %}
        <div class="art-gallery-item">
          <a href="{{ filepath }}" class="art-gallery-link" data-lightbox="art">
            <video muted loop autoplay playsinline preload="metadata">
              <source src="{{ filepath }}" type="video/mp4">
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
