(function () {
  if (!window.rough) {
    return;
  }

  var hatch = "#a5d8ff";
  var ink = {
    roughness: 1.2,
    stroke: "#1e1e1e",
    strokeWidth: 1.5,
    fillWeight: 0.75,
    hachureGap: 6,
    hachureAngle: -41,
  };

  function ns(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }

  var sketchers = {
    box: function (rc) {
      return rc.rectangle(
        16,
        18,
        148,
        88,
        Object.assign({}, ink, {
          seed: 3,
          fill: hatch,
          fillStyle: "hachure",
        })
      );
    },
    circle: function (rc) {
      return rc.ellipse(
        60,
        60,
        84,
        80,
        Object.assign({}, ink, {
          seed: 11,
          stroke: "#1971c2",
          fill: hatch,
          fillStyle: "hachure",
        })
      );
    },
    arrow: function (rc) {
      var group = ns("g");
      group.appendChild(
        rc.path(
          "M8 62 C 48 10, 128 8, 174 48",
          Object.assign({}, ink, { seed: 27, stroke: "#1971c2" })
        )
      );
      group.appendChild(
        rc.linearPath(
          [
            [152, 30],
            [178, 49],
            [148, 58],
          ],
          Object.assign({}, ink, { seed: 31, stroke: "#1971c2" })
        )
      );
      return group;
    },
    lock: function (rc) {
      var group = ns("g");
      group.appendChild(
        rc.rectangle(
          18,
          38,
          54,
          44,
          Object.assign({}, ink, {
            seed: 44,
            fill: "#ffc9c9",
            fillStyle: "hachure",
            stroke: "#e03131",
          })
        )
      );
      group.appendChild(
        rc.arc(
          45,
          38,
          28,
          28,
          Math.PI,
          0,
          true,
          Object.assign({}, ink, { seed: 48, stroke: "#e03131" })
        )
      );
      return group;
    },
    check: function (rc) {
      return rc.linearPath(
        [
          [12, 34],
          [34, 56],
          [78, 14],
        ],
        Object.assign({}, ink, {
          seed: 79,
          stroke: "#2f9e44",
          strokeWidth: 2.2,
        })
      );
    },
    line: function (rc) {
      return rc.path(
        "M6 28 C 38 8, 76 42, 132 18",
        Object.assign({}, ink, { seed: 41 })
      );
    },
    diamond: function (rc) {
      return rc.polygon(
        [
          [55, 8],
          [100, 54],
          [52, 100],
          [10, 56],
        ],
        Object.assign({}, ink, {
          seed: 19,
          fill: hatch,
          fillStyle: "hachure",
        })
      );
    },
  };

  document.querySelectorAll("[data-sketch]").forEach(function (svg) {
    var kind = svg.getAttribute("data-sketch");
    var draw = sketchers[kind];
    if (!draw) {
      return;
    }
    svg.insertBefore(draw(rough.svg(svg)), svg.firstChild);
  });
})();
