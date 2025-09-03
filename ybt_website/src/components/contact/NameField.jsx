const NameField = ({ name, handleInputChange }) => {
  return (
    <input
        type="text"
        name="name"
        placeholder="Your Name *"
        value={name}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-3 bg-white placeholder-gray-500 border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
    />
  );
};

export default NameField;