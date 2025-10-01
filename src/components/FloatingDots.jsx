function FloatingDots() {
  const spans = [];
  for (let i = 0; i < 10; i++) {
    spans.push(<span key={i} />);
  }
  return <div className="floating-dots">{spans}</div>;
}
export default FloatingDots;
