interface HelloWorldProps {
  name?: string;
}

export default function HelloWorld({ name = 'World' }: HelloWorldProps) {
  return <h1>Hello, {name}!</h1>;
};
