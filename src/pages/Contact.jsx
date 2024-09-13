/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Fox } from "../models/Fox";
import { OrbitControls } from "@react-three/drei";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    console.log(form);
    emailjs
      .send(
        "service_lnxhmer",
        "template_e2yvuex",
        {
          from_name: form.name,
          to_name: "Ak1yama",
          from_email: form.email,
          to_email: "quanganhcf4@gmail.com",
          message: form.message,
        },
        "7cRqMcK4RlMHMmcIX"
      )
      .then((result) => {
        console.log(result);
        setIsLoading(false);

        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setCurrentAnimation("idle");
        setIsLoading(false);
      });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg-flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-4 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div>
            <label className="text-black-500 font-semibold">Name</label>
            <input
              type="text"
              className="input"
              placeholder="John Doe"
              required
              onChange={handleChange}
              name="name"
              value={form.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Email</label>
            <input
              type="email"
              className="input"
              placeholder="myname@example.com"
              required
              onChange={handleChange}
              name="email"
              value={form.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Message</label>
            <textarea
              className="textarea"
              placeholder="Your message here"
              required
              onChange={handleChange}
              name="message"
              value={form.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <OrbitControls />
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[1, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
