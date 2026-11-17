/* AIB Robot — cart, forms, filters, age gate. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var CART_KEY = 'aib-cart-v1';
  var REQUEST_KEY = 'aib-requests';
  var AGE_COOKIE = 'aib_age';
  var AGE_DAYS = 365;

  function money(n) {
    var v = Number(n) || 0;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(v);
  }

  function uid() {
    return 'AIB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  }

  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
  }
  function getCookie(name) {
    var parts = document.cookie.split(';');
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].trim();
      if (p.indexOf(name + '=') === 0) return decodeURIComponent(p.slice(name.length + 1));
    }
    return '';
  }

  function readCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      var data = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }
  function writeCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('aib:cart', { detail: { items: items, count: count(items) } }));
    renderCount(items);
  }
  function count(items) {
    return (items || readCart()).reduce(function (s, it) { return s + (Number(it.qty) || 0); }, 0);
  }
  function itemId(input) {
    return [input.slug, input.material || '', input.voiceBox ? 'vb' : 'nv'].join('::');
  }
  function addItem(input) {
    var items = readCart();
    var id = input.id || itemId(input);
    var found = items.find(function (it) { return it.id === id; });
    if (found) {
      found.qty = (Number(found.qty) || 0) + (Number(input.qty) || 1);
    } else {
      items.push({
        id: id,
        slug: input.slug,
        name: input.name,
        material: input.material || '',
        voiceBox: !!input.voiceBox,
        unitPrice: Number(input.unitPrice) || 0,
        voicePrice: Number(input.voicePrice) || 0,
        qty: Number(input.qty) || 1,
        href: input.href || ('/products/' + input.slug),
        notes: input.notes || '',
      });
    }
    writeCart(items);
    return items;
  }
  function removeItem(id) {
    writeCart(readCart().filter(function (it) { return it.id !== id; }));
  }
  function updateQty(id, qty) {
    var q = Math.max(0, parseInt(qty, 10) || 0);
    var items = readCart();
    items.forEach(function (it) {
      if (it.id === id) it.qty = q;
    });
    writeCart(items.filter(function (it) { return it.qty > 0; }));
  }
  function clearCart() { writeCart([]); }
  function lineTotal(it) {
    var base = Number(it.unitPrice) || 0;
    var extra = it.voiceBox ? (Number(it.voicePrice) || 0) : 0;
    return (base + extra) * (Number(it.qty) || 0);
  }
  function cartTotal(items) {
    return (items || readCart()).reduce(function (s, it) { return s + lineTotal(it); }, 0);
  }
  function renderCount(items) {
    var n = count(items);
    document.querySelectorAll('[data-cart-count]').forEach(function (el) {
      el.setAttribute('data-count', String(n));
      el.textContent = String(n);
    });
  }

  function isVerified() {
    return getCookie(AGE_COOKIE) === '1';
  }
  function verifyAge() {
    setCookie(AGE_COOKIE, '1', AGE_DAYS);
    document.documentElement.classList.add('age-verified');
    document.documentElement.classList.remove('age-open');
    var gate = document.getElementById('age-gate');
    if (gate) gate.setAttribute('aria-hidden', 'true');
    var main = document.getElementById('main');
    if (main && main.focus) main.focus({ preventScroll: true });
  }
  function openGate() {
    if (isVerified()) {
      document.documentElement.classList.add('age-verified');
      document.documentElement.classList.remove('age-open');
      return;
    }
    document.documentElement.classList.add('age-open');
    document.documentElement.classList.remove('age-verified');
    var enter = document.getElementById('age-enter');
    if (enter) enter.focus();
  }

  function initFilters(gridSelector, barSelector) {
    var grid = document.querySelector(gridSelector);
    var bar = document.querySelector(barSelector);
    if (!grid || !bar) return;

    function current() {
      var params = new URLSearchParams(window.location.search);
      function val(name) {
        var el = bar.querySelector('[name="' + name + '"]');
        return (el && el.value) || params.get(name) || '';
      }
      return {
        line: val('line'),
        material: val('material'),
        height: val('height'),
        stock: val('stock'),
      };
    }
    function applyFromUrl() {
      var params = new URLSearchParams(window.location.search);
      ['line', 'material', 'height', 'stock'].forEach(function (k) {
        var el = bar.querySelector('[name="' + k + '"]');
        if (el && params.get(k)) el.value = params.get(k);
      });
    }
    function filter() {
      var f = current();
      var cards = grid.querySelectorAll('[data-product]');
      var shown = 0;
      cards.forEach(function (card) {
        var ok = true;
        if (f.line && card.getAttribute('data-line') !== f.line) ok = false;
        if (f.material) {
          var mats = (card.getAttribute('data-materials') || '').split(',');
          if (mats.indexOf(f.material) === -1) ok = false;
        }
        if (f.height && card.getAttribute('data-height-band') !== f.height) ok = false;
        var avail = card.getAttribute('data-availability');
        if (f.stock === 'us' && avail !== 'us-warehouse' && avail !== 'us-eu-warehouse') ok = false;
        if (f.stock === 'eu' && avail !== 'eu-warehouse' && avail !== 'us-eu-warehouse') ok = false;
        if (f.stock === 'order' && avail !== 'available-to-order') ok = false;
        card.hidden = !ok;
        if (ok) shown += 1;
      });
      grid.setAttribute('data-empty', shown === 0 ? 'true' : 'false');
      var countEl = bar.querySelector('[data-filter-count]');
      if (countEl) countEl.textContent = shown + (shown === 1 ? ' figure' : ' figures');
      var params = new URLSearchParams();
      Object.keys(f).forEach(function (k) { if (f[k]) params.set(k, f[k]); });
      var qs = params.toString();
      var next = window.location.pathname + (qs ? '?' + qs : '');
      var cur = window.location.pathname + window.location.search;
      if (next !== cur) history.replaceState(null, '', next);
    }
    applyFromUrl();
    bar.addEventListener('change', filter);
    var reset = bar.querySelector('[data-filter-reset]');
    if (reset) {
      reset.addEventListener('click', function (e) {
        e.preventDefault();
        bar.querySelectorAll('select').forEach(function (s) { s.value = ''; });
        filter();
      });
    }
    filter();
  }

  function serializeForm(form) {
    var data = {};
    var fd = new FormData(form);
    fd.forEach(function (v, k) {
      if (data[k] !== undefined) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(v);
      } else {
        data[k] = v;
      }
    });
    return data;
  }
  function saveRequest(record) {
    var all = [];
    try { all = JSON.parse(localStorage.getItem(REQUEST_KEY) || '[]'); } catch (e) { all = []; }
    all.unshift(record);
    localStorage.setItem(REQUEST_KEY, JSON.stringify(all.slice(0, 30)));
  }
  function mailtoHref(record) {
    var subject = encodeURIComponent(record.subject || ('AIB Robot — ' + (record.type || 'inquiry')));
    var lines = [];
    lines.push('Request ID: ' + record.id);
    lines.push('Type: ' + record.type);
    lines.push('Date: ' + record.createdAt);
    lines.push('');
    Object.keys(record.fields || {}).forEach(function (k) {
      if (k === 'website' || k === 'company_url_honeypot') return;
      lines.push(k + ': ' + record.fields[k]);
    });
    if (record.cart && record.cart.length) {
      lines.push('');
      lines.push('Cart:');
      record.cart.forEach(function (it) {
        lines.push(
          '- ' + it.name +
          (it.material ? ' / ' + it.material : '') +
          (it.voiceBox ? ' + voice box' : '') +
          ' × ' + it.qty +
          ' @ ' + money(it.unitPrice) +
          (it.voiceBox ? ' + ' + money(it.voicePrice) : '')
        );
      });
      lines.push('Indicated total (to be confirmed): ' + money(record.total));
    }
    return 'mailto:?subject=' + subject + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  function bindForm(form) {
    if (!form || form.getAttribute('data-bound') === '1') return;
    form.setAttribute('data-bound', '1');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = form.querySelector('[data-form-error]');
      if (err) { err.classList.remove('is-visible'); err.textContent = ''; }
      var pot = form.querySelector('[name="website"]');
      if (pot && pot.value) return;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var age = form.querySelector('[name="age_confirm"]');
      if (age && !age.checked) {
        if (err) {
          err.textContent = 'Please confirm you are 18 years of age or older.';
          err.classList.add('is-visible');
        }
        return;
      }
      var fields = serializeForm(form);
      var type = form.getAttribute('data-aib-form') || 'inquiry';
      var includeCart = form.getAttribute('data-include-cart') === 'true';
      var cart = includeCart ? readCart() : [];
      var record = {
        id: uid(),
        type: type,
        subject: form.getAttribute('data-subject') || ('AIB Robot ' + type),
        createdAt: new Date().toISOString(),
        fields: fields,
        cart: cart,
        total: cartTotal(cart),
      };
      saveRequest(record);
      if (includeCart) clearCart();

      var success = form.parentElement.querySelector('[data-form-success]') || form.querySelector('[data-form-success]');
      form.classList.add('is-hidden');
      if (success) {
        success.classList.add('is-visible');
        var idEl = success.querySelector('[data-request-id]');
        if (idEl) idEl.textContent = record.id;
        var mail = success.querySelector('[data-mailto]');
        if (mail) mail.setAttribute('href', mailtoHref(record));
        var summary = success.querySelector('[data-request-summary]');
        if (summary) summary.textContent = JSON.stringify(record, null, 2);
        success.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCartPage() {
    var root = document.querySelector('[data-cart-page]');
    if (!root) return;
    var items = readCart();
    var empty = root.querySelector('[data-cart-empty]');
    var filled = root.querySelector('[data-cart-filled]');
    var body = root.querySelector('[data-cart-body]');
    var totalEl = root.querySelector('[data-cart-total]');
    if (!items.length) {
      if (empty) empty.classList.remove('is-hidden');
      if (filled) filled.classList.add('is-hidden');
      return;
    }
    if (empty) empty.classList.add('is-hidden');
    if (filled) filled.classList.remove('is-hidden');
    if (body) {
      body.innerHTML = items.map(function (it) {
        var extras = [];
        if (it.material) extras.push(esc(it.material));
        if (it.voiceBox) extras.push('AI voice box (' + money(it.voicePrice) + ', pending confirmation)');
        return (
          '<tr data-line-id="' + esc(it.id) + '">' +
            '<td><a href="' + esc(it.href) + '">' + esc(it.name) + '</a>' +
              (extras.length ? '<div class="fine">' + extras.join(' · ') + '</div>' : '') +
              '<div><button type="button" class="linkish" data-remove="' + esc(it.id) + '">Remove</button></div>' +
            '</td>' +
            '<td>' + money(it.unitPrice) + (it.voiceBox ? ' + ' + money(it.voicePrice) : '') + '</td>' +
            '<td><input class="qty-input" type="number" min="1" max="9" value="' + esc(String(it.qty)) + '" data-qty="' + esc(it.id) + '" aria-label="Quantity for ' + esc(it.name) + '"></td>' +
            '<td>' + money(lineTotal(it)) + '</td>' +
          '</tr>'
        );
      }).join('');
      body.querySelectorAll('[data-remove]').forEach(function (btn) {
        btn.addEventListener('click', function () { removeItem(btn.getAttribute('data-remove')); renderCartPage(); });
      });
      body.querySelectorAll('[data-qty]').forEach(function (inp) {
        inp.addEventListener('change', function () { updateQty(inp.getAttribute('data-qty'), inp.value); renderCartPage(); });
      });
    }
    if (totalEl) totalEl.textContent = money(cartTotal(items));
  }

  function renderCheckoutSummary() {
    var root = document.querySelector('[data-checkout-summary]');
    if (!root) return;
    var items = readCart();
    if (!items.length) {
      root.innerHTML = '<p class="lead">Your inquiry bag is empty. <a href="/shop">Browse the collection</a> and add a figure before sending an order request.</p>';
      var form = document.querySelector('form[data-aib-form="checkout"]');
      if (form) form.classList.add('is-hidden');
      return;
    }
    var rows = items.map(function (it) {
      return '<tr><td>' + esc(it.name) +
        (it.material ? ' · ' + esc(it.material) : '') +
        (it.voiceBox ? ' · voice box' : '') +
        ' × ' + esc(String(it.qty)) +
        '</td><td>' + money(lineTotal(it)) + '</td></tr>';
    }).join('');
    root.innerHTML =
      '<table class="cart-table"><thead><tr><th>Item</th><th>Indicated total</th></tr></thead><tbody>' +
      rows +
      '</tbody></table>' +
      '<p style="margin-top:1rem"><strong>Indicated total (to be confirmed): ' + money(cartTotal(items)) + '</strong></p>' +
      '<p class="fine">This is not a charge. Prices shown are the public figures on this site. Stock and the final price will be reconfirmed before payment.</p>';
  }

  function flash(msg) {
    var el = document.getElementById('aib-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'aib-toast';
      el.setAttribute('role', 'status');
      el.style.cssText = 'position:fixed;bottom:1.25rem;right:1.25rem;z-index:150;background:#1c1712;color:#f3eee6;padding:0.85rem 1.15rem;font-size:0.9rem;letter-spacing:0.02em;max-width:22rem;box-shadow:0 8px 30px rgba(28,23,18,.2);';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.display = 'block';
    clearTimeout(flash._t);
    flash._t = setTimeout(function () { el.style.display = 'none'; }, 2800);
  }


  function initProductGalleries() {
    document.querySelectorAll('[data-product-gallery]').forEach(function (gallery) {
      var mainSource = gallery.querySelector('.pdp-gallery-main source');
      var mainImg = gallery.querySelector('.pdp-gallery-main img');
      var caption = gallery.querySelector('.pdp-gallery-caption');
      var thumbs = gallery.querySelectorAll('.pdp-thumb');
      if (!mainImg || !thumbs.length) return;

      function toWebp(src) {
        if (/\.(jpg|png|webp)$/i.test(src)) return src.replace(/\.(jpg|png)$/i, '.webp');
        return src + '.webp';
      }
      function toJpg(src) {
        if (/\.(jpg|png|webp)$/i.test(src)) return src.replace(/\.webp$/i, '.jpg');
        return src + '.jpg';
      }

      function activate(btn) {
        var src = btn.getAttribute('data-src') || '';
        var alt = btn.getAttribute('data-alt') || '';
        var cap = btn.getAttribute('data-caption') || '';
        var w = btn.getAttribute('data-width');
        var h = btn.getAttribute('data-height');
        if (mainSource) mainSource.setAttribute('srcset', toWebp(src));
        mainImg.setAttribute('src', toJpg(src));
        mainImg.setAttribute('alt', alt);
        if (w) mainImg.setAttribute('width', w);
        if (h) mainImg.setAttribute('height', h);
        if (caption) caption.textContent = cap;
        thumbs.forEach(function (t) {
          var on = t === btn;
          t.setAttribute('aria-pressed', on ? 'true' : 'false');
          if (on) t.setAttribute('aria-current', 'true');
          else t.removeAttribute('aria-current');
        });
      }

      thumbs.forEach(function (btn) {
        btn.addEventListener('click', function () { activate(btn); });
        btn.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activate(btn);
          }
        });
      });
    });
  }

  function init() {
    if (isVerified()) {
      document.documentElement.classList.add('age-verified');
      document.documentElement.classList.remove('age-open');
    } else if (document.documentElement.getAttribute('data-require-age') !== 'false') {
      openGate();
    } else {
      document.documentElement.classList.remove('age-open');
    }

    var enter = document.getElementById('age-enter');
    var leave = document.getElementById('age-leave');
    if (enter) enter.addEventListener('click', function () { verifyAge(); });
    if (leave) leave.addEventListener('click', function () { window.location.href = '/left'; });

    var toggle = document.querySelector('[data-nav-toggle]');
    var header = document.querySelector('.site-header');
    if (toggle && header) {
      toggle.addEventListener('click', function () {
        var open = header.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    renderCount();
    initProductGalleries();
    initFilters('[data-product-grid]', '[data-filter-bar]');
    document.querySelectorAll('form[data-aib-form]').forEach(bindForm);
    renderCartPage();
    renderCheckoutSummary();

    document.querySelectorAll('[data-add-inquiry]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var slug = form.getAttribute('data-slug');
        var name = form.getAttribute('data-name');
        var href = form.getAttribute('data-href') || ('/products/' + slug);
        var material = form.getAttribute('data-material') || '';
        var hiddenMat = form.querySelector('input[name="material"]');
        if (hiddenMat && hiddenMat.value) material = hiddenMat.value;
        var pressed = form.querySelector('[data-material-pill][aria-pressed="true"]');
        if (pressed) material = pressed.getAttribute('data-material');
        var voice = form.querySelector('[name="voiceBox"]');
        var voiceBox = !!(voice && voice.checked);
        var unit = Number(form.getAttribute('data-price') || 0);
        var priceMap = {};
        ['tpe', 'stpe', 'silicone'].forEach(function (k) {
          var v = form.getAttribute('data-price-' + k);
          if (v) priceMap[k] = Number(v);
        });
        if (material && priceMap[material.toLowerCase()] != null) unit = priceMap[material.toLowerCase()];
        var voicePrice = Number(form.getAttribute('data-voice-price') || 100);
        addItem({
          slug: slug,
          name: name,
          material: material,
          voiceBox: voiceBox,
          unitPrice: unit,
          voicePrice: voicePrice,
          qty: 1,
          href: href,
        });
        flash((name || 'Item') + ' added to your inquiry bag.');
      });
    });

    document.querySelectorAll('[data-material-pill]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.parentElement;
        group.querySelectorAll('[data-material-pill]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        var form = btn.closest('[data-add-inquiry]');
        var hidden = form && form.querySelector('input[name="material"]');
        if (hidden) hidden.value = btn.getAttribute('data-material');
        var price = btn.getAttribute('data-price');
        var display = document.querySelector('[data-price-display]');
        if (display && price) display.textContent = money(Number(price));
        var compare = btn.getAttribute('data-compare');
        var compareEl = document.querySelector('[data-compare-display]');
        if (compareEl) {
          if (compare) {
            compareEl.textContent = money(Number(compare));
            compareEl.hidden = false;
          } else {
            compareEl.textContent = '';
            compareEl.hidden = true;
          }
        }
        var kind = document.querySelector('[data-price-material]');
        if (kind) kind.textContent = btn.getAttribute('data-material') || '';
      });
    });
  }

  window.Aib = {
    money: money,
    getCart: readCart,
    addItem: addItem,
    removeItem: removeItem,
    updateQty: updateQty,
    clearCart: clearCart,
    cartTotal: cartTotal,
    count: count,
    isVerified: isVerified,
    verifyAge: verifyAge,
    flash: flash,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
