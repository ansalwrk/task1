const [isDoubleClicked, setIsDoubleClicked] = useState(false);

const handleDoubleClick = (e) => {
  setIsDoubleClicked(true);
};

const handleMouseDown = (e) => {
  if (!isDoubleClicked || e.button !== 0) return; // ✅ LEFT CLICK after double click

  setIsDragging(true);
  setStartX(e.pageX - scrollRef.current.offsetLeft);
  setScrollLeft(scrollRef.current.scrollLeft);
};

const handleMouseMove = (e) => {
  if (!isDragging) return;

  e.preventDefault();
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  scrollRef.current.scrollLeft = scrollLeft - walk;
};

const stopDragging = () => {
  setIsDragging(false);
  setIsDoubleClicked(false); // ✅ reset after drag
};