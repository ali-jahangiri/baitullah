import React from "react";
import { createPortal } from "react-dom";

const PortalContainer = ({ children }) => {
	return createPortal(children, document.getElementById("portal-container"));
};

export default PortalContainer;
