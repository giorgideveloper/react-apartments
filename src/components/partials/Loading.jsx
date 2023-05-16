import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

export default function Loading() {
  const loadingEl = document.getElementById("loading");
  const loading = useSelector((state) => state.loading.loading);

  return loading
    ? createPortal(
        <div
          className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed bg-dark top-0 left-0 right-0"
          style={{ opacity: 0.7 }}
        >
          <div className="spinner-overlay">
            <div className="spinner-grow text-light ms-1" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>,
        loadingEl
      )
    : "";
}
