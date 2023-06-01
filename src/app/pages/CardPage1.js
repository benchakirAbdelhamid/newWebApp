"use client";
import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/section.css";
const includedFeatures = ["Private forum access"];
import "../styles/destination.css";
import Modal from "../components/modal/Modal";

const CardPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="parent_content">
      <div className="title_centent">
        <h2>
          Listed Barber <br /> Shops nearby
        </h2>
        <h3>
          <FontAwesomeIcon className="icon_maps" icon={faMapLocationDot} />

          <button onClick={openModal}><span>Show On Map</span></button>
          <Modal isOpen={modalOpen} onClose={closeModal} />
        </h3>
      </div>
      {/* <!-- Modal --> */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26381.766432542834!2d-6.6060288!3d34.2556672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1685578677370!5m2!1sen!2sma"
                style={{ border: "0", width: "100%", height: "80vh" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
       
          </div>
        </div>
      </div> */}

      <div className="paent_card">
        <div className="card">
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div className="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div className="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div className="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="card">
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div className="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPage;
