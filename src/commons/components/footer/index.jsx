"use client"

import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return <div className="flex flex-col bg-primary-green text-primary-white gap-y-4 py-8 px-16">
    <div className="flex gap-x-4">
      <div className="space-y-2">
        <p className="font-bold">Bergabung bersama kami</p>
        <p><FontAwesomeIcon icon={faTelegram} /> Communitive </p>
      </div>
      <div className="flex">
        <div className="space-y-2">
          <p className="font-bold">Hubungi Kami</p>
          <div className="flex gap-x-4">
            <p><FontAwesomeIcon icon={faInstagram} /> motiveacademy.id</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> motiveneeds@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className="self-center">
      <p>© Motive Academy. All rights reserved.</p>
    </div>
  </div>
}

export default Footer