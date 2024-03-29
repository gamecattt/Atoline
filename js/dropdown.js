/**
 * Vanilla JavaScript dropdown v2.2.0
 * https://zoltantothcom.github.io/vanilla-js-dropdown
 */
var CustomSelect = function (e) {
    var o = "string" == typeof e.elem ? document.getElementById(e.elem) : e.elem,
        s = "boolean" == typeof e.bubbles,
        l = "js-dropdown-title",
        i = "is-selected",
        t = "is-open",
        n = o.getElementsByTagName("optgroup"),
        a = o.options,
        d = a.length,
        r = 0,
        c = document.createElement("div");
    (c.className = "js-dropdown"), o.id && (c.id = "custom-" + o.id);
    var u = document.createElement("button");
    (u.className = l), (u.textContent = a[0].textContent);
    var m = document.createElement("ul");
    if (((m.className = "js-dropdown-list"), n.length))
        for (var p = 0; p < n.length; p++) {
            var v = document.createElement("div");
            (v.innerText = n[p].label), v.classList.add("js-dropdown-optgroup"), m.appendChild(v), g(n[p].getElementsByTagName("option"));
        }
    else g(a);
    function g(e) {
        for (var t = 0; t < e.length; t++) {
            var n = document.createElement("li");
            (n.innerText = e[t].textContent),
                n.setAttribute("data-value", e[t].value),
                n.setAttribute("data-index", r++),
                a[o.selectedIndex].textContent === e[t].textContent && (n.classList.add(i), (u.textContent = e[t].textContent)),
                m.appendChild(n);
        }
    }
    function f() {
        m.classList.toggle(t);
    }
    function x() {
        m.classList.remove(t);
    }
    return (
        c.appendChild(u),
        c.appendChild(m),
        c.addEventListener("click", function (e) {
            e.preventDefault();
            var t = e.target;
            t.className === l && f();
            if ("LI" === t.tagName) {
                (c.querySelector("." + l).innerText = t.innerText), (o.options.selectedIndex = t.getAttribute("data-index"));
                var n = s ? new CustomEvent("change", { bubbles: !0 }) : new CustomEvent("change");
                o.dispatchEvent(n);
                for (var a = 0; a < d; a++) m.querySelectorAll("li")[a].classList.remove(i);
                t.classList.add(i), x();
            }
        }),
        o.parentNode.insertBefore(c, o),
        (o.style.display = "none"),
        document.addEventListener("click", function (e) {
            c.contains(e.target) || x();
        }),
        {
            toggle: f,
            close: x,
            open: function () {
                m.classList.add(t);
            },
        }
    );
};
