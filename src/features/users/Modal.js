import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums } from "./slice";
import ReactDom from "react-dom";

const Modal = ({ open, children, onClose }) => {
  const { albums } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div>
          {albums.map((album) => {
            return <div key={album.id}>{album.title}</div>;
          })}
        </div>
        <button style={{ marginTop: "1rem" }} onClick={onClose}>
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modal_root")
  );
};

export default Modal;

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "20px",
  zIndex: 1000,
  overflowY: "scroll",
  fontSize: "7px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};
