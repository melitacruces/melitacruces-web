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
    'rounded-2xl transition duration-300 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background will-change-transform';
  const shadowClasses = noShadow
    ? ''
    : 'shadow-[0_1px_2px_rgba(59,130,246,0.14),0_4px_12px_rgba(59,130,246,0.10)]';
  const hoverClasses = noHover
    ? ''
    : 'hover:border-blue-light/45 hover:shadow-[0_0_20px_rgba(59,130,246,0.32)]';

  const variants = {
    primary: `h-12 px-8 bg-[#16223a] border border-blue-light/30 ${noHover ? '' : 'hover:bg-[#1e3a68]'} text-white text-sm sm:text-base font-semibold tracking-wide ${shadowClasses} ${hoverClasses}`,
    secondary: `h-12 px-8 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-[#16223a]'} text-foreground/90 text-sm sm:text-base font-semibold tracking-wide ${shadowClasses} ${hoverClasses}`,
    icon: `w-12 h-12 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-[#16223a]'} text-foreground/80 ${noHover ? '' : 'hover:text-blue-light'} ${shadowClasses} ${hoverClasses} flex-none shrink-0`,
    iconText: `h-12 px-4 bg-background border border-panel-border ${noHover ? '' : 'hover:bg-[#16223a]'} text-foreground/80 ${noHover ? '' : 'hover:text-blue-light'} ${shadowClasses} ${hoverClasses} min-w-0`,
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
