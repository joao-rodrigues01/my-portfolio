import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { cn } from "../../utils/cn";

interface DropDownMenuRootProps {
  buttonLabel: React.ReactNode;
  children: React.ReactNode;
}

function DropDownMenuRoot({ children, buttonLabel }: DropDownMenuRootProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inherit px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:bg-inherit dark:text-inherit dark:hover:bg-secondary transition-all">
          {buttonLabel}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400 dark:text-inherit"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-secondary">
          <div className="">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function DropDownMenuItem({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Menu.Item
      as="div"
      className="hover:bg-gray-200 dark:hover:bg-gray-900 transition-all hover:rounded-bl-md"
    >
      {children}
    </Menu.Item>
  );
}

export const DropDownMenu = {
  Root: DropDownMenuRoot,
  Item: DropDownMenuItem,
};
