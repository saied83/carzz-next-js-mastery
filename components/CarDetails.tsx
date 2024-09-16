import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}
const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
  return (
    <>
      <Transition></Transition>
    </>
  );
};

export default CarDetails;
