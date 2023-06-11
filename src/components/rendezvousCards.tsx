import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import DatePicker from "@/components/DatePicker"
import Modal from './modal'

const watch = [
  { id: 0, name: 'Sélectionnez une montre' },
  { id: 1, name: 'Patek Philippe Grandmaster Chime' },
  { id: 2, name: 'Jacob & Co. Billionaire Watch' },
  { id: 3, name: "Paul Newman's Rolex Daytona " },
  { id: 4, name: 'Patek Philippe Henry Graves Supercomplication ' },
  { id: 5, name: 'Breguet Marie-Antoinette Grand Complication Pocket Watch' },
  { id: 6, name: 'Richard Mille RM 56-02 Sapphire' },
  { id: 7, name: 'Rolex GMT-Master II Ice ' },
  { id: 8, name: 'Audemars Piguet Royal Oak Offshore Grande Complication' },
  { id: 9, name: 'Hublot Big Bang Diamond' },
  { id: 10, name: "Vacheron Constantin Tour de l'Ile" },
]
const expert = [
  { id: 0, name: 'Sélectionnez un expert' },
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Edward Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Norton Rohan' },
]

const service = [
  { id: 0, name: 'Sélectionnez un service', price: -1 },
  { id: 1, name: 'Changement de pile', price: 10 },
  { id: 2, name: 'Remplacement du bracelet', price: 20 },
  { id: 3, name: 'Réparation du mécanisme', price: 250 },
  { id: 4, name: 'Changement du verre', price: 99 },
  { id: 5, name: 'Remplacement des aiguilles', price: 455 },
]

export default function RendezvousCards() {
  const [selectedWatch, setSelectedWatch] = useState(watch[0])
  const [selectedService, setSelectedService] = useState(service[0])
  const [selectedExpert, setSelectedExpert] = useState(expert[0])
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState('9');
  const [minute, setMinute] = useState('00');
  const [showTooltip, setShowTooltip] = useState(false);

  let data = {
    name: inputName,
    email: inputEmail,
    watch: selectedWatch,
    date: date,
    expert: selectedExpert,
    service: selectedService,
    time: `${hour}h${minute}`
  }

  const handleOpen = () => {
    data = {
      name: inputName,
      email: inputEmail,
      watch: selectedWatch,
      date: date,
      expert: selectedExpert,
      service: selectedService,
      time: `${hour}h${minute}`
    }
    setIsOpen(true)
  };
  const handleClose = () => {
    setIsOpen(false)
    setSelectedService(service[0]);
    setSelectedWatch(watch[0]);
    setSelectedExpert(expert[0]);
    setInputName("");
    setInputEmail("");
  };

  const handleNameChange = (event: any) => {
    setInputName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setInputEmail(event.target.value);
  };

  const hours = [];
  for (let i = 9; i <= 17; i++) {
    hours.push(i);
  }

  const minutes = ['00', '10', '20', '30', '40', '50'];

  const handleHourChange = (event: any) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event: any) => {
    setMinute(event.target.value);
  };
  return (
    <div>
      <Modal data={data} isOpen={isOpen} onClose={handleClose} />
      <div className="flex flex-row justify-center space-x-20 h-[60vh]">
        <div className="w-[300px] h-[420px] bg-white shadow-xl p-6 rounded-[30px] flex flex-col justify-center items-center">
          <p className="text-5xl mt-2 font-bold">Tick</p>
          <p className="text-xl p-2 font-medium">Choisissez une date</p>
          <DatePicker setDate={setDate} />
          <div className='flex flex-row items-center mt-3 mb-4'>
            <select value={hour} onChange={handleHourChange}>
              {hours.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            h
            <select value={minute} onChange={handleMinuteChange}>
              {minutes.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
            <div className="relative">
              <div className="w-6 h-6 cursor-pointer ml-2"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                <InformationCircleIcon />
              </div>
              {showTooltip && (
                <div className="absolute bottom-full mb-2 w-48 p-2 border-2 bg-white text-black text-sm rounded">
                  Choisissez un temps
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[400px] bg-white shadow-xl p-6 rounded-[30px]  flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">Tack</p>
          <p className="text-xl p-2 text-center font-medium">Saisissez vos informations</p>
          <Listbox value={selectedWatch} onChange={setSelectedWatch}>
            <div className="relative mt-1">
              <Listbox.Button className=" appearance-none border w-[250px] rounded mt-4 py-2 px-3 text-gray-700 leading-tight cursor-default bg-white relative pr-10 text-left  sm:text-sm">
                <span className="block truncate">{selectedWatch.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {watch.map((watch, watchIdx) => (
                    <Listbox.Option
                      key={watchIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={watch}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {watch.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          <input
            className="appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 "
            type="text"
            placeholder="Entrez votre nom"
            value={inputName}
            onChange={handleNameChange}
          />
          <input
            className="appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="Entrez votre courriel"
            value={inputEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div className="w-[300px] h-[400px] bg-white shadow-xl p-6 rounded-[30px]  flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">Tock</p>
          <p className="text-xl p-2 font-medium">Confirmez le service</p>
          <Listbox value={selectedService} onChange={setSelectedService}>
            <div className="relative mt-1 z-10">
              <Listbox.Button className="z-50 appearance-none border w-[250px] rounded mt-4 py-2 px-3 text-gray-700 leading-tight cursor-default bg-white relative pr-10 text-left  sm:text-sm">
                <span className="block truncate">{selectedService.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="Z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {service.map((service, serviceIdx) => (
                    <Listbox.Option
                      key={serviceIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={service}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {service.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <Listbox value={selectedExpert} onChange={setSelectedExpert}>
            <div className="relative mt-1 z-0">
              <Listbox.Button className="z-0 appearance-none border w-[250px] rounded mt-4 py-2 px-3 text-gray-700 leading-tight cursor-default bg-white relative pr-10 text-left  sm:text-sm">
                <span className="block truncate">{selectedExpert.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {expert.map((expert, expertIdx) => (
                    <Listbox.Option
                      key={expertIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={expert}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            {expert.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <button className="border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight hover:bg-amber-100 hover:text-amber-900" onClick={handleOpen}>Confirmer le rendez-vous</button>
        </div>
      </div>
    </div>
  )
}