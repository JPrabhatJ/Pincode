import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'


const Contact = () => {
  return (
    <div className='bg-gray-100 '>
      <div className="min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center justify-center p-4 mt-16 md:mt-0">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-bold text-center text-purple-600">Contact Pincode</h2>
          <p className="text-gray-600 text-center mt-2">We would love to hear from you!</p>

          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Email" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Message" rows="4" required></textarea>
            </div>

            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-green-700 transition">Send Message</button>
          </form>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-purple-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">(555) 765-4321 (Customer Service)</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-purple-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@pincode.com</p>
                <p className="text-gray-600">orders@pincode.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-purple-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Grocery Mart</p>
                <p className="text-gray-600">Food City, Gurgaon</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-purple-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Store Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 8:00 PM</p>
                  <p>Sunday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Contact