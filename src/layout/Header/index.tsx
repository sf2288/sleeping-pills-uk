import { MENU_ITEMS } from "@/utils/Constants";
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from "next/link";
import React, { Fragment, useState } from "react";

const navigation = {
    ...MENU_ITEMS
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    const [open, setOpen] = useState(false)

    //  drop-shadow-md
    return <header className='text text-gray-600 body-font sticky top-0 bg-white'>
        {/* <div className="container mx-auto flex flex-wrap p-2 md:flex-row justify-between items-center max-w-screen-xl"> */}
        {/* <a className="flex text title-font font-medium items-center text-gray-900 md:mb-0 hover:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">{AppConfig.title}</span>
            </a> */}

        {/* <nav className="lg:flex hidden md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center md:py-3">
                <ul className="flex flex-wrap sm:text-sm text-[14px]">
                    {MENU_ITEMS.map(item => <li className="mx-6" key={item?.pathname}>
                        <Link href={item?.pathname}>
                            <a className="border-none text-gray-700 hover:text-gray-900">
                                {item?.label}
                                <div className="h-0.5 bg-indigo-500 rounded" />
                            </a>
                        </Link>
                    </li>)}
                </ul>
            </nav> */}
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation?.categories.map((category) => (
                                            <Tab
                                                key={category?.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                <a href={category?.href} className="hover:text-gray-800">{category?.name}</a>
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation?.categories.map((category) => (
                                        <Tab.Panel key={category?.name} className="pt-10 pb-8 px-4 space-y-10">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category?.featured?.length && category?.featured?.map((item) => (
                                                    <div key={item?.name} className="group relative text-sm">
                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                            <img src={item?.imageSrc} alt={item?.imageAlt} className="object-center object-cover" />
                                                        </div>
                                                        <a href={item?.href} className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item?.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category?.sections?.length && category?.sections?.map((section) => (
                                                <div key={section?.name}>
                                                    <p id={`${category?.id}-${section?.id}-heading-mobile`} className="font-medium text-gray-900">
                                                        {section?.name}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby={`${category?.id}-${section?.id}-heading-mobile`}
                                                        className="mt-6 flex flex-col space-y-6"
                                                    >
                                                        {section?.items.map((item) => (
                                                            <li key={item?.name} className="flow-root">
                                                                <a href={item?.href} className="-m-2 p-2 block text-gray-500">
                                                                    {item?.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Sign in
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Create account
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4">
                                <a href="#" className="-m-2 p-2 flex items-center">
                                    <img
                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                        alt=""
                                        className="w-5 h-auto block flex-shrink-0"
                                    />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>


            <header className="relative bg-white">
                {/* <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p> */}

                <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center justify-between">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#" className="hover:border-0">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    {navigation?.categories.map((category) => (
                                        <Popover key={category?.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        {category?.href === '/sleeping-pills' ?
                                                            <a className="mt-6 hover:border-0 block font-medium text-gray-900">
                                                                <Popover.Button
                                                                    className={classNames(
                                                                        open
                                                                            ? 'border-indigo-600 text-indigo-600'
                                                                            : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                        'hover:border-0 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px'
                                                                    )}
                                                                >
                                                                    {category?.name}
                                                                </Popover.Button>
                                                            </a> :
                                                            <Link href={category?.href}>
                                                                <a className="mt-6 hover:border-0 block font-medium text-gray-900">
                                                                    <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                    <span
                                                                        className={classNames(
                                                                            open
                                                                                ? 'border-indigo-600 text-indigo-600'
                                                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                                                            'hover:border-b-2 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px'
                                                                        )}
                                                                    >
                                                                        {category?.name}
                                                                    </span>
                                                                </a>
                                                            </Link>}
                                                    </div>
                                                    {category?.featured?.length || category?.sections?.length ?
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                <div className="relative bg-white">
                                                                    <div className="max-w-7xl mx-auto px-8">
                                                                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                                {category?.featured?.map((item) => (
                                                                                    <div key={item?.name} className="group relative text-base sm:text-sm">
                                                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                            <img
                                                                                                src={item?.imageSrc}
                                                                                                alt={item?.imageAlt}
                                                                                                className="object-center object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <a href={item?.href} className="mt-6 block font-medium text-gray-900">
                                                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                            {item?.name}
                                                                                        </a>
                                                                                        <p aria-hidden="true" className="mt-1">
                                                                                            Shop now
                                                                                        </p>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                                {category?.sections?.map((section) => (
                                                                                    <div key={section?.name}>
                                                                                        <p id={`${section?.name}-heading`} className="font-medium text-gray-900">
                                                                                            {section?.name}
                                                                                        </p>
                                                                                        <ul
                                                                                            role="list"
                                                                                            aria-labelledby={`${section?.name}-heading`}
                                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                        >
                                                                                            {section?.items.map((item) => (
                                                                                                <li key={item?.name} className="flex">
                                                                                                    <a href={item?.href} className="hover:text-gray-800">
                                                                                                        {item?.name}
                                                                                                    </a>
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition> : null}
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href="#" className="text-md font-medium  text-indigo-600 hover:text-indigo-800 hover:border-0">
                                        Sign in
                                    </a>
                                    {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-0">
                                        Create account
                                    </a> */}
                                </div>

                                {/* Cart */}
                                {/* <div className="ml-4 flow-root lg:ml-6">
                                    <a href="#" className="group -m-2 p-2 flex items-center hover:border-0">
                                        <ShoppingBagIcon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        {/* <div className="flex p-2 md:flex-row items-center">
                <div className="flex lg:hidden mr-4"><MenuIcon /></div>
                <button
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
                rounded text-base md:mt-0">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div> */}
        {/* </div> */}
    </header>
};