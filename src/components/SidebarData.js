import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { FaWarehouse } from "react-icons/fa";
import {BsPersonCheckFill} from "react-icons/bs";
import {HiInformationCircle} from "react-icons/hi";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Stores',
    path: '/stores',
    icon: <FaWarehouse />,
    cName: 'nav-text'
  },
  {
    title: 'Applied-Merchs',
    path: '/appliedmerchs',
    icon: <BsPersonCheckFill />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <HiInformationCircle />,
    cName: 'nav-text'
  },



];
