export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  target,
  rel,
  fullWidth = false,
  noShadow = false,
  noHover = false,
  ...rest
}) {
  const baseClasses =
    'rounded-2xl transition duration-300 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background will-change-transform';
  const shadowClasses = noShadow
    ? ''
    : 'shadow-[0_1px_2px_rgba(255,255,255,0.10),0_4px_12px_rgba(255,255,255,0.06)]';
  const hoverClasses = noHover
    ? ''
    : 'hover:border-white/35 hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]';

  const variants = {
    primary: `h-12 px-8 bg-white border border-white/80 ${noHover ? '' : 'hover:bg-white/85'} text-black text-sm sm:text-base font-semibold tracking-wide ${shadowClasses} ${hoverClasses}`,
    secondary: `h-12 px-8 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-white/10'} text-foreground/90 text-sm sm:text-base font-semibold tracking-wide ${shadowClasses} ${hoverClasses}`,
    icon: `w-12 h-12 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-white/10'} text-foreground/80 ${noHover ? '' : 'hover:text-white'} ${shadowClasses} ${hoverClasses} flex-none shrink-0`,
    iconText: `h-12 px-4 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-white/10'} text-foreground/80 ${noHover ? '' : 'hover:text-white'} ${shadowClasses} ${hoverClasses} min-w-0`,
  };

  const widthClass = fullWidth && (variant === 'primary' || variant === 'secondary') ? 'w-full' : '';
  const finalClassName = `${baseClasses} ${variants[variant] || variants.primary} ${widthClass} ${className}`;
  const content = (
    <>
      {Icon && <Icon className={variant === 'icon' ? 'text-xl' : 'text-base'} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={finalClassName}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={finalClassName} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
