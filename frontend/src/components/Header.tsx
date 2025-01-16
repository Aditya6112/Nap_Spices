'use client';

import { useState } from 'react';
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
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Processed Spices', description: '10gm-15gm pack', href: '#processed', image: '/images/pro9.jpg' },
  { name: 'Plain Spices', description: '10gm-15gm pack', href: '#smaller', image: '/images/pro9.jpg' },
  { name: 'Plain Spices', description: '100gm pack', href: '#plain', image: '/images/pro15.jpg' },
];

const callsToAction = [
  {
    name: 'Email Sales', href: 'mailto:contact@napspices.com', icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 8.25l-9.75 7.5-9.75-7.5M3.375 7.5l7.313 5.625L21.375 7.5M3.375 6H20.625c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 16.875v-9.75C2.25 6.504 2.754 6 3.375 6z" />
    </svg>
  },
  { name: 'Contact Sales', href: 'tel:+919212986744', icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white" >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">NAP Spices</span>
            <img alt="NAP Spices" src="/images/logo.jpg" className="h-20 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900 hover:underline transition duration-300">
              Categories
              <ChevronDownIcon aria-hidden="true" className="w-6 h-6 text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50"
                  >
                    <div className="flex w-14 h-14 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 hover:underline transition duration-300">
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
                    className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold text-gray-900 hover:underline transition duration-300"
                  >
                    <item.icon aria-hidden="true" className="w-6 h-6 text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#mission" className="text-lg font-semibold text-gray-900 hover:underline transition duration-300">
            Our Mission
          </a>
          <a href="#distribution" className="text-lg font-semibold text-gray-900 hover:underline transition duration-300">
            Become a Distributor or Stockist
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NAP Spices</span>
              <img alt="NAP Spices" src="/images/logo.jpg" className="h-14 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold text-gray-900 hover:underline transition duration-300">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="w-6 h-6 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold text-gray-900 hover:underline transition duration-300"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#mission"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:underline transition duration-300"
                >
                  Our Mission
                </a>
                <a
                  href="#distribution"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 hover:underline transition duration-300"
                >
                  Become a Distributor/Stockist
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
