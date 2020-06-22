import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../Title/Title"
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Cows will fly. cows will fly",
      },
      {
        icon: <FaHiking />,
        title: "Beautiful Sceneries",
        info: "Cows will fly. cows will fly",
      },
      {
        icon: <FaShuttleVan />,
        title: "convinient transport location",
        info: "Cows will fly. cows will fly",
      },
      {
        icon: <FaBeer />,
        title: "strongest, tasty beer",
        info: "Cows will fly. cows will fly",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
