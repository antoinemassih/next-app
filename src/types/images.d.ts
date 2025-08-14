declare module '*.JPG' {
  const src: import('next/dist/shared/lib/get-img-props').StaticImport;
  export default src;
}

declare module '*.JPEG' {
  const src: import('next/dist/shared/lib/get-img-props').StaticImport;
  export default src;
}
