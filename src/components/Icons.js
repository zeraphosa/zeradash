function CodeIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill="#000000">
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path fill="currentColor" d="M20,4H4C2.89,4,2,4.9,2,6v12c0,1.1,0.89,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.11,4,20,4z M20,18H4V8h16V18z M18,17h-6v-2 h6V17z M7.5,17l-1.41-1.41L8.67,13l-2.59-2.59L7.5,9l4,4L7.5,17z" />
      </g>
    </svg>
  );
}

const Icon = ({ name, size }) => {
  const icons = {
    code: CodeIcon,
  };
  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
