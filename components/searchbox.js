import styles from './searchbox.module.css';

export default function Searchbox() {
  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <div className="flex border-2 border-gray-200 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80"
            placeholder="Search..."
          />
          <button
            type="button"
            className="px-4 bg-indigo-900 text-white border-l"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
