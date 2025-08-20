export const cn = (...cls: (string|false|undefined)[]) => cls.filter(Boolean).join(' ');
