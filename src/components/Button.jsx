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
  download = false,
  noShadow = false,
  noHover = false,
  ...rest
}) {
  const baseClasses =
    'rounded-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-light/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background';
  const sharedShadow = noShadow ? '' : 'shadow-[0_1px_2px_rgba(59,130,246,0.14),0_4px_12px_rgba(59,130,246,0.10)]';
  const sharedHover = noHover ? '' : 'hover:border-blue-light/45 hover:shadow-[0_0_20px_rgba(59,130,246,0.32)]';

  const variants = {
    primary: `h-12 px-8 bg-blue/20 border border-blue-light/30 ${noHover ? '' : 'hover:bg-blue/40'} text-white text-sm sm:text-base font-semibold tracking-wide backdrop-blur-xl ${sharedShadow} ${sharedHover}`,
    secondary: `h-12 px-8 bg-background/50 border border-glass-border ${noHover ? '' : 'hover:bg-blue/14'} text-foreground/90 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-xl ${sharedShadow} ${sharedHover}`,
    compactPrimary: `h-10 px-4 bg-blue/12 border border-blue/25 ${noHover ? '' : 'hover:bg-blue/24'} text-sm font-medium text-blue-light ${noHover ? '' : 'hover:text-white'} ${sharedShadow} ${sharedHover}`,
    compactSecondary: `h-10 px-4 bg-foreground/5 border border-glass-border/50 ${noHover ? '' : 'hover:bg-blue/14'} text-sm font-medium text-foreground/75 ${noHover ? '' : 'hover:text-blue-light'} ${sharedShadow} ${sharedHover}`,
    icon: `w-12 h-12 bg-background/50 border border-glass-border ${noHover ? '' : 'hover:bg-blue/18'} text-foreground/80 ${noHover ? '' : 'hover:text-blue-light'} ${sharedShadow} ${sharedHover} flex-none shrink-0`,
    iconText: `h-12 px-4 bg-background/50 border border-glass-border ${noHover ? '' : 'hover:bg-blue/18'} text-foreground/80 ${noHover ? '' : 'hover:text-blue-light'} ${sharedShadow} ${sharedHover} min-w-0`,
  };

  const widthClass = fullWidth && (variant === 'primary' || variant === 'secondary') ? 'w-full' : '';
  const finalClassName = `${baseClasses} ${variants[variant] || variants.primary} ${widthClass} ${className}`;

  const renderContent = () => (
    <>
      {Icon ? (
        <Icon
          className={variant === 'icon' ? 'text-xl' : variant.startsWith('compact') ? 'text-sm' : 'text-base'}
        />
      ) : null}
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
        download={download || undefined}
        {...rest}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={finalClassName} onClick={onClick} {...rest}>
      {renderContent()}
    </button>
  );
}
