'use client'

import { useState } from 'react'
import HeaderGoogleTravel from './components/header'
import FlightSearchFillInfo from './components/flightSearchFillInfo'
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

export default function Example() {
  const [flightDirection, setFlightDirection] = useState('Round trip')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="text-white">
      <HeaderGoogleTravel/>
      <div className="flex justify-center">
        <img className="h-96 w-2/3" src="/Screenshot 2024-09-27 at 4.46.17 PM.png" />
      </div>
      <div className="justify-between text-center my-1">
        <a href="#" className="-m-1.5 p-1.5 text-6xl">
          Flights
        </a>
      </div>
      <FlightSearchFillInfo/>
      <div className="justify-center flex">
        <p
          href="#"
          className="-ml-80 mt-5 justify-center px-3 py-2 text-center hover:bg-indigo-500 text-2xl"
        >
          Find cheap flights from Phoenix to anywhere
        </p>
      </div>
      <div className="justify-around flex -ml-20">
        <PopoverGroup className="flex gap-x-3 -ml-40">
          <button type="button" className="border border-gray-300 hover:text-sky-400 hover:bg-slate-700 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">
            Phoenix
          </button>
          <button type="button" className="border border-gray-300 hover:text-sky-400 hover:bg-slate-700 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">
            Tucson
          </button>
          <button type="button" className="border border-gray-300 hover:text-sky-400 hover:bg-slate-700 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">
            Grand Canyon Village
          </button>
          <button type="button" className="border border-gray-300 hover:text-sky-400 hover:bg-slate-700 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">
            Yuma
          </button>
        </PopoverGroup>
      </div>
      <div className="flex justify-center">
        <img className="h-80 w-1/2" src="/Screenshot2024-09-27at3.24.35PM.png" />
      </div>
    </div>
  )
}

