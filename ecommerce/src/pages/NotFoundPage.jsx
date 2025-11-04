import { Header } from "../components/Header.jsx";
import "./NotFoundPage.css";

export function NotFoundPage({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <h1 className="not-found-text">Page not found</h1>
    </>
  );
}
