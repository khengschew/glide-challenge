import React from "react";
import { Modal } from "antd";

const ArtistDetail = ({ visible, title, onCancel }) => (
  <Modal
    visible={visible}
    title={title}
    className="artist-modal"
    footer={null}
    onCancel={onCancel}
  />
);

export default ArtistDetail;
