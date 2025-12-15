const PreviewBanner = () => {
  // Only show banner if VITE_PREVIEW_MODE is set
  if (!import.meta.env.VITE_PREVIEW_MODE) {
    return null;
  }

  const branchSlug = import.meta.env.VITE_BRANCH_SLUG || 'preview';

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#f59e0b',
        color: '#000',
        padding: '8px 16px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 500,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      🚀 Preview Build: <strong>{branchSlug}</strong> - This is not the production site
    </div>
  );
};

export default PreviewBanner;
