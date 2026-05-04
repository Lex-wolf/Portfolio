/**
 * Runs work after the browser is idle (or after timeout). Keeps main thread free during first paint.
 * @param {() => void} fn
 * @param {{ timeout?: number }} [opts]
 * @returns {() => void} cancel
 */
export function scheduleIdleTask(fn, opts = {}) {
  const { timeout = 2000 } = opts;
  if (typeof window === "undefined") {
    return () => {};
  }

  let id;

  const run = () => {
    id = undefined;
    try {
      fn();
    } catch {
      /* ignore */
    }
  };

  if (typeof window.requestIdleCallback === "function") {
    id = window.requestIdleCallback(run, { timeout });
    return () => {
      if (id !== undefined) window.cancelIdleCallback(id);
    };
  }

  id = window.setTimeout(run, Math.min(timeout, 800));
  return () => {
    if (id !== undefined) window.clearTimeout(id);
  };
}
