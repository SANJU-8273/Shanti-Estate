import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("Name")?.trim();
    const email = formData.get("Email")?.trim();

    // Simple validation
    if (!name || !email) {
      toast.error("Please fill in both Name and Email.");
      return;
    }

    setResult("Sending....");
    formData.append("access_key",  "632e959b-65da-4495-b57f-fef9a7a9eaec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success(" Form sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
        toast.error("Error submitting form. Please try again later.");
      setResult("");
    }
  };



  return (
    <div className='text-center p-6 py-20 lg:px-12 w-full overflow-hidden' id='Contact' >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center' >Contact <span className='underline underline-offset-4 decoration-1 under font-light' >With Us</span></h1>
        <p className='text-center text-gray-500 bg-conic-120 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together  </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
            <div className='flex flex-wrap' >
                <div className='w-full md:w-1/2 text-left'>Your Name
                    <input name='Name' type="text" className='w-full border border-gray-300 rounded px-4 py-3 mt-2  '  placeholder='Enter your name' />
                
                </div>
                <div className='w-full md:w-1/2 text-left  md:pl-4'>
                    Your Email
                    <input name='Email' type="email" className='w-full border border-gray-300 rounded px-4 py-3 mt-2 ' placeholder='Enter your email' />
                </div>
           </div>
           <div className='my-6 text-left'>
                Your Message
                
                <textarea  className="w-full border border-gray-300 rounded px-4 py-3 mt-2 h-48 resize-none" name='Message' placeholder='Enter your message'></textarea></div>
              <button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300'>{result?result:"Send Message"}</button>
        </form>






    </div>
  )
}

export default Contact