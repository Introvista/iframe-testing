export default function FullscreenPage() {
  const iframeSrc = "https://www.appsheet.com/start/84b07815-e8e0-4697-9a4d-a96f8f5012c7"
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <iframe
        src={iframeSrc}
        style={{ height: '100%', width: '100%', border: 'none' }}
        title="Fullscreen AppSheet iframe"
      ></iframe>
    </div>
  );
}
