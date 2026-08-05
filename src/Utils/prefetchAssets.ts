'use client';

import { getImageProps } from 'next/image';
import { items } from '../Components/List/data';
import { CASE_IMAGE_SIZES } from '../Components/Card/Card';

/*
 * Duplicated from CanvasModel.jsx rather than imported: that module pulls in the whole
 * three.js stack, and importing anything from it here would fold the one dependency the
 * dynamic() split exists to keep out of the initial bundle right back into it.
 */
const MODEL_URL = '/snake_statue.glb';
/* Self-hosted 'city' environment (133 KB EXR); see CanvasModel. */
const MODEL_ENVIRONMENT_URL = '/env_city.exr';

/**
 * Warms the browser cache with everything the page will want as the visitor scrolls,
 * fired while the intro animation has the page locked anyway - the network is idle for
 * those 2.5 seconds, so the fetches are effectively free.
 *
 * The case images go through getImageProps with the exact fill/sizes configuration the
 * grid renders with, yielding the same srcset the real <Image> emits; assigning it to a
 * detached Image element lets the browser run its own srcset selection, so the file
 * that lands in cache is the one the grid will actually request - viewport, DPR and
 * AVIF/WebP support all accounted for. A detached element instead of <link rel="preload">
 * because preload warns in the console when the resource isn't used within seconds,
 * and these are below the fold by design.
 *
 * Fire-and-forget: a failed prefetch costs nothing - the real consumers load normally.
 */
export function prefetchCaseAssets() {
    for (const item of items) {
        const {
            props: { src, srcSet, sizes },
        } = getImageProps({
            src: `/images/${item.image}`,
            alt: '',
            fill: true,
            sizes: CASE_IMAGE_SIZES,
        });

        const probe = new window.Image();
        // sizes before srcset before src - assigning src first triggers a fetch of the
        // fallback URL before the browser has seen the candidates.
        if (sizes) probe.sizes = sizes;
        if (srcSet) probe.srcset = srcSet;
        probe.src = src;
    }

    /*
     * The statue (~230 KB - meshopt geometry + WebP textures; it was 2 MB before
     * gltf-transform). Its chunk only downloads when the About section nears the
     * viewport; pulling the model itself into HTTP cache now means that moment costs
     * one dynamic import instead of an import plus a fetch mid-scroll. Reading the
     * body to completion is what commits it to cache - an abandoned response may never
     * be stored.
     */
    /*
     * Both files are already preloaded from the document head; these reads adopt those
     * in-flight responses (same URL, same credentials mode), pull the bodies to
     * completion and commit them to the HTTP cache - which also keeps Chrome's
     * "preloaded but not used" warning quiet, since the head hints now have a consumer
     * well before the model itself mounts.
     */
    for (const url of [MODEL_URL, MODEL_ENVIRONMENT_URL]) {
        fetch(url)
            .then(response => (response.ok ? response.arrayBuffer() : undefined))
            .catch(() => {
                /* Offline or blocked - the deferred loader will retry on its own terms. */
            });
    }
}
