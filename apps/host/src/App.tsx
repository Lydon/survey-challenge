import React from "react";

import { Modal, ModalOptions } from "@sc/ui";

const App: React.FC = () => {
    const options: ModalOptions = {
        title: "Yield Street Survey Challenge",
        modalPopupInterval: 2000
    }
    return (
        <>
            <Modal options={options}/>
        </>
    );
};

export default App;
