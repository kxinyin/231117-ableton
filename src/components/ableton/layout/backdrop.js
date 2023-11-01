/** @format */

export default function AbletonBackdrop(props) {
  const { isOpen, onClose } = props;

  return (
    <div
      id="backdrop"
      className={`fixed inset-0 backdrop-brightness-75 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    />
  );
}
