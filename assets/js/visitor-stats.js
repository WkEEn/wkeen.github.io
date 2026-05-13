(function () {
  "use strict";

  var locationEl = document.getElementById("visitor-location-text");
  var ipNoteEl = document.getElementById("visitor-ip-note");
  var mapEl = document.getElementById("visitor-map");

  if (!mapEl) {
    return;
  }

  function setText(el, text) {
    if (el) {
      el.textContent = text;
    }
  }

  function loadLeaflet(callback) {
    if (window.L) {
      callback();
      return;
    }

    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (window.L) {
        window.clearInterval(timer);
        callback();
      } else if (attempts > 40) {
        window.clearInterval(timer);
        setText(mapEl, "Map service is temporarily unavailable.");
      }
    }, 100);
  }

  function renderMap(visitor) {
    loadLeaflet(function () {
      var lat = Number(visitor.latitude);
      var lon = Number(visitor.longitude);
      var hasLocation = Number.isFinite(lat) && Number.isFinite(lon);
      var center = hasLocation ? [lat, lon] : [20, 0];
      var zoom = hasLocation ? 4 : 2;
      var map = window.L.map("visitor-map", {
        scrollWheelZoom: false,
        attributionControl: true
      }).setView(center, zoom);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      if (hasLocation) {
        window.L.marker(center)
          .addTo(map)
          .bindPopup(visitor.label)
          .openPopup();
      }
    });
  }

  function loadVisitorLocation() {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Location request failed");
        }
        return response.json();
      })
      .then(function (data) {
        var city = data.city || "";
        var region = data.region || "";
        var country = data.country_name || "";
        var parts = [city, region, country].filter(Boolean);
        var label = parts.length ? parts.join(", ") : "Approximate location unavailable";

        setText(locationEl, label);
        setText(ipNoteEl, data.ip ? "Public IP metadata: " + data.ip : "Approximate city-level location.");
        renderMap({
          latitude: data.latitude,
          longitude: data.longitude,
          label: label
        });
      })
      .catch(function () {
        setText(locationEl, "Location unavailable");
        setText(ipNoteEl, "The location service could not be reached.");
        renderMap({
          latitude: null,
          longitude: null,
          label: "Visitor location unavailable"
        });
      });
  }

  loadVisitorLocation();
}());
