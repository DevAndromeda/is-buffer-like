/**
 * Checks if the src is buffer-like
 * @param src The src to check
 * @returns {boolean}
 */
module.exports = module.exports.default = module.exports.isBuffer = module.exports.isBufferLike = (src) => {
    return (
        Buffer.isBuffer(src) ||
        Array.isArray(src) ||
        src instanceof ArrayBuffer ||
        src instanceof SharedArrayBuffer ||
        src instanceof Object.getPrototypeOf(Uint8Array)
    );
}