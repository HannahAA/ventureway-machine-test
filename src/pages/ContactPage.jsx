import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the contact page. Add a form or contact info here.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
