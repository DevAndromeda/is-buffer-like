declare module "is-buffer-like" {
    /**
     * Checks if the src is buffer-like
     * @param src The src to check
     * @returns {boolean}
     */
    export function isBuffer(src: unknown): boolean;
    /**
     * Checks if the src is buffer-like
     * @param src The src to check
     * @returns {boolean}
     */
    export function isBufferLike(src: unknown): boolean;
    /**
     * Checks if the src is buffer-like
     * @param src The src to check
     * @returns {boolean}
     */
    export default function isBuffer(src: unknown): boolean;
}