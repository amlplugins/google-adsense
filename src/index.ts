/**
 * @amlplugins/google-adsense
 *
 * Thin namespaced re-export of the native @googleapis/adsense SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * AdSense Management.
 */

import * as _sdk from "@googleapis/adsense";
export * from "@googleapis/adsense";
export { _sdk as sdk };
export default _sdk;
