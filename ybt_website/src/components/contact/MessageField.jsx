const MessageField = ({ message, handleInputChange }) => {
  return (
    <textarea
        name="message"
        placeholder="Message..."
        value={message}
        onChange={handleInputChange}
        rows="6"
        className="w-full px-4 py-3 bg-white placeholder-gray-500 resize-none border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
    />
  );
};

export default MessageField;