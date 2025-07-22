export default function FullscreenPage() {
  const iframeSrc = "https://www.appsheet.com/start/4b674bb4-8656-4227-93c7-c97e36d530f8"
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
