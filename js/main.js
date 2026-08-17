/* ============================================
   SERVICIOS TÉCNICOS DIÉSEL — STD PACHUCA
   JavaScript Principal v1.0
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initNavIndicator();
  initScrollReveal();
  initStatCounters();
  initMediaRotators();
  initServiceCards();
  initFaqAccordions();
  initCarousels();
  initBeforeAfter();
  initLightbox();
});

/* ── Header: sticky + shadow on scroll ──── */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── FAQ: nested exclusive accordions ───── */
function initFaqAccordions() {
  const categories = [...document.querySelectorAll('.faq-category')];
  if (!categories.length) return;

  const closeQuestion = question => {
    question.classList.remove('is-open');
    question.querySelector('.faq-question__trigger')?.setAttribute('aria-expanded', 'false');
  };

  const closeCategory = category => {
    category.classList.remove('is-open');
    category.querySelector('.faq-category__trigger')?.setAttribute('aria-expanded', 'false');
    category.querySelectorAll('.faq-question').forEach(closeQuestion);
  };

  categories.forEach(category => {
    const categoryTrigger = category.querySelector('.faq-category__trigger');
    const questions = [...category.querySelectorAll('.faq-question')];
    if (!categoryTrigger) return;

    categoryTrigger.addEventListener('click', () => {
      const willOpen = !category.classList.contains('is-open');

      categories.forEach(otherCategory => {
        if (otherCategory !== category) closeCategory(otherCategory);
      });

      if (willOpen) {
        category.classList.add('is-open');
        categoryTrigger.setAttribute('aria-expanded', 'true');
      } else {
        closeCategory(category);
      }
    });

    questions.forEach(question => {
      const questionTrigger = question.querySelector('.faq-question__trigger');
      if (!questionTrigger) return;

      questionTrigger.addEventListener('click', () => {
        const willOpen = !question.classList.contains('is-open');

        questions.forEach(otherQuestion => {
          if (otherQuestion !== question) closeQuestion(otherQuestion);
        });

        question.classList.toggle('is-open', willOpen);
        questionTrigger.setAttribute('aria-expanded', String(willOpen));
      });
    });
  });
}

/* ── Services: expandable cards ──────────── */
function initServiceCards() {
  const cards = [...document.querySelectorAll('.service-card')];
  if (!cards.length) return;

  const whatsappNumber = '5217711288281';
  const serviceActions = {
    'servicio-diagnostico': {
      label: 'Solicitar diagnóstico por escáner',
      message: 'Hola, me interesa solicitar un diagnóstico por escáner. ¿Podrían brindarme información sobre disponibilidad y costo?'
    },
    'servicio-inyectores': {
      label: 'Solicitar servicio de inyectores',
      message: 'Hola, me interesa solicitar diagnóstico y servicio para inyectores diésel. ¿Podrían orientarme sobre el proceso y la cotización?'
    },
    'servicio-turbos': {
      label: 'Solicitar reparación de turbo',
      message: 'Hola, me interesa solicitar diagnóstico y reparación de un turbocargador. ¿Podrían indicarme cómo llevar la unidad o el componente para revisión?'
    },
    'servicio-bombas': {
      label: 'Solicitar servicio de bomba de inyección',
      message: 'Hola, me interesa solicitar revisión, reparación o calibración de una bomba de inyección. ¿Podrían brindarme información y una cotización?'
    },
    'servicio-motores': {
      label: 'Solicitar servicio de motor',
      message: 'Hola, me interesa solicitar diagnóstico o servicio para un motor. ¿Podrían orientarme sobre disponibilidad y cotización?'
    },
    'servicio-mantenimiento': {
      label: 'Solicitar mantenimiento diésel',
      message: 'Hola, me interesa programar un servicio de mantenimiento diésel. ¿Podrían brindarme información sobre disponibilidad y costo?'
    }
  };

  let modal = null;
  let activeCard = null;
  let previousOverflow = '';

  const closeModal = () => {
    if (!modal || !activeCard) return;

    modal.classList.remove('active');
    activeCard.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = previousOverflow;

    const cardToFocus = activeCard;
    const modalToRemove = modal;
    modal = null;
    activeCard = null;

    window.setTimeout(() => {
      modalToRemove.remove();
      cardToFocus.focus();
    }, 300);
  };

  const openModal = (card) => {
    if (modal) return;

    const media = card.querySelector('.service-card__media');
    const image = media?.querySelector('img');
    const title = card.querySelector('.service-card__title')?.textContent.trim() || 'Servicio técnico';
    const description = card.querySelector('.service-card__text')?.textContent.trim() || '';
    const containsImage = media?.classList.contains('service-card__media--contain');
    const action = serviceActions[card.dataset.mediaSlot] || {
      label: `Solicitar ${title}`,
      message: `Hola, me interesa solicitar información sobre el servicio de ${title}.`
    };
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(action.message)}`;

    modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', title);
    modal.innerHTML = `
      <article class="service-modal__card">
        <button class="service-modal__close" type="button" aria-label="Cerrar detalles">&times;</button>
        <div class="service-modal__media${containsImage ? ' service-card__media--contain' : ''}">
          <img src="${image?.getAttribute('src') || ''}" alt="${image?.getAttribute('alt') || ''}">
        </div>
        <div class="service-modal__body">
          <h3 class="service-modal__title">${title}</h3>
          <p class="service-modal__text">${description}</p>
          <a class="service-modal__cta" href="${whatsappUrl}" target="_blank" rel="noopener">${action.label} por WhatsApp&nbsp; →</a>
        </div>
      </article>`;

    activeCard = card;
    activeCard.setAttribute('aria-expanded', 'true');
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);

    modal.querySelector('.service-modal__close').addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });

    requestAnimationFrame(() => {
      modal.classList.add('active');
      modal.querySelector('.service-modal__close').focus();
    });
  };

  cards.forEach(card => {
    const title = card.querySelector('.service-card__title')?.textContent.trim() || 'servicio';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalles de ${title}`);
    card.setAttribute('aria-expanded', 'false');

    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal) closeModal();
  });
}

/* ── Navigation: active section + sliding pill ── */
function initNavIndicator() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const links = [...nav.querySelectorAll('.nav__link[href^="#"]')];
  if (!links.length) return;

  const sections = links
    .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(item => item.section);

  const indicator = document.createElement('span');
  indicator.className = 'nav__indicator';
  indicator.setAttribute('aria-hidden', 'true');
  nav.prepend(indicator);

  let activeLink = nav.querySelector('.nav__link.active') || links[0];
  let hoveredLink = null;
  let scrollTicking = false;
  let navigationLockUntil = 0;
  const desktopQuery = window.matchMedia('(min-width: 901px)');

  const moveIndicator = (link) => {
    if (!link || !desktopQuery.matches) {
      indicator.style.opacity = '0';
      return;
    }

    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.height = `${link.offsetHeight}px`;
    indicator.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop}px)`;
    indicator.style.opacity = '1';
  };

  const setActive = (link) => {
    if (!link) return;

    links.forEach(item => {
      const isActive = item === link;
      item.classList.toggle('active', isActive);
      if (isActive) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    activeLink = link;
    if (!hoveredLink) moveIndicator(activeLink);
  };

  links.forEach(link => {
    link.addEventListener('pointerenter', () => {
      hoveredLink = link;
      moveIndicator(link);
    });

    link.addEventListener('focus', () => moveIndicator(link));
    link.addEventListener('click', () => {
      navigationLockUntil = performance.now() + 800;
      setActive(link);
    });
  });

  nav.addEventListener('pointerleave', () => {
    hoveredLink = null;
    moveIndicator(activeLink);
  });

  nav.addEventListener('focusout', (event) => {
    if (!nav.contains(event.relatedTarget)) moveIndicator(activeLink);
  });

  const updateActiveSection = () => {
    if (performance.now() < navigationLockUntil) {
      scrollTicking = false;
      return;
    }

    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 0;
    const readingLine = window.scrollY + headerH + Math.min(window.innerHeight * 0.28, 220);
    let current = sections[0];

    sections.forEach(item => {
      if (item.section.offsetTop <= readingLine) current = item;
    });

    const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (pageBottom) current = sections[sections.length - 1];

    if (current && current.link !== activeLink) setActive(current.link);
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateActiveSection);
  }, { passive: true });

  window.addEventListener('resize', () => moveIndicator(hoveredLink || activeLink));
  desktopQuery.addEventListener('change', () => moveIndicator(activeLink));

  setActive(activeLink);
  requestAnimationFrame(updateActiveSection);
  document.fonts?.ready.then(() => moveIndicator(activeLink));
}

/* ── Mobile menu toggle ──────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    const isOpen = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      document.body.style.overflow = '';
    });
  });
}

/* ── Smooth scroll for anchor links ──────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'));
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    });
  });
}

/* ── Scroll reveal (IntersectionObserver) ── */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Animated stat counters ──────────────── */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat__number');
  if (!stats.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = prefix + current.toLocaleString('es-MX') + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString('es-MX') + suffix;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
}

/* ── Hero and workshop image transitions ── */
function initMediaRotators() {
  document.querySelectorAll('.media-rotator').forEach(rotator => {
    const items = Array.from(rotator.querySelectorAll('.media-rotator__item'));
    if (!items.length) return;

    const isHeroCarousel = rotator.classList.contains('hero__media');
    const previousButton = rotator.querySelector('[data-hero-prev]');
    const nextButton = rotator.querySelector('[data-hero-next]');
    let current = 0;
    let timerId;
    const interval = 3000;

    const show = index => {
      current = (index + items.length) % items.length;

      items.forEach((item, itemIndex) => {
        const isActive = itemIndex === current;
        let relativePosition = itemIndex - current;

        if (relativePosition > items.length / 2) relativePosition -= items.length;
        if (relativePosition < -items.length / 2) relativePosition += items.length;

        const isPrevious = isHeroCarousel && relativePosition === -1;
        const isNext = isHeroCarousel && relativePosition === 1;

        item.classList.toggle('is-active', isActive);
        item.classList.toggle('is-prev', isPrevious);
        item.classList.toggle('is-next', isNext);
        item.setAttribute('aria-hidden', String(!isActive));

        if (isHeroCarousel) {
          item.style.setProperty('--carousel-offset', `${relativePosition * 108}%`);
          item.style.setProperty('--carousel-scale', isActive ? '1' : '0.82');
        }
      });
    };

    const stop = () => {
      window.clearInterval(timerId);
      timerId = undefined;
    };

    const start = () => {
      if (timerId || items.length < 2 || document.hidden) return;
      timerId = window.setInterval(() => {
        show((current + 1) % items.length);
      }, interval);
    };

    const move = direction => {
      stop();
      show(current + direction);
      start();
    };

    previousButton?.addEventListener('click', () => move(-1));
    nextButton?.addEventListener('click', () => move(1));

    if (isHeroCarousel) {
      rotator.addEventListener('mouseenter', stop);
      rotator.addEventListener('mouseleave', start);
      rotator.addEventListener('focusin', stop);
      rotator.addEventListener('focusout', start);
    }

    show(0);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) start();
        else stop();
      });
    }, { threshold: 0.2 });

    observer.observe(rotator);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (rotator.getBoundingClientRect().bottom > 0 && rotator.getBoundingClientRect().top < window.innerHeight) start();
    });
  });
}

/* ── Before / after image comparison ───── */
function initBeforeAfter() {
  document.querySelectorAll('.before-after').forEach(comparison => {
    const range = comparison.querySelector('.before-after__range');
    if (!range) return;

    const updatePosition = () => {
      comparison.style.setProperty('--position', `${range.value}%`);
    };

    range.addEventListener('input', updatePosition);
    updatePosition();
  });
}

/* ── Horizontal media carousels ─────────── */
function initCarousels() {
  document.querySelectorAll('[data-carousel]').forEach(viewport => {
    const track = viewport.querySelector('.carousel-track');
    const controls = viewport.previousElementSibling;
    const previous = controls?.querySelector('[data-carousel-prev]');
    const next = controls?.querySelector('[data-carousel-next]');

    if (!track || !track.firstElementChild) return;

    const speed = (parseFloat(viewport.dataset.speed) || 16) / 1000;
    let direction = 1;
    let timerId;
    let lastTime;
    let running = false;
    let resumeId;

    const stepSize = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return track.firstElementChild.getBoundingClientRect().width + gap;
    };

    const tick = () => {
      if (!running) return;
      const timestamp = performance.now();
      if (!lastTime) lastTime = timestamp;

      const elapsed = Math.min(timestamp - lastTime, 1000);
      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);

      if (maxScroll > 1) {
        viewport.scrollLeft += direction * speed * elapsed;

        if (viewport.scrollLeft >= maxScroll - 1) {
          viewport.scrollLeft = maxScroll;
          direction = -1;
        } else if (viewport.scrollLeft <= 1) {
          viewport.scrollLeft = 0;
          direction = 1;
        }
      }

      lastTime = timestamp;
    };

    const stop = () => {
      running = false;
      lastTime = undefined;
      window.clearInterval(timerId);
      timerId = undefined;
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      lastTime = performance.now();
      timerId = window.setInterval(tick, 40);
    };

    const resumeLater = (delay = 900) => {
      window.clearTimeout(resumeId);
      resumeId = window.setTimeout(start, delay);
    };

    const move = newDirection => {
      stop();
      direction = newDirection;
      viewport.scrollBy({ left: newDirection * stepSize(), behavior: 'smooth' });
      resumeLater(1200);
    };

    previous?.addEventListener('click', () => move(-1));
    next?.addEventListener('click', () => move(1));

    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', () => resumeLater(250));
    viewport.addEventListener('focusin', stop);
    viewport.addEventListener('focusout', () => resumeLater(500));
    viewport.addEventListener('pointerdown', stop, { passive: true });
    viewport.addEventListener('pointerup', () => resumeLater(900), { passive: true });
    viewport.addEventListener('wheel', () => {
      stop();
      resumeLater(1200);
    }, { passive: true });

    start();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  });
}

/* ── Gallery Lightbox ────────────────────── */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const caption = lightbox.querySelector('.lightbox__caption');

  // Open lightbox when clicking gallery images
  document.querySelectorAll('.gallery__item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      if (!src) return;
      lightboxImg.src = src;
      lightboxImg.alt = item.dataset.alt || 'Imagen de galería';
      if (caption) {
        caption.textContent = item.querySelector('figcaption')?.textContent.trim() || item.dataset.alt || '';
      }
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
      if (caption) caption.textContent = '';
    }, 300);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
