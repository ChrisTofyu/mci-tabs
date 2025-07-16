declare module '*.scss' {
  const styles: {
    readonly [key: string | undefined]: string;
  };
  export default styles;
}
