import styles from './header.module.css';

export default function Header({ hero, description }) {
  return (
    <>
      <h1 className="text-indigo-900 text-3xl font-extrabold mt-8 mb-4">
        {hero}
      </h1>
      <p className="">{description}</p>
    </>
  );
}
