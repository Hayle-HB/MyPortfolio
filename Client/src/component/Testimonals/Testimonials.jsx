import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Testimonials.css";
import picture from "../../assets/Img/main-one.jpg";
import ShowMore from "./ShowMore/ShowMore.jsx";
// import useFetch from "../../hooks/useFetch.jsx";

// const [data, loading, error] = useFetch('localhost:3000/api/testimonials');

// if(!error){
//   console.log(data);
// }

const Testimonials = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [testimonialsData, setTestimonialsData] = useState([
    {
      id: "1",
      name: "John Doe",
      testimony:
        "This is the best service I've ever used!This is the best service I've ever used!",
      image: picture,
    },
    {
      id: "2",
      name: "Jane Smith",
      testimony: "Amazing experience, highly recommend it!",
      image: picture,
    },
    {
      id: "3",
      name: "Mike Johnson",
      testimony: "Exceeded my expectations in every way.",
      image: picture,
    },
    {
      id: "4",
      name: "Emily Davis",
      testimony: "The customer service is outstanding!",
      image: picture,
    },
    {
      id: "5",
      name: "David Wilson",
      testimony: "A truly exceptional experience from start to finish.",
      image: picture,
    },
    {
      id: "6",
      name: "Sophia Martinez",
      testimony: "I highly recommend them for their professionalism.",
      image: picture,
    },
    {
      id: "7",
      name: "James Brown",
      testimony: "Great value for money and top-notch quality.",
      image: picture,
    },

    {
      id: "8",
      name: "Haylemeskel",
      testimony: "Great value for money and top-notch quality.",
      image: picture,
    },
  ]);

  // async function fetchTestimonials() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/testimonials", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json", 
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok: " + response.statusText);
  //     }

  //     const testimonials = await response.json();
  //     console.log(testimonials); // Handle the fetched testimonials
  //   } catch (error) {
  //     console.error("There was a problem fetching the testimonials:", error);
  //   }
  // }

  // fetchTestimonials();

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsData.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSelected = (index) => {
    let newIdx;
    if (!isSelected) {
      setSelected(index);
      setIsSelected(true);
    } else {
      setSelected(null);
      setIsSelected(false);
    }
  };

  const fetchTestimonialsData = async () => {
    try {
      const result = await fetch("localhost");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {};

  const handleDelete = (index) => {
    const newData = testimonialsData.filter((item) => item.id != index);
    setIsSelected(false);
    setSelected(null);
    setTestimonialsData(newData);
  };

  return (
    <div className="testimonials-container">
      <div>
        <h1>Testimonials</h1>
      </div>
      {!isSelected && (
        <div className="testimonials-content">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              {...testimonial}
              isHighlighted={index === highlightedIndex}
              handleSelected={handleSelected}
            />
          ))}
        </div>
      )}

      {isSelected && (
        <div className="show-card-container">
          <ShowMore
            selected={testimonialsData[selected]}
            handleSelected={handleSelected}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default Testimonials;
