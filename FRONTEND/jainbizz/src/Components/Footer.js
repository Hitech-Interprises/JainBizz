import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black">
    <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
            <div>
                <h2 className="pb-4 text-xl font-semibold white text-yellow-500">COMPANY</h2>
                <div className="flex flex-col ">
                    <a className="py-1 hover:underline" href="/about">About Us</a>
                    <a className="py-1 hover:underline" href="/press">Press</a>
                    <a className="py-1 hover:underline" href="/careers">Careers</a>
                    <a className="py-1 hover:underline" href="/contact">Contact</a>
                </div>
            </div>
            <div>
                <h2 className="pb-4 text-xl font-semibold text-yellow-500">DEVELOPMENT</h2>
                <div className="flex flex-col ">
                    <a className="py-1 hover:underline" href="/about">Documentation</a>
                    <a className="py-1 hover:underline" href="/press">API Reference</a>
                    <a className="py-1 hover:underline" href="/careers">Changelog</a>
                    <a className="py-1 hover:underline" href="/contact">Status</a>
                </div>
            </div>
            <div>
                <h2 className="pb-4 text-xl font-semibold text-yellow-500">CONNECT</h2>
                <div className="flex flex-col ">
                    <a className="py-1 hover:underline" href="/about">Instagram</a>
                    <a className="py-1 hover:underline" href="/press">Linkedin</a>
                    <a className="py-1 hover:underline" href="/careers">Twitter</a>
                </div>
            </div>
        </div>
        <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
            <p className="pb-4 text-xl font-semibold text-white">STAY UPDATED</p>
            <div className="relative lg:max-w-sm">
                <input className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="Email Address" />
                <button className="absolute h-10 px-3 text-sm text-white bg-yellow-500 rounded-full top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">Subscribe</button>
            </div>
            <p className="pt-4 text-gray-500">
                By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
            </p>
        </div>
    </div>


</div>
  )
}

export default Footer