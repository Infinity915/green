import React from "react";
import { Container } from "react-bootstrap";
import { CiWavePulse1 } from "react-icons/ci";
import { BsBroadcast, BsBoundingBoxCircles, BsChatSquareText } from "react-icons/bs";
import { TfiBlackboard } from "react-icons/tfi";
import { FaRegCalendarAlt } from "react-icons/fa";

function Services() {
  const serviceData = [
    {
      icon: <CiWavePulse1 />,
      title: "Nesciunt Mete",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      color: "bg-primary-subtle text-info",
    },
    {
      icon: <BsBroadcast />,
      title: "Eosle Commodi",
      text: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
      color: "bg-warning-subtle text-danger",
    },
    {
      icon: <TfiBlackboard />,
      title: "Ledo Markt",
      text: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
      color: "bg-success-subtle text-success",
    },
    {
      icon: <BsBoundingBoxCircles />,
      title: "Asperiores Commodi",
      text: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
      color: "bg-danger-subtle text-danger",
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Velit Doloremque",
      text: "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
      color: "bg-primary-subtle text-primary",
    },
    {
      icon: <BsChatSquareText />,
      title: "Dolori Architecto",
      text: "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
      color: "bg-danger-subtle text-danger",
    },
  ];

  return (
    <div className="bg-body-tertiary">
      <Container className="text-center p-4 mt-4">
        <h3 className="border-bottom border-3 w-25 mx-auto d-block pb-3">Services</h3>
        <p className="mt-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
          {serviceData.map((service, index) => (
            <div className="col" key={index}>
              <div className="card py-3 shadow h-100">
                <div className={`border rounded-circle px-2 fs-2 ${service.color}`}>
                  {service.icon}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="text-secondary">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Services;
