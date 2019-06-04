import React from "react";
import useGlobalHook from "./useGlobalHook";

const initialState = { sectionAboutMe: null };

const useGlobal = useGlobalHook(React, initialState);

export default useGlobal;