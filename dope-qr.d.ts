declare module 'dope-qr' {
	/** correctLevel values. */
	enum QRErrorCorrectLevel {
		M,
		L,
		H,
		Q
	}

	/** QR generation options. */
	class DopeQrOptions {
		/** @example 800 */
		size?: number;

		/** @example 20 */
		margin?: number;

		/** @example 4 */
		typeNumber?: number;

		/** @example '#000000' */
		colorDark?: string;

		/** @example '#ffffff' */
		colorLight?: string;

		/** @example QRErrorCorrectLevel.M */
		correctLevel?: QRErrorCorrectLevel;

		/** Background image. */
		backgroundImage?: Image;

		/** @example 'rgba(0,0,0,0)' */
		backgroundDimming?: string;

		/** Logo image. */
		logoImage?: Image;

		/** @example 0.2 */
		logoScale?: number;

		/** @example 6 */
		logoMargin?: number;

		/** @example 8 */
		logoCornerRadius?: number;

		/** @example true */
		whiteMargin?: boolean;

		/** @example 0.35 */
		dotScale?: number;

		/** @example false */
		maskedDots?: boolean;

		/** @example true */
		autoColor?: boolean;

		/** @example 128 */
		binarizeThreshold?: number;

		/** @example 'balls' */
		text?: string;
	}

	/** Returns exchange rates between various currencies and Bitcoin. */
	const generateQRCode: (options: DopeQrOptions) => Promise<Uint8Array>;
}
