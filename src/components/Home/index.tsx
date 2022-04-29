import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';
import React from "react";

const HomeComponent = () => {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 8,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
  ]

  return (
    <Main
      meta={
        <Meta
          title={AppConfig.title}
          description={AppConfig.description}
        />
      }
    >

      <section className="body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading text-lg">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg" />
          </div>
        </div>
      </section>

      <section className="body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="flex flex-col mb-16 items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome To Sleeping Pills UK</h1>
            <p className="mb-8 leading text-lg">
              Thank you for visiting www.bestsleepingtablets.com - the UK's One Stop Shop for top quality anxiety medication, painkiller pills, nootropics and sleeping tablets! If you are visiting for the first time and you want to buy sleeping pills online in the UK you have come to the right place!
              <br />
              <br />
              All medication displayed is available without a doctor's prescription, or an online consultation of any kind. After payment is received goods are sent immediately from our UK base in plain padded envelopes, and delivery to locations in the United Kingdom takes just 2 - 4 working days!
              <br />
              <br />
              We accept all major credit/debit cards, bank transfers and cryptocurrency (Bitcoin / BTC) - and we offer the best deals on bulk orders. Save time by using our quick checkout to view quantities and prices!
            </p>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading text-lg">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Best Selling Products</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="-m-4">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <a key={product.id} href={product.href} className="group hover:border-0">
                    <div className="w-full first-line:bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Sleeping Tablets in the UK</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>

          <div className="part_2">
            <p className="mb-8 leading text-lg">Sleeping tablets in the UK can provide much-needed relief from insomnia and sleeplessness. This medication can help you fall asleep faster and it can prevent frequent awakenings during the night.</p>

            <p className="mb-8 leading text-lg">
              Sleeping tablets can be divided into two subgroups:
            </p>
            <ol className='list-decimal'>
              <li className="mb-8 leading text-lg ml-10">
                <a href="https://pubmed.ncbi.nlm.nih.gov/12531036/" target="_blank" rel="nofollow" className="extra_link">Non-benzodiazepine</a> medications are also known as hypnotics and have a calming, sleep-inducing effect. They help you sleep throughout the night and include popular names such as <a href="https://www.bestsleepingtablets.com/buy-zopiclone">zopiclone</a>, <a href="https://www.bestsleepingtablets.com/buy-eszopiclone">eszopiclone</a>,  <a href="https://www.bestsleepingtablets.com/buy-zolpidem">zolpidem</a> and <a href="https://www.bestsleepingtablets.com/zaleplon">zaleplon</a>.
              </li>

              <li className="mb-8 leading text-lg ml-10">
                Benzodiazepines are also referred to as sedative-hypnotics and are used to treat anxiety associated with sleep deprivation. They help calm an anxious mind and promote a healthy sleep. These medications include <a href="https://www.bestsleepingtablets.com/buy-diazepam">diazepam</a>, <a href="https://www.bestsleepingtablets.com/buy-alprazolam">alprazolam</a>, <a href="https://www.bestsleepingtablets.com/buy-nitrazepam">nitrazepam</a>, and <a href="https://www.bestsleepingtablets.com/buy-clonazepam">clonazepam</a>.
              </li>
            </ol>
            <p className="mb-8 leading text-lg">Both non-benzodiazepine and benzodiazepine medications work by increasing the effects of a naturally occurring neurotransmitter in the central nervous system called <a href="https://www.healthline.com/health/gamma-aminobutyric-acid" target="_blank" rel="nofollow" className="extra_link">gamma-aminobutyric acid</a>, or GABA. </p>
            <p className="mb-8 leading text-lg">
              This naturally occurring chemical acts as a neurotransmitter in the body which provides a calming effect which can help reduce feelings of anxiety and stress.
            </p>
            <p className="mb-8 leading text-lg">
              In general, non-benzodiazepine 'Z drugs' are considered safer, or better, and are prescribed by doctors more due to the reduced risk of experiencing common side effects such as daytime sleepiness the next day.
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default HomeComponent;
