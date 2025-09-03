const EmailField = ({ email, handleInputChange }) => {
  return (
    <input
        type="email"
        name="email"
        placeholder="Your Email *"
        value={email}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-3 bg-white placeholder-gray-500 border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
    />
  );
};

export default EmailField;