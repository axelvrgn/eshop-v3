type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Tag = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tag;
