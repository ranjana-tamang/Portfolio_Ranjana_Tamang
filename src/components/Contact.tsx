"use client";
import { useState, FormEvent } from "react";
import { Call, Location, Strongbox } from "iconsax-reactjs";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzdolkon", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container_my mainTopBottomPadding" id="contact">
      <div className=" text-center mb-4 sm:mb-8 lg:mb-12">
        <h1 className="topSubHeading">Contact Me</h1>
        <h1 className="subHeading2 max-w-[60%] mx-auto">
          A selection of projects showcasing my frontend development skills and
          problem-solving abilities.{" "}
        </h1>
      </div>
      <div className="bg-[#06131bbd] px-4 sm:px-6 lg:px-8 py-16 rounded-4xl relative overflow-hidden">
        <div className="flex gap-8 md:items-center md:flex-row flex-col">
          {/* LEFT SIDE */}
          <div className="flex-3">
            <div className="flex-1 flex flex-col -mt-40">
              <h1 className="heading mb-4">
                Let's Build Something Great Together
              </h1>

              <h3 className="contextText ">
                Have a project idea or an opportunity? Feel free to reach out.
                I'm always interested in collaborating on exciting frontend
                development projects.
              </h3>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex gap-4 items-center">
                <Strongbox size="18" color="#fff" variant="Bold" />
                <p>ranjanatamang261@gmail.com</p>
              </div>

              <div className="flex gap-4 items-center">
                <Location size="18" color="#fff" variant="Bold" />
                <p>Kathmandu, Nepal</p>
              </div>

              {/* <div className="flex gap-4 items-center">
                <Call size="18" color="#fff" variant="Bold" />
                <p>+1(643) 550-05-90</p>
              </div> */}
            </div>
          </div>

          {/* FORM */}
          <div className="flex-5">
            <h1 className="contextText py-4 font-semibold text-white">
              GET IN TOUCH
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="border px-6 py-3 rounded-lg bg-transparent text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border px-6 py-3 rounded-lg bg-transparent text-white"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="border px-6 py-3 rounded-lg bg-transparent text-white"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="border px-6 py-3 rounded-lg bg-transparent text-white"
                />
              </div>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="border px-6 py-3 rounded-lg bg-transparent text-white"
              />

              <button
                type="submit"
                className="bg-foreground text-cardbg font-semibold py-4 rounded-lg"
              >
                Send Message
              </button>

              {/* STATUS MESSAGE */}
              {status === "success" && (
                <p className="text-green-400">Message sent successfully 🎉</p>
              )}
              {status === "error" && (
                <p className="text-red-400">Something went wrong ❌</p>
              )}
              {status === "loading" && (
                <p className="text-gray-300">Sending...</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
