const SuccessMessage = () => {
  return (
    <div className="flex items-center justify-center h-64">
        <div
        className="px-6 py-4 w-full"
        style={{
            backgroundColor: "#86efac",
        }}
        >
            <p className="text-lg">
                Thanks for contacting us! We will be in touch with you
                shortly.
            </p>
        </div>
    </div>
  );
};

export default SuccessMessage;