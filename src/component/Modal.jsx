import React from 'react';
import './Modal.scss';

const Modal = ({
    show
}) => {
    return <> {show ?
        <div className="modalcontainer">
            <div className="modal">
                <header className="headr_modal">
                    <h1 className="modal_header-title">
                        Modal Title
                    </h1>
                    <button className="close">
                        close
                    </button>
                </header>
                <main className="modal_content">
                    This is Modal content
                </main>
                <footer className="footer_modal">
                    <button className="modal_close">close</button>
                    <button className="modal_submit">submit</button>
                </footer>
            </div>
        </div>


        : null} </>

}
export default Modal
