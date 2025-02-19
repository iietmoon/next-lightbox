# next-lightbox 📷✨

A lightweight and extendable lightbox provider for Next.js projects, designed for seamless image viewing with smooth navigation.

## Features
✅ Simple and easy-to-use API  
✅ Works seamlessly with `next/image`  
✅ Supports image galleries  
✅ Keyboard navigation (←, →, Esc)  
✅ Fully customizable  

## Installation

```sh
npm install next-lightbox
# or
yarn add next-lightbox
# or
pnpm add next-lightbox
```

## Usage

```tsx
import { LightboxProvider, useLightbox } from 'next-lightbox';

export default function MyApp() {
  return (
    <LightboxProvider>
      <Gallery />
    </LightboxProvider>
  );
}

function Gallery() {
  const { open } = useLightbox();

  return (
    <img
      src="/example.jpg"
      alt="Example"
      onClick={() => open('/example.jpg')}
    />
  );
}
```

## License

MIT License © 2025

