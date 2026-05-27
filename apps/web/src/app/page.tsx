import { APP_NAME } from '@litefeed/shared';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'sans-serif'
      }}
    >
      <h1>{APP_NAME}</h1>
    </main>
  );
}
