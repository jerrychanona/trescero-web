type ArrowDownProps = {
  className?: string;
};

export default function ArrowDown({
  className = "",
}: ArrowDownProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 4V20M12 20L6 14M12 20L18 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}