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
import parse from 'html-react-parser'



const typeOfFlightListComplete = [{
    name: "Round trip",
    codeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"/></svg>'
}, {
    name: "One way",
    codeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/></svg>'
}, {
    name: "Multi-city",
    codeIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-160 120-320l160-160 57 56-64 64h167v80H273l63 64-56 56Zm280-120q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360q17 0 28.5 11.5T600-320q0 17-11.5 28.5T560-280Zm160 0q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Zm-40-200-57-56 64-64H520v-80h167l-63-64 56-56 160 160-160 160ZM240-600q-17 0-28.5-11.5T200-640q0-17 11.5-28.5T240-680q17 0 28.5 11.5T280-640q0 17-11.5 28.5T240-600Zm160 0q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680q17 0 28.5 11.5T440-640q0 17-11.5 28.5T400-600Z"/></svg>'
}]

const typeOfPeopleByAge = [{
    name: "Adult"
}, {
    name: "Children (Age 2-11)"
}, {
    name: "Infants"
}]

const typeOfServiceFlightByLevel = [{
    name: "Economy"
}, {
    name: "Premium economy"
}, {
    name: "Business"
}, {
    name: "First"
}]


export default function FlightSearchFillInfo() {
    const [typeOfFlight, setTypeOfFlight] = useState(typeOfFlightListComplete[0].name);
    const [typeOfFlightCodeIcon, setTypeOfFlightCodeIcon] = useState(typeOfFlightListComplete[0].codeIcon);
    const [numberPeoplePerType, setNumberPeoplePerType] = useState([
        { type: "Adult", number: 0 }, { type: "Children (Age 2-11)", number: 0 }, { type: "Infants", number: 0 }
    ]);
    const [typeOfServiceFlightToUpdate, setTypeOfServiceFlightToUpdate] = useState("Economy");


    const updatePeoplePerType = (name, action) => {
        console.log(`Updating ${name} by ${action}`);
        setNumberPeoplePerType((prevItems) =>
            prevItems.map((item) =>
                item.type === name
                    ? { ...item, number: item.number + action }
                    : item
            )
        );
    };






    return (
        <div className="-mt-2 p-2 px-12 flex justify-center">
            <div className="flex rounded-2xl bg-slate-800 py-10 text-center">
                <div className="px-8">
                    <PopoverGroup className="flex gap-x-3">
                        <Popover className="py-2.5 text-white font-medium text-gray-900 rounded-lg relative">
                            <PopoverButton
                                className="group inline-flex items-center rounded-md bg-transparent px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                                {parse(typeOfFlightCodeIcon)}
                                {typeOfFlight}
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute rounded-3xl bg-white w-36 -ml-0.5 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4 w-full">

                                    {typeOfFlightListComplete.map((item) => (
                                        <div
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex flex-col">
                                                <button type="button" onClick={() => { setTypeOfFlight(item.name); setTypeOfFlightCodeIcon(item.codeIcon); }} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </PopoverPanel>
                        </Popover>
                        <Popover className="py-2.5 text-white font-medium text-gray-900 rounded-lg relative">
                            <PopoverButton
                                className="group inline-flex items-center rounded-md bg-transparent px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                {numberPeoplePerType[0].number + numberPeoplePerType[1].number + numberPeoplePerType[2].number}
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute rounded-3xl bg-white w-96 -ml-0.5 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {typeOfPeopleByAge.map((item) => (
                                        <div
                                            className="relative flex gap-x-6 grid grid-cols-2 items-center rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 font-semibold text-gray-900"
                                        >
                                            <div className="justify-self-start">
                                                <a className="font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                            <div className="justify-self-end flex gap-x-6">
                                                <button type="button" onClick={() => updatePeoplePerType(item.name, 1)}><span className="relative w-6 h-6 items-center justify-center">+</span></button>

                                                <a>{((name) => {
                                                    for (let i = 0; i < numberPeoplePerType.length; i++) {
                                                        if (numberPeoplePerType[i].type == name) { return numberPeoplePerType[i].number; }
                                                    };
                                                    return 0;
                                                })(item.name)}</a>

                                                <button type="button" onClick={(e) => updatePeoplePerType(item.name, -1)}> <span className="relative w-6 h-6 items-center justify-center">-</span> </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </PopoverPanel>
                        </Popover>
                        <Popover className="py-2.5 text-white font-medium text-gray-900 rounded-lg relative">
                            <PopoverButton
                                className="group items-center rounded-md bg-transparent px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                                {typeOfServiceFlightToUpdate}
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full w-48 rounded-3xl ml-4 -mt-2 bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4 w-full">

                                    {typeOfServiceFlightByLevel.map((item) => (
                                        <div
                                            className="group relative w-full items-center rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex flex-col">
                                                <button type="button" className="font-semibold text-gray-900" onClick={() => setTypeOfServiceFlightToUpdate(item.name)}>
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </PopoverPanel>
                        </Popover>
                    </PopoverGroup>
                    <div className="mt-6 flex items-baseline justify-center gap-x-2">
                        <div>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phoenix" required />
                        </div>
                        <div>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where to?" required />
                        </div>
                        <div>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Departure" required />
                        </div>
                        <div>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Return" required />
                        </div>
                    </div>
                    <button
                        href="#"
                        className="mt-5 w-1/6 justify-center rounded-md bg-indigo-600 px-3 py-2 text-center hover:bg-indigo-500"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div >
    )
}

