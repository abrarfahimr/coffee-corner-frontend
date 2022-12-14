import homeIcon from '../../assets/icons/home.svg';
import salesIcon from '../../assets/icons/bar-chart.svg';
import marketingIcon from '../../assets/icons/dollar.svg';
import productIcon from '../../assets/icons/tag.svg';
import transactionIcon from '../../assets/icons/shopping-cart.svg';
import customerIcon from '../../assets/icons/user.svg';

//storing all nav bar details in a component to be mapped.
export const NavBarData = [
  {
    title: 'Home',
    icon: homeIcon ,
    link: '/home',
  },
  {
    title: 'Sales',
    icon: salesIcon,
    link: '/sales',
  },
  {
    title: 'Marketing',
    icon: marketingIcon,
    link: '/marketing',
  },
  {
    title: 'Products',
    icon: productIcon,
    link: '/products',
  },
  {
    title: 'Transactions',
    icon: transactionIcon,
    link: '/transaction',
  },
  {
    title: 'Customers',
    icon: customerIcon,
    link: '/customer',
  },
];

