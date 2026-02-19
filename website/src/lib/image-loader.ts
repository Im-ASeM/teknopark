const BASE_PATH = "/teknopark";

export default function imageLoader({ src }: { src: string }) {
  return src.startsWith("/") ? `${BASE_PATH}${src}` : src;
}
