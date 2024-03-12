import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      // console.log(formData.entries);
      formData.append("access_key", "035c6480-54ab-4575-8359-231a07a8df4b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="bg-[#A43030] flex flex-col items-center p-4 rounded-lg mx-auto my-5 sm:w-[30%] sm:my-6">
        <h1 className="font-spaceGrotesk my-3 text-2xl">Feel free to contact me</h1>
        <form className="flex flex-col gap-3 w-[80%]" onSubmit={onSubmit}>
          <input className="inputField" type="text" name="name" placeholder="Name" required/>
          <input className="inputField" type="email" name="email" placeholder="Email" required/>
          <textarea className="inputField" name="message" placeholder="Any message for me..." required></textarea>
  
          <button className="red-btn mt-5" type="submit">Send</button>
  
        </form>
        <span className="font-spaceGrotesk mt-5">{result}</span>
  
      </div>
    );
  }