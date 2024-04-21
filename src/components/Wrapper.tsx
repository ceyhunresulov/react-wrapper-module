type WrapperProps = {
  children: JSX.Element;
};

function Wrapper({ children }: WrapperProps) {
  return <>{children}</>;
}

export default Wrapper;
