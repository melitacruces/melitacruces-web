export default function ResendIcon({ style, ...props }) {
  return (
    <img
      src="https://cdn.resend.com/brand/resend-icon-white.svg"
      alt="Resend"
      style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}
      {...props}
    />
  );
}
