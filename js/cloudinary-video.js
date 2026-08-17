/*
 * Cloudinary video delivery for a static site.
 *
 * The public cloud name and public ID are safe to expose. Never add the API
 * secret or an unsigned upload preset to this repository.
 *
 * Usage example:
 * <div data-cloudinary-video="std-pachuca/hero-taller-01"
 *      data-cloudinary-cloud="YOUR_CLOUD_NAME"
 *      data-cloudinary-poster="std-pachuca/hero-taller-01"
 *      data-cloudinary-autoplay="true"></div>
 */
(() => {
  const safeSegment = value => encodeURIComponent(value).replace(/%2F/g, '/');

  const cloudinaryUrl = (cloudName, publicId, transformation, extension = '') => (
    `https://res.cloudinary.com/${safeSegment(cloudName)}/video/upload/${transformation}/${safeSegment(publicId)}${extension}`
  );

  document.querySelectorAll('[data-cloudinary-video]').forEach(container => {
    const cloudName = container.dataset.cloudinaryCloud;
    const publicId = container.dataset.cloudinaryVideo;
    if (!cloudName || !publicId) return;

    const video = document.createElement('video');
    const autoplay = container.dataset.cloudinaryAutoplay === 'true';
    const label = container.dataset.cloudinaryLabel || 'Video del taller STD Pachuca';
    const width = Math.min(Math.max(Number(container.dataset.cloudinaryWidth) || 1280, 320), 1920);
    const transforms = `c_limit,w_${width}/q_auto/f_auto`;

    video.className = container.dataset.cloudinaryClass || 'cloudinary-video';
    video.controls = container.dataset.cloudinaryControls !== 'false';
    video.preload = 'metadata';
    video.playsInline = true;
    video.muted = autoplay;
    video.loop = autoplay;
    video.autoplay = autoplay;
    video.setAttribute('aria-label', label);
    video.src = cloudinaryUrl(cloudName, publicId, transforms);

    const posterId = container.dataset.cloudinaryPoster;
    if (posterId) {
      video.poster = cloudinaryUrl(cloudName, posterId, 'so_0/c_limit,w_1280/q_auto/f_jpg', '.jpg');
    }

    container.replaceChildren(video);
  });
})();
