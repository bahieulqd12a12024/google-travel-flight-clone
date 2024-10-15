'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]



export default function HeaderGoogleTravel() {

    return (
        <header className="bg-slate-800 text-white">
            <nav className="flex p-6 gap-4">
                <Popover className="relative py-5">
                    <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </PopoverButton>
                    {/* <PopoverPanel
                        transition
                        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="p-4">
                            {products.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                    </div>
                                    <div className="flex-auto">
                                        <a href={item.href} className="block font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </PopoverPanel> */}
                </Popover>
                <div className="flex p-4">
                    <a href="#" className="-m-1.5 p-1.5 text-2xl">
                        Google
                    </a>
                </div>
                <PopoverGroup className="flex gap-x-3">

                    <button type="button" className="pt-4 flex border border-gray-300 hover:text-sky-400 hover:bg-slate-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M288-144q-29 0-50.5-20T216-213v-435q0-29.7 21.12-50.85Q258.23-720 287.88-720h71.89v-72q0-29.7 21.11-50.85Q402-864 432-864h96q29.7 0 50.85 21.12Q600-821.77 600-792.12v71.89h72q29.7 0 50.85 21.11Q744-678 744-648v434q0 28.87-21.5 49.44Q701-144 672-144v5q0 18.28-12.5 30.64T630-96q-17 0-29.5-12.36T588-139v-5H372v6q0 17-12.36 29.5Q347.27-96 329-96q-17.42 0-29.21-12.5T288-138v-6Zm0-72h384v-432H288v432Zm84-48h72v-336h-72v336Zm144 0h72v-336h-72v336Zm-84-456h96v-72h-96v72Zm48 288Z" /></svg>
                        Travel
                    </button>
                    <button type="button" className="pt-4 flex border border-gray-300 hover:text-sky-400 hover:bg-slate-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.81-834q69.81-30 149.19-30 142 0 246.6 88.93Q831.21-686.13 857-552h-73.88Q766-625 717.5-681.5T600-767v23q0 29.7-21.15 50.85Q557.7-672 528-672h-96v48q0 20.4-13.8 34.2Q404.4-576 384-576h-48v96h48v96h-48L175-545q-2.62 16-4.81 32-2.19 16-2.19 33 0 130 91 221t221 91v72Zm333-24L690-243q-20 13-42.4 20t-47.6 7q-70 0-119-49t-49-119q0-70 49-119t119-49q70 0 119 48.95t49 118.88q0 25.17-7 47.67T741-294l123 123-51 51ZM599.77-288Q640-288 668-315.77q28-27.78 28-68Q696-424 668.23-452q-27.78-28-68-28Q560-480 532-452.23q-28 27.78-28 68Q504-344 531.77-316q27.78 28 68 28Z" /></svg>
                        Explore
                    </button>
                    <button type="button" className="pt-4 flex border border-gray-300 hover:text-sky-400 hover:bg-slate-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m401-130-95-176-176-95 67-68 145 25 97-96-309-133 85-85 372 69 120-120q21-21 51-21t51 21q21 21 21 50.5T809-708L689-588l69 373-85 85-133-309-96 97 25 145-68 67Z" /></svg>
                        <div>Flights</div>
                    </button>
                    <button type="button" className="pt-4 flex border border-gray-300 hover:text-sky-400 hover:bg-slate-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M48-192v-576h72v384h312v-336h336q60 0 102 42t42 102v384h-72v-120H120v120H48Zm228-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm228 48h336v-192q0-29.7-21.15-50.85Q797.7-648 768-648H504v264ZM276-504q20.4 0 34.2-13.8Q324-531.6 324-552q0-20.4-13.8-34.2Q296.4-600 276-600q-20.4 0-34.2 13.8Q228-572.4 228-552q0 20.4 13.8 34.2Q255.6-504 276-504Zm0-51Zm228-93v264-264Z" /></svg>
                        Hotels
                    </button>
                    <button type="button" className="pt-4 flex border border-gray-300 hover:text-sky-400 hover:bg-slate-700 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M192-144v-362l-64 50-44-58 396-302 168 128v-80h120v172l108 82-44 58-64-50v362H528v-240h-96v240H192Zm72-72h96v-240h240v240h96v-345L480-725 264-561v345Zm144-336h144q0-30-21-51t-51-21q-30 0-51 21t-21 51Zm-48 336v-240h240v240-240H360v240Z" /></svg>
                        Vacation rentals
                    </button>
                </PopoverGroup>
            </nav>
        </header>
    )
}