import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const ContactComponent = () => {
  return (
    <Main
      meta={
        <Meta
          title={AppConfig.title}
          description={AppConfig.description}
        />
      }
    >
      <header className="bg-white shadow">
        <div className="container max-w-screen-xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
        </div>
      </header>
      <main>
        <div className="container max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start">
                <section className="text-gray-600 body-font">
                  <div className="container">
                    <div >
                      <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                          <div className="">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                        </div>
                        <div className="p-2 w-1/2">
                          <div>
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <div>
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                          <a className="text-indigo-500">example@email.com</a>
                          <p className="leading-normal my-5">49 Smith St.
                            <br />Saint Cloud, MN 56301
                          </p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                              </svg>
                            </a>
                            <a className="ml-4 text-gray-500">
                              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:mt-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-600" >Company Address</h1>
                <p className="leading-relaxed mb-5 text-gray-600 text-lg">Brindley House, 101 Newhall Street
                  BIRMINGHAM, B3 1LJ</p>
                <p className="leading-relaxed mb-5 text-gray-600  text-lg">0121 318 8897</p>
                <p className="leading-relaxed mb-5 text-gray-600 text-lg" ><span className="font-bold ...">Working hours </span> : 24 hours a day</p>
                <p className="leading-relaxed mb-5 text-gray-600 text-lg" ><span className="font-bold ...">Working days</span> : 7 days a week</p>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap">
                <div className="flex flex-col items-start">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-600 mt-4">Insomnia, Pain, and Anxiety Relief</h2>
                  <p className="leading text-lg">Many people feel uncomfortable when asking questions about sleeping pills. Sleeping pills are most commonly used to help people sleep, but we also provide medications for the relief of pain and anxiety. If you or someone you know is suffering from one or more of these conditions, you have found a safe, convenient, and affordable place to find the kind of medications you need.</p>


                </div>

              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap">
                <div className="flex flex-col items-start">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-600 mt-4">Privacy and Discretion</h2>
                  <p className="leading text-lg">Making an appointment and going to see a doctor can be difficult, uncomfortable, or embarrassing for many people, and they continue to suffer from disorders that can be easily treated. We understand that some people need privacy and discretion when asking questions that may be of a sensitive or personal nature. If you are suffering in silence from insomnia, pain, or anxiety; we have put together many of the Frequently Asked Questions about the most popular and reliable medicines used today.</p>


                </div>

              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap">
                <div className="flex flex-col items-start">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-600 mt-4">Frequently Asked Questions</h2>
                  <p className="leading text-lg">While we are confident that we have included the most important information such as: how to order, what your delivery will look like, and how we can supply these medicines at such great prices; we also have a dedicated team to answer any urgent questions you may have about the products available on our website.</p>

                </div>

              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap">
                <div className="flex flex-col items-start">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-600 mt-4">Support</h2>
                  <p className="leading text-lg">This FAQ section includes many questions asked by our customers. Simply click on a FAQ category or product below to view the answers.
                    Our team is available 24/7 and can be contacted using either email, phone, or live chat from the privacy of your home or place of work.</p>


                </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </Main>
  )
};

export default ContactComponent;